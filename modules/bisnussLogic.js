var sante = {};
sante.objectServices = {};
sante.objects = {};
sante.current = {};
sante.constants = {
  'isLoginRequired': true,
};

sante.constants.todaysCalories = 0;

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
  function onSyncSuccess(){
    // kony.application.dismissLoadingScreen();
  	alert("OS Sync success :) ");
    //populateConsumedItems();
  }
 
  function onSyncFailure(){
    // kony.application.dismissLoadingScreen();
    alert("OS Sync failed !! ");
  }
  try {
    // kony.application.showLoadingScreen(null, "Syncing ..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
    var options = {'BatchSize': 100000};
  	objectService.startSync(options, 
                            onSyncSuccess.bind(this),
                            onSyncFailure.bind(this));
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
        var finalItem = itemName + " (" +  quantity + ")     "+ calories + " Cal";
        var calString =  calories + " Cal";
        data[i] = {
              segRecordsLbl: {
                  text: finalItem ? finalItem : '',
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
    alert("Error in reading Sample Order records. " + JSON.stringify(err));
  }
  
  var filters = {
    'whereConditionAsAString': 'CATEGORY = 5'
  }; // TODO fetch for only current user
  var itemObject = getObjectByName("CONSUMED_ITEMS");
  itemObject.get(filters, onSuccess, onFailure);
}
