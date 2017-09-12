var sante = {};
sante.objectServices = {};
sante.objects = {};
sante.current = {};
sante.constants = {
  'isLoginRequired': true,
};

sante.current.category = 1;

sante.constants.todaysCalories = 0;
sante.current.user = {
  'USER_ID': 1,
  'EMAIL': 'test@kony.com',
  'FIRST_NAME': 'Mesut',
  'LAST_NAME': 'Ozil',
  'METADATA': '{\"isVeg\": 1}'
};

function getObjectServiceByName(objectServiceName) {
  if (sante.objectServices[objectServiceName]) {
    return sante.objectServices[objectServiceName];
  } else {
    try {
    	var objectService = new kony.sdk.KNYObjSvc(objectServiceName);
    	sante.objectServices[objectServiceName] = objectService;
    	return objectService;
    } catch (e) {
      alert('Error occured while creating objects: ' + JSON.stringify(e));
    }
    return null;
  }
}

function getObjectByName(objectName) {
  if (sante.objects[objectName]) {
    return sante.objects[objectName];
  } else {
    var objectObj = new kony.sdk.KNYObj(objectName);
    sante.objects[objectName] = objectObj;
    return objectObj;
  }
}

function applicationSetup(){
  function onSuccess() {
    // kony.application.dismissLoadingScreen();
    performObjectServiceSync("SanteOS2");
  }
  function onFailure() {
    //kony.application.dismissLoadingScreen();
    alert("Setup Failed !!");
  }
  
  KNYMobileFabric.OfflineObjects.setup(onSuccess, onFailure);
}

function loginWithUsernamePassword(username, password, identityName) {
  kony.logger.activatePersistors(kony.logger.consolePersistor);
  kony.logger.currentLogLevel = kony.logger.logLevel.TRACE;
  function success() {
    // kony.application.dismissLoadingScreen();
    // kony.application.showLoadingScreen(null, "Setting up ..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
   	applicationSetup();
  }
  function failure() {
    alert ('Login failure !!');
  }
  try {
    var client = kony.sdk.getCurrentInstance().getIdentityService(identityName); 
    if (sante.constants.isLoginRequired) {
      // kony.application.showLoadingScreen(null, "Login ..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
      client.login({'userid': username,
                    'password': password}, success, failure);
    }
  } catch (e) {
    alert (' Error occured while login !! ' + e.toString());
  }
}

function performObjectServiceSync(objectServiceName) {
  var objectService = getObjectServiceByName(objectServiceName);
  var user = getObjectByName("USER");
  function onSuccess(result){
    // kony.application.dismissLoadingScreen();
  	//alert("User Sync success :) ");
    //populateConsumedItems();
    
    var options = {}; //{'BatchSize': 100000};
    
    function onSyncSuccess(result){
      // kony.application.dismissLoadingScreen();
      alert("OS Sync success :) ");
      //populateConsumedItems();
    }

    function onSyncFailure(err){
      // kony.application.dismissLoadingScreen();
      alert("OS Sync failed !! ");
    }
  	objectService.startSync(options, 
                            onSyncSuccess.bind(this),
                            onSyncFailure.bind(this));
  }
 
  function onFailure(err){
    // kony.application.dismissLoadingScreen();
    // alert("User Sync failed !! ");
    
    var options = {}; //{'BatchSize': 100000};
    
    function onSyncSuccess(result){
      // kony.application.dismissLoadingScreen();
      alert("OS Sync success :) ");
      //populateConsumedItems();
      var user = new kony.sdk.KNYObj("USER");
      var options = {};
      var orderByMap = [];
      orderByMap[0] = {};  
      orderByMap[0].EMAIL = currentUser.email;
      options.OrderByMap = orderByMap;
      user.get(options, getSuccess, getFailure);
    }

    function onSyncFailure(err){
      // kony.application.dismissLoadingScreen();
      alert("OS Sync failed !! ");
    }
  	objectService.startSync(options, 
                            onSyncSuccess.bind(this),
                            onSyncFailure.bind(this));
  }
  try {
    // kony.application.showLoadingScreen(null, "Syncing ..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
    var options = {}; //{'BatchSize': 100000};
    user.startSync(options, 
                   onSuccess.bind(this),
                   onFailure.bind(this));
  } catch(e) {
     alert (' Error occured while os Sync !! ' + JSON.stringify(e));
  }
}


function populateItemInFrmItemsKA(options) {
  function onSuccess(records) {
    itemRecords = records;
    var data = [];  
   
    var noOfRecords = records.length;
    for (var i = 0; i < noOfRecords; i++) {
        var objRecord = records[i];
        var itemName =  objRecord.ITEM_NAME;
        var quantity = objRecord.QUANTITY;
        var calories = objRecord.CALORIES;
        var itemId = objRecord.ITEM_ID;
        var finalItem = itemName + " (" +  quantity + ")     "+ calories + " Cal";
        var calString =  calories + " Cal";
        data[i] = {
              segRecordsLbl: {
                  text: finalItem ? finalItem : '',
              },
          	  lblItemID: {
            	text: itemId
          	  }
           };
    }
 
    frmItemsKA.segItems.removeAll();
    frmItemsKA.segItems.data = data;
    
  }
  
  function onFailure(err) {
    alert("Error in reading Sample Order records. " + JSON.stringify(err));
  }
  
  var filters = options ? options : {};
  var itemObject = getObjectByName("ITEMS");
  itemObject.get(filters, onSuccess, onFailure);
}

function populateConsumedItemsBreakFast(options) {
  function onSuccess(records) {
    var itemIdAsString = "(";
   
    var noOfRecords = records.length;
    for (var i = 0; i < noOfRecords; i++) {
        var objRecord = records[i];
        var itemID =  objRecord.ITEM_ID;
        itemIdAsString += itemID;
      	if (i + 1 < noOfRecords) {
          itemIdAsString += ",";
        }
    }
    
    itemIdAsString += ")";
    
    function onItemGetSuccess(consumedItems) {
        var data = [];
      	var consumedCalories = 0;
      	var noOfRecords = consumedItems.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = consumedItems[i];
            var itemName =  objRecord.ITEM_NAME;
            var quantity = objRecord.QUANTITY;
            var calories = objRecord.CALORIES;
            var finalItem = itemName + " (" +  quantity + ")";
            var calString =  calories + " Cal";
            data[i] = {
              segRecordsLbl: {
                  text: finalItem ? finalItem : '',
              },
              segCalorieslbl: {
                  text: calString
              }
           };
          
          var caloriesInt = parseInt(calories);
          consumedCalories += caloriesInt;
        }
      
      	sante.constants.todaysCalories += consumedCalories;
        frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/1400 Cal";
      
      	frmDietKA.segConsumedItems.removeAll();
		frmDietKA.segConsumedItems.data = data;
      
      	frmDietKA.lblCalories1.text = consumedCalories + "/" + "300";
    }
    
    function onItemGetFailure(err) {
      alert("Error in reading Sample Order records. " + JSON.stringify(err));
    }
    
    var whereCondition = "ITEM_ID IN " +  itemIdAsString;
    var itemFilter = {
      "whereConditionAsAString": whereCondition
    };
    
    var itemObject = getObjectByName("ITEMS");
  	itemObject.get(itemFilter, onItemGetSuccess, onItemGetFailure);
  }
  
  function onFailure(err) {
    alert("Error in reading Sample Order records. " + JSON.stringify(err));
  }
  
  var filters = {
    'whereConditionAsAString': 'CATEGORY = 1'
  }; // TODO fetch for only current user
  var itemObject = getObjectByName("CONSUMED_ITEMS");
  itemObject.get(filters, onSuccess, onFailure);
}


function populateConsumedItemsMorningSnacks(options) {
  function onSuccess(records) {
    var itemIdAsString = "(";
   
    var noOfRecords = records.length;
    for (var i = 0; i < noOfRecords; i++) {
        var objRecord = records[i];
        var itemID =  objRecord.ITEM_ID;
        itemIdAsString += itemID;
      	if (i + 1 < noOfRecords) {
          itemIdAsString += ",";
        }
    }
    
    itemIdAsString += ")";
    
    function onItemGetSuccess(consumedItems) {
        var data = [];
      	var consumedCalories = 0;
      	var noOfRecords = consumedItems.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = consumedItems[i];
            var itemName =  objRecord.ITEM_NAME;
            var quantity = objRecord.QUANTITY;
            var calories = objRecord.CALORIES;
            var finalItem = itemName + " (" +  quantity + ")";
            var calString =  calories + " Cal";
            data[i] = {
              segRecordsLbl: {
                  text: finalItem ? finalItem : '',
              },
              segCalorieslbl: {
                  text: calString
              }
           };
          
          var caloriesInt = parseInt(calories);
          consumedCalories += caloriesInt;
        }
      
        sante.constants.todaysCalories += consumedCalories;
        frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/1400 Cal";
      
      	frmDietKA.segMorningSnack.removeAll();
		frmDietKA.segMorningSnack.data = data;
      
      	frmDietKA.CopylblCalories0a89328abee6640.text = consumedCalories + "/" + "300";
    }
    
    function onItemGetFailure(err) {
      alert("Error in reading Sample Order records. " + JSON.stringify(err));
    }
    
    var whereCondition = "ITEM_ID IN " +  itemIdAsString;
    var itemFilter = {
      "whereConditionAsAString": whereCondition
    };
    
    var itemObject = getObjectByName("ITEMS");
  	itemObject.get(itemFilter, onItemGetSuccess, onItemGetFailure);
  }
  
  function onFailure(err) {
    alert("Error in reading Sample Order records. " + JSON.stringify(err));
  }
  
  var filters = {
    'whereConditionAsAString': 'CATEGORY = 2'
  }; // TODO fetch for only current user
  var itemObject = getObjectByName("CONSUMED_ITEMS");
  itemObject.get(filters, onSuccess, onFailure);
}

function populateConsumedItemsLunch(options) {
  function onSuccess(records) {
    var itemIdAsString = "(";
   
    var noOfRecords = records.length;
    for (var i = 0; i < noOfRecords; i++) {
        var objRecord = records[i];
        var itemID =  objRecord.ITEM_ID;
        itemIdAsString += itemID;
      	if (i + 1 < noOfRecords) {
          itemIdAsString += ",";
        }
    }
    
    itemIdAsString += ")";
    
    function onItemGetSuccess(consumedItems) {
        var data = [];
      	var consumedCalories = 0;
      	var noOfRecords = consumedItems.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = consumedItems[i];
            var itemName =  objRecord.ITEM_NAME;
            var quantity = objRecord.QUANTITY;
            var calories = objRecord.CALORIES;
            var finalItem = itemName + " (" +  quantity + ")";
            var calString =  calories + " Cal";
            data[i] = {
              segRecordsLbl: {
                  text: finalItem ? finalItem : '',
              },
              segCalorieslbl: {
                  text: calString
              }
           };
          
          var caloriesInt = parseInt(calories);
          consumedCalories += caloriesInt;
        }
      
        sante.constants.todaysCalories += consumedCalories;
        frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/1400 Cal";
      
      	frmDietKA.segLunch.removeAll();
		frmDietKA.segLunch.data = data;
      
      	frmDietKA.CopylblCalories0e2db4b45fec14e.text = consumedCalories + "/" + "300";
    }
    
    function onItemGetFailure(err) {
      alert("Error in reading Sample Order records. " + JSON.stringify(err));
    }
    
    var whereCondition = "ITEM_ID IN " +  itemIdAsString;
    var itemFilter = {
      "whereConditionAsAString": whereCondition
    };
    
    var itemObject = getObjectByName("ITEMS");
  	itemObject.get(itemFilter, onItemGetSuccess, onItemGetFailure);
  }
  
  function onFailure(err) {
    alert("Error in reading Sample Order records. " + JSON.stringify(err));
  }
  
  var filters = {
    'whereConditionAsAString': 'CATEGORY = 3'
  }; // TODO fetch for only current user
  var itemObject = getObjectByName("CONSUMED_ITEMS");
  itemObject.get(filters, onSuccess, onFailure);
}

function populateConsumedItemsEveningSnack(options) {
  function onSuccess(records) {
    var itemIdAsString = "(";
   
    var noOfRecords = records.length;
    for (var i = 0; i < noOfRecords; i++) {
        var objRecord = records[i];
        var itemID =  objRecord.ITEM_ID;
        itemIdAsString += itemID;
      	if (i + 1 < noOfRecords) {
          itemIdAsString += ",";
        }
    }
    
    itemIdAsString += ")";
    
    function onItemGetSuccess(consumedItems) {
        var data = [];
      	var consumedCalories = 0;
      	var noOfRecords = consumedItems.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = consumedItems[i];
            var itemName =  objRecord.ITEM_NAME;
            var quantity = objRecord.QUANTITY;
            var calories = objRecord.CALORIES;
            var finalItem = itemName + " (" +  quantity + ")";
            var calString =  calories + " Cal";
            data[i] = {
              segRecordsLbl: {
                  text: finalItem ? finalItem : '',
              },
              segCalorieslbl: {
                  text: calString
              }
           };
          
          var caloriesInt = parseInt(calories);
          consumedCalories += caloriesInt;
        }
      
        sante.constants.todaysCalories += consumedCalories;
        frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/1400 Cal";
      
      	frmDietKA.segEveningSnack.removeAll();
		frmDietKA.segEveningSnack.data = data;
      
      	frmDietKA.CopylblCalories0h2492c889b2840.text = consumedCalories + "/" + "300";
    }
    
    function onItemGetFailure(err) {
      alert("Error in reading Sample Order records. " + JSON.stringify(err));
    }
    
    var whereCondition = "ITEM_ID IN " +  itemIdAsString;
    var itemFilter = {
      "whereConditionAsAString": whereCondition
    };
    
    var itemObject = getObjectByName("ITEMS");
  	itemObject.get(itemFilter, onItemGetSuccess, onItemGetFailure);
  }
  
  function onFailure(err) {
    alert("Error in reading Sample Order records. " + JSON.stringify(err));
  }
  
  var filters = {
    'whereConditionAsAString': 'CATEGORY = 4'
  }; // TODO fetch for only current user
  var itemObject = getObjectByName("CONSUMED_ITEMS");
  itemObject.get(filters, onSuccess, onFailure);
}

function populateConsumedItemsDinner(options) {
  function onSuccess(records) {
    var itemIdAsString = "(";
   
    var noOfRecords = records.length;
    for (var i = 0; i < noOfRecords; i++) {
        var objRecord = records[i];
        var itemID =  objRecord.ITEM_ID;
        itemIdAsString += itemID;
      	if (i + 1 < noOfRecords) {
          itemIdAsString += ",";
        }
    }
    
    itemIdAsString += ")";
    
    function onItemGetSuccess(consumedItems) {
        var data = [];
      	var consumedCalories = 0;
      	var noOfRecords = consumedItems.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = consumedItems[i];
            var itemName =  objRecord.ITEM_NAME;
            var quantity = objRecord.QUANTITY;
            var calories = objRecord.CALORIES;
            var finalItem = itemName + " (" +  quantity + ")";
            var calString =  calories + " Cal";
            data[i] = {
              segRecordsLbl: {
                  text: finalItem ? finalItem : '',
              },
              segCalorieslbl: {
                  text: calString
              }
           };
          
          var caloriesInt = parseInt(calories);
          consumedCalories += caloriesInt;
        }
      
      	sante.constants.todaysCalories += consumedCalories;
        frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/1400 Cal";
      
      	frmDietKA.segDinner.removeAll();
		frmDietKA.segDinner.data = data;
      
      	frmDietKA.CopylblCalories0d0e0368543b94d.text = consumedCalories + "/" + "300";
    }
    
    function onItemGetFailure(err) {
      alert("Error in reading Sample Order records. " + JSON.stringify(err));
    }
    
    var whereCondition = "ITEM_ID IN " +  itemIdAsString;
    var itemFilter = {
      "whereConditionAsAString": whereCondition
    };
    
    var itemObject = getObjectByName("ITEMS");
  	itemObject.get(itemFilter, onItemGetSuccess, onItemGetFailure);
  }
  
  function onFailure(err) {
    alert("Error in reading Item records. " + JSON.stringify(err));
  }
  
  var filters = {
    'whereConditionAsAString': 'CATEGORY = 5 and USER_ID = ' + sante.current.user.USER_ID
  };
  var itemObject = getObjectByName("CONSUMED_ITEMS");
  itemObject.get(filters, onSuccess, onFailure);
}

function populateUserDetails() {
  var userDetails = getObjectByName("USER_DETAILS");
  var filters = {
    'whereConditionAsAString': 'USER_ID = ' + sante.current.user.USER_ID
  };
  
  function onFailure(err) {
    alert("Error in reading Item records. " + JSON.stringify(err));
  }
  function onSuccess(records) {
    if (records.length === 0) {
      alert ("No used details found for the user");
    } else {
      var wieght = records[0].WEIGHT;
      var hieght = records[0].HIEGHT;
      var bmi = "-";
      frmUserDetailsKA.tbxName.text = sante.current.user.FIRST_NAME + " " + 
        sante.current.user.LAST_NAME;
      frmUserDetailsKA.tbxNumber.text = "091 - 44567388";
      frmUserDetailsKA.tbxGender.text = "M";
      frmUserDetailsKA.tbxWeight.text = wieght + " Kg";
      frmUserDetailsKA.tbxHeight.text = hieght + " cm";
      
      if (hieght && wieght && hieght !== "" && wieght !== "") {
        bmi = ((parseInt(wieght)/100)/ (parseInt(hieght) * parseInt(hieght)));
      }
      frmUserDetailsKA.tbxBMI.text = bmi;
    }
  }
  userDetails.get(filters, onSuccess, onFailure);
}

function populateGoal() {
  var userDetails = getObjectByName("USER_DETAILS");
  var filters = {
    'whereConditionAsAString': 'USER_ID = ' + sante.current.user.USER_ID
  };
  
  function onFailure(err) {
    alert("Error in reading Item records. " + JSON.stringify(err));
  }
  function onSuccess(records) {
    if (records.length === 0) {
      alert ("No used details found for the user");
    } else {
      var goalweight = records[0].SETGOALWGT;
      frmSetGoalKA.tbxGoalWeight.text = goalweight;
    }
  }
  userDetails.get(filters, onSuccess, onFailure);
}

function addItemsToCategory(eventobject, sectionNumber, rowNumber) {
  var category = sante.current.category;

  var data = frmItemsKA.segItems.data;
  var orderItem = data[rowNumber];
  var itemID = orderItem.lblItemID.text;
  
  function onSuccess(records) {
    frmDietKA.show();
  }
  
  function onFailure(err) {
    alert("Error in adding item record. " + JSON.stringify(err));
  }
  
  var itemObject = getObjectByName("CONSUMED_ITEMS");
  function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  var rString = randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ%343453553');
  var consumedItem = {
    'CONSUMED_ITEM_ID': rString, // TODO generate a item
    'ITEM_ID': itemID + '', 
    'USER_ID': sante.current.user.USER_ID + '', // TODO current user id
    'CATEGORY': category + '',
    'ZDATE': '', // TODO proper datae
  };
  itemObject.create(consumedItem, {}, onSuccess, onFailure);
}

function populateWorkoutDetails() {
   	var userDetails = getObjectByName("USER_DETAILS");
    var filters = {
      'whereConditionAsAString': 'USER_ID = ' + sante.current.user.USER_ID
    };

    function onFailure(err) {
      alert("Error in reading records. " + JSON.stringify(err));
    }
  
  	function onSuccessWorkoutPlan(records) {
        var workout = '';
      	var noOfRecords = records.length;
        var calroies = 0;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = records[i];
            var description =  objRecord.DESCRIPTION;
            workout += description;
           	workout += ".";
          	calroies += parseInt(objRecord.CALORIESTOBEBURN);
        }
      
      	frmPlanKA.lbl2.text = workout;
      	frmPlanKA.Copylbl0ebd8fc5152764c.text = calroies + " Cal";
    }
  
  	function onSuccessWorkout(records) {
       	var itemIdAsString = "(";
   
        var noOfRecords = records.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = records[i];
            var itemID =  objRecord.DIFFICULTY;
            itemIdAsString += itemID;
            if (i + 1 < noOfRecords) {
              itemIdAsString += ",";
            }
        }

        itemIdAsString += ")";
      
        var whereCondition = "PLAN_ID IN " +  itemIdAsString;
        var itemFilter = {
          "whereConditionAsAString": whereCondition
        };

        var workoutPlan = getObjectByName("WORKOUT_PLAN");
        workoutPlan.get(itemFilter, onItemGetSuccess, onFailure);
    }
  
    function onSuccess(records) {
      if (records.length === 0) {
        alert ("No used details found for the user");
      } else {
        var wieghtDiff = records[0].WEIGHT_DIFF;
        
        var workout = getObjectByName("WORKOUT");
        var whereCondition = "WORKOUT_ID = '" + wieghtDiff + "'";
        var filters = {
          'whereConditionAsAString': whereCondition
        };
        
        workout.get(filters, onSuccessWorkout, onFailure);
      }
    }
    userDetails.get(filters, onSuccess, onFailure);
}


// ---------------- LOGIN CODE -------------------

var authClient = {};

function loginWithGoogle() {
  kony.print(" init success ");
  //get the identity service
  authClient = kony.sdk.getCurrentInstance().getIdentityService('SanteIdentity'); //client.getIdentityService(providerName);
  //login
  var options = {};
  
  options.UseDeviceBrowser = true; // This parameter in options will open the login url in native browser.
//#ifdef android
  options.success_url = "http://santeandroid";
//#else
  options.success_url = "santeios://";
//#endif

  authClient.login(options, loginSuccess, loginFailure);
}

function loginSuccess(response) {
  kony.print("login success " + JSON.stringify(response));
  //getting the user profile
  authClient.getProfile(true, getProfileSuccess, getProfileError);
}

function loginFailure(error) {
  kony.print("login failure " + JSON.stringify(error));
}

function getProfileSuccess(response) {
  kony.print("user profile is " + JSON.stringify(response));
  sante.current.google = {};
  sante.current.google.user = response;
  validateCurrentUserProfile();
  //Naviagte to frmDietKA form
  frmUserKA.show();
}

function validateCurrentUserProfile() {
  //check user table for email
  KNYMobileFabric.OfflineObjects.setup(setUpSuccess, setUpFailure);
}

function setUpSuccess() {
  kony.print("setup success");
  //Do a Sync
  loginWithUsernamePassword("tester", "test", "SanteSapIdentity");
}

function getFailure(error) {
  kony.print("cannot find user "+ error.errorCode);
}
  
function getSuccess(records) {
  if(records.length === 0) {
	kony.print("cannot find user ");    
    //create a record in user table with basic information
    var user = new kony.sdk.KNYObj("USER");
    user.FIRST_NAME = sante.current.google.user.firstname;
    user.LAST_NAME = sante.current.google.user.lastname;
    user.EMAIL = sante.current.google.user.email;
    user.create(user, {}, userCreateSuccess, userCreateFailure);
  } else {
	kony.print("found user "+ JSON.stringify(records));
    sante.current.google.user.height = records[0].HEIGHT;
    sante.current.google.user.weight = records[0].WEIGHT;
    sante.current.google.user.age = records[0].AGE;
    sante.current.google.user.weightDiff = records[0].WEIGHT_DIFF;
    sante.current.google.user.totalCalories = records[0].TOTAL_CALORIES;
    sante.current.google.user.imageUrl = records[0].IMAGEURL;
    sante.current.google.user.userId = records[0].USER_ID;
    sante.current.google.user.userDetailsId = records[0].USER_DETAILSID;
    sante.current.google.user.setGoalWeight = records[0].SETGOALWGT;
    sante.current.google.user.date = records[0].ZDATE;
  }
}

function userCreateSuccess(result) {
  kony.print("user created with primary key " + JSON.stringify(result));
  //Create correspoding USER_DETAILS entry
}

function userCreateFailure(error) {
  kony.print("user create failed with error "+ JSON.stringify(error));
}
           
function setUpFailure() {
  kony.print("setup failure");
}

function getProfileError(error) {
	kony.print("failed to fetch profile " + JSON.stringify(error));  
}

function appservicereq(params) {
  	handleDeeplinkCallback(params);// Required validations are done and proceed with rest of login flow.
	var currentForm = kony.application.getCurrentForm();// Form that needs to be shown.
	return currentForm;
}

function populateUserProfile() {
  frmUserKA.lblHeader.text = sante.current.google.user.firstname;
  frmUserKA.lblEmail.text = sante.current.google.user.email;
}

function populateCompleteUserDetails() {
  frmUserDetailsKA.tbxName.text = sante.current.google.user.firstname + " " + sante.current.google.user.lastname;
}

// ------------------ update code -----------------------

function updateUserDetails() {
  var userDetails = {};
  userDetails.AGE = frmUserDetailsKA.tbxAge.text;
  userDetails.WEIGHT = frmUserDetailsKA.tbxWeight.text;
  userDetails.HEIGHT = frmUserDetailsKA.tbxHeight.text;
  
  if(sante.current.user) {
    var options = {};
    var orderByMap = [];
    orderByMap[0] = {};  
    orderByMap[0].EMAIL = sante.current.user.EMAIL;
    options.OrderByMap = orderByMap;
	var user = new kony.sdk.KNYObj("USER");
    user.get(options, getUserSuccess, getUserFailure);
  }
             
  function getUserSuccess(records) {
    if(records.length > 0){
	  kony.print("fetched the record for email " + sante.current.user.EMAIL + " with user id " + records[0].USER_ID);
      //Update User Details table
      var options = {};
      var whereCondition = {};
      whereCondition.USER_ID = records[0].USER_ID;
      options.whereCondition = whereCondition;
	  var uDetails = new kony.sdk.KNYObj("USER_DETAILS");
	  uDetails.updateByPK(userDetails, options, updateUserDetailsSuccess, updateUserDetailsFailure);
    } else {
      kony.print("record doesn't exist with email " + sante.current.user.EMAIL); 
    }
    
    function updateUserDetailsSuccess(result) {
      kony.print("user details "+ JSON.stringify(userDetails) + " updated successfully ");
    }
    
    function updateUserDetailsFailure(error) {
      kony.print("error updating user details "+ JSON.stringify(error));
    }
  }
  
  function getUserFailure(error) {
    kony.print("error in fetching the user with email " + JSON.stringify(error));
  }
}


function updateGoalDetails() {
  
  if(sante.current.user) {
    var options = {};
    var orderByMap = [];
    orderByMap[0] = {};  
    orderByMap[0].EMAIL = sante.current.user.EMAIL;
    options.OrderByMap = orderByMap;
	var user = new kony.sdk.KNYObj("USER");
    user.get(options, getUserSuccess, getUserFailure);
  }
  
  function getUserSuccess(records) {
    if(records.length > 0){
	 kony.print("fetched the record for email " + sante.current.user.EMAIL + " with user id " + records[0].USER_ID);      
     var setGoalWeight = frmSetGoalKA.tbxGoalWeight.text;
     if(setGoalWeight < frmUserDetailsKA.tbxWeight.text) {
       var weightDifference = frmUserDetailsKA.tbxWeight.text - setGoalWeight;
       var totalCaloriesToBurn = weightDifference * 7700;
       var options = {};
       var whereCondition = {};
       whereCondition.USER_ID = records[0].USER_ID;
       options.whereCondition = whereCondition;
       var userDetails = new kony.sdk.KNYObj("USER_DETAILS");
       userDetails.updateByPK(
         					  {"SETGOALWGT":setGoalWeight, 
                              "TOTAL_CALORIRES":totalCaloriesToBurn}, 
                              updateUserDetailsSuccess,
                              updateUserDetailsFailure);
     } else {
      kony.print("please enter weight less than present body weight "); 
     }
    }
    
    function updateUserDetailsSuccess(result) {
      kony.print("user details "+ JSON.stringify(userDetails) + " updated successfully ");
    }
    
    function updateUserDetailsFailure(error) {
      kony.print("error updating user details "+ JSON.stringify(error));
    }
 }
  
 function getUserFailure(error) {
   kony.print("error in fetching the user with email " + JSON.stringify(error));
 }
  
}


