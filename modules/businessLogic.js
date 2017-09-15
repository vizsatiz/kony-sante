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

function applicationSetup() {
    function onSuccess() {
      	kony.application.dismissLoadingScreen();
        performUserUserDetailSync("Sante4", true);
    }

    function onFailure() {
        alert("Setup Failed !!");
    }

    KNYMobileFabric.OfflineObjects.setup(onSuccess, onFailure);
}

function loginWithUsernamePassword(username, password, identityName) {
    kony.logger.activatePersistors(kony.logger.consolePersistor);
    kony.logger.currentLogLevel = kony.logger.logLevel.TRACE;
	kony.application.dismissLoadingScreen();
  
    function success() {
        kony.application.showLoadingScreen(null, "Ready to launch..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
        applicationSetup();
    }

    function failure() {
        alert('Login failure !!');
    }
    try {
        var client = kony.sdk.getCurrentInstance().getIdentityService(identityName);
        if (sante.constants.isLoginRequired) {
            // kony.application.showLoadingScreen(null, "Login ..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
            client.login({
                'userid': username,
                'password': password
            }, success, failure);
        }
    } catch (e) {
        alert(' Error occured while login !! ' + e.toString());
    }
}

function performUserUserDetailSync(objectServiceName) {
	kony.application.showLoadingScreen(null, "Syncing ..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
  
    var user = getObjectByName("USER");
    var userDetials = getObjectByName("USER_DETAILS");

    function successUserDetails(re) {
        kony.print('User and user details sync done');
        var options = {};
        var orderByMap = [];
        orderByMap[0] = {};
        orderByMap[0].EMAIL = sante.current.user.EMAIL;
        options.OrderByMap = orderByMap;
        user.get(options, getSuccess, getFailure);
    }

    function onFailure(err) {
        alert(JSON.stringify(err));
    }

    function onSuccess(result) {
        try {
            var options = {};
            userDetials.startSync(options,
                successUserDetails.bind(this),
                onFailure.bind(this));
        } catch (e) {
            alert(' Error occured while user detail Sync !! ' + JSON.stringify(e));
        }
    }

    try {
        var options = {};
        user.startSync(options,
            onSuccess.bind(this),
            onFailure.bind(this));
    } catch (e) {
        alert(' Error occured while user Sync !! ' + JSON.stringify(e));
    }
}


function performOSSync(osName, doNotNavigate) {
  	kony.application.showLoadingScreen();
  
    var objectService = getObjectServiceByName(osName);
    var metadata = sante.current.user.METADATA;
    var jsonMetadata = JSON.parse(metadata);
    var fPre = '';

    if (jsonMetadata.Veg === 1) {
        fpre = 'FOOD_PREFERENCE eq 1';
    } else {
        fpre = null;
    }


    function onFailure(err) {
      kony.application.dismissLoadingScreen();
        alert(JSON.stringify(err));
    
    }

    function onSuccess(result) {
        kony.print('OS sync success !!');
        if (!doNotNavigate) {
            frmSanteKA.show();
        }
      kony.application.dismissLoadingScreen();
    }

    try {
        var options = {
            'filter': {
                'ITEMS': fpre
            }
        };
        objectService.startSync(options,
            onSuccess.bind(this),
            onFailure.bind(this));
    } catch (e) {
        alert('OS Sync Failed !! ' + JSON.stringify(e));
    }
}

function populateItemInFrmItemsKA(options) {
    function onSuccess(records) {
        itemRecords = records;
        var data = [];

        var noOfRecords = records.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = records[i];
            var itemName = objRecord.ITEM_NAME;
            var quantity = objRecord.QUANTITY;
            var calories = objRecord.CALORIES;
            var itemId = objRecord.ITEM_ID;
            var finalItem = itemName + " (" + quantity + ")     " + calories + " Cal";
            var calString = calories + " Cal";
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
    var totalCal = parseInt(sante.current.user.TOTAL_CAL);
    if (totalCal <= 0) {
        totalCal = 1400;
    }

    function onSuccess(records) {
        var itemIdAsString = "(";

        var noOfRecords = records.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = records[i];
            var itemID = objRecord.ITEM_ID;
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
                var itemName = objRecord.ITEM_NAME;
                var quantity = objRecord.QUANTITY;
                var calories = objRecord.CALORIES;
                var finalItem = itemName + " (" + quantity + ")";
                var calString = calories + " Cal";
                data[i] = {
                    segRecordsLbl: {
                        text: finalItem ? finalItem : ''
                    },
                    segCalorieslbl: {
                        text: calString
                    },
                    metainfo: {
                        clickable: true
                    }
                };

                var caloriesInt = parseInt(calories);
                consumedCalories += caloriesInt;
            }

            sante.constants.todaysCalories += consumedCalories;
            frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/" + totalCal + "Cal";

            frmDietKA.segConsumedItems.removeAll();
            frmDietKA.segConsumedItems.data = data;

            frmDietKA.lblCalories1.text = consumedCalories + "/" + Math.floor(totalCal / 5);
        }

        function onItemGetFailure(err) {
            alert("Error in reading Sample Order records. " + JSON.stringify(err));
        }

        var whereCondition = "ITEM_ID IN " + itemIdAsString;
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
        'whereConditionAsAString': "CATEGORY = 1 and USER_ID = '" + sante.current.user.USER_ID +
            "' and ZDATE = '" + getDateFromCalender() + "'"
    }; // TODO fetch for only current user
    var itemObject = getObjectByName("CONSUMED_ITEMS");
    itemObject.get(filters, onSuccess, onFailure);
}


function populateConsumedItemsMorningSnacks(options) {
    var totalCal = parseInt(sante.current.user.TOTAL_CAL);
    if (totalCal <= 0) {
        totalCal = 1400;
    }

    function onSuccess(records) {
        var itemIdAsString = "(";

        var noOfRecords = records.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = records[i];
            var itemID = objRecord.ITEM_ID;
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
                var itemName = objRecord.ITEM_NAME;
                var quantity = objRecord.QUANTITY;
                var calories = objRecord.CALORIES;
                var finalItem = itemName + " (" + quantity + ")";
                var calString = calories + " Cal";
                data[i] = {
                    segRecordsLbl: {
                        text: finalItem ? finalItem : '',
                    },
                    segCalorieslbl: {
                        text: calString
                    },
                    metainfo: {
                        clickable: true
                    }
                };

                var caloriesInt = parseInt(calories);
                consumedCalories += caloriesInt;
            }

            sante.constants.todaysCalories += consumedCalories;
            frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/" + totalCal + " Cal";

            frmDietKA.segMorningSnack.removeAll();
            frmDietKA.segMorningSnack.data = data;

            frmDietKA.CopylblCalories0a89328abee6640.text = consumedCalories + "/" + Math.floor(totalCal /
                5);
        }

        function onItemGetFailure(err) {
            alert("Error in reading Sample Order records. " + JSON.stringify(err));
        }

        var whereCondition = "ITEM_ID IN " + itemIdAsString;
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
        'whereConditionAsAString': "CATEGORY = 2 and USER_ID = '" + sante.current.user.USER_ID +
            "' and ZDATE = '" + getDateFromCalender() + "'"
    }; // TODO fetch for only current user
    var itemObject = getObjectByName("CONSUMED_ITEMS");
    itemObject.get(filters, onSuccess, onFailure);
}

function populateConsumedItemsLunch(options) {
    var totalCal = parseInt(sante.current.user.TOTAL_CAL);
    if (totalCal <= 0) {
        totalCal = 1400;
    }

    function onSuccess(records) {
        var itemIdAsString = "(";

        var noOfRecords = records.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = records[i];
            var itemID = objRecord.ITEM_ID;
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
                var itemName = objRecord.ITEM_NAME;
                var quantity = objRecord.QUANTITY;
                var calories = objRecord.CALORIES;
                var finalItem = itemName + " (" + quantity + ")";
                var calString = calories + " Cal";
                data[i] = {
                    segRecordsLbl: {
                        text: finalItem ? finalItem : '',
                    },
                    segCalorieslbl: {
                        text: calString
                    },
                    metainfo: {
                        clickable: true
                    }
                };

                var caloriesInt = parseInt(calories);
                consumedCalories += caloriesInt;
            }

            sante.constants.todaysCalories += consumedCalories;
            frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/" + totalCal + " Cal";

            frmDietKA.segLunch.removeAll();
            frmDietKA.segLunch.data = data;

            frmDietKA.CopylblCalories0e2db4b45fec14e.text = consumedCalories + "/" + Math.floor(totalCal /
                5);
        }

        function onItemGetFailure(err) {
            alert("Error in reading Sample Order records. " + JSON.stringify(err));
        }

        var whereCondition = "ITEM_ID IN " + itemIdAsString;
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
        'whereConditionAsAString': "CATEGORY = 3 and USER_ID = '" + sante.current.user.USER_ID +
            "' and ZDATE = '" + getDateFromCalender() + "'"
    }; // TODO fetch for only current user
    var itemObject = getObjectByName("CONSUMED_ITEMS");
    itemObject.get(filters, onSuccess, onFailure);
}

function populateConsumedItemsEveningSnack(options) {
    var totalCal = parseInt(sante.current.user.TOTAL_CAL);
    if (totalCal <= 0) {
        totalCal = 1400;
    }

    function onSuccess(records) {
        var itemIdAsString = "(";

        var noOfRecords = records.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = records[i];
            var itemID = objRecord.ITEM_ID;
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
                var itemName = objRecord.ITEM_NAME;
                var quantity = objRecord.QUANTITY;
                var calories = objRecord.CALORIES;
                var finalItem = itemName + " (" + quantity + ")";
                var calString = calories + " Cal";
                data[i] = {
                    segRecordsLbl: {
                        text: finalItem ? finalItem : '',
                    },
                    segCalorieslbl: {
                        text: calString
                    },
                    metainfo: {
                        clickable: true
                    }
                };

                var caloriesInt = parseInt(calories);
                consumedCalories += caloriesInt;
            }

            sante.constants.todaysCalories += consumedCalories;
            frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/" + totalCal + " Cal";

            frmDietKA.segEveningSnack.removeAll();
            frmDietKA.segEveningSnack.data = data;

            frmDietKA.CopylblCalories0h2492c889b2840.text = consumedCalories + "/" + Math.floor(totalCal /
                5);
        }

        function onItemGetFailure(err) {
            alert("Error in reading Sample Order records. " + JSON.stringify(err));
        }

        var whereCondition = "ITEM_ID IN " + itemIdAsString;
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
        'whereConditionAsAString': "CATEGORY = 4 and USER_ID = '" + sante.current.user.USER_ID +
            "' and ZDATE = '" + getDateFromCalender() + "'"
    }; // TODO fetch for only current user
    var itemObject = getObjectByName("CONSUMED_ITEMS");
    itemObject.get(filters, onSuccess, onFailure);
}

function populateConsumedItemsDinner(options) {
    var totalCal = parseInt(sante.current.user.TOTAL_CAL);
    if (totalCal <= 0) {
        totalCal = 1400;
    }

    function onSuccess(records) {
        var itemIdAsString = "(";

        var noOfRecords = records.length;
        for (var i = 0; i < noOfRecords; i++) {
            var objRecord = records[i];
            var itemID = objRecord.ITEM_ID;
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
                var itemName = objRecord.ITEM_NAME;
                var quantity = objRecord.QUANTITY;
                var calories = objRecord.CALORIES;
                var finalItem = itemName + " (" + quantity + ")";
                var calString = calories + " Cal";
                data[i] = {
                    segRecordsLbl: {
                        text: finalItem ? finalItem : '',
                    },
                    segCalorieslbl: {
                        text: calString
                    },
                    metainfo: {
                        clickable: true
                    }
                };

                var caloriesInt = parseInt(calories);
                consumedCalories += caloriesInt;
            }

            sante.constants.todaysCalories += consumedCalories;
            frmDietKA.lblTotalCal.text = sante.constants.todaysCalories + "/" + totalCal + " Cal";

            frmDietKA.segDinner.removeAll();
            frmDietKA.segDinner.data = data;

            frmDietKA.CopylblCalories0d0e0368543b94d.text = consumedCalories + "/" + Math.floor(totalCal /
                5);
        }

        function onItemGetFailure(err) {
            alert("Error in reading Sample Order records. " + JSON.stringify(err));
        }

        var whereCondition = "ITEM_ID IN " + itemIdAsString;
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
        'whereConditionAsAString': "CATEGORY = 5 and USER_ID = '" + sante.current.user.USER_ID +
            "' and ZDATE = '" + getDateFromCalender() + "'"
    };
    var itemObject = getObjectByName("CONSUMED_ITEMS");
    itemObject.get(filters, onSuccess, onFailure);
}

function populateUserDetails() {
    var userDetails = getObjectByName("USER_DETAILS");
    var filters = {
        'whereConditionAsAString': "USER_ID = '" + sante.current.user.USER_ID + "'"
    };

    function onFailure(err) {
        alert("Error in reading Item records. " + JSON.stringify(err));
    }

    function onSuccess(records) {
        if (records.length === 0) {
            alert("No details found for the user");
        } else {
            var wieght = records[0].WEIGHT;
            var hieght = records[0].HEIGHT;
            var bmi = "-";
            frmUserDetailsKA.tbxName.text = sante.current.user.FIRST_NAME + " " +
                sante.current.user.LAST_NAME;
            frmUserDetailsKA.tbxNumber.text = "+919144567388";
            frmUserDetailsKA.tbxGender.text = "F";
            frmUserDetailsKA.tbxWeight.text = wieght + " Kg";
            frmUserDetailsKA.tbxHeight.text = hieght + " cm";

            if (hieght && wieght && hieght !== "" && wieght !== "") {
              // bmi = w/h*h
                bmi = (parseInt(wieght) / (parseInt(hieght)/100 * parseInt(hieght)/100));
            }
            frmUserDetailsKA.tbxBMI.text = bmi;
        }
    }
    userDetails.get(filters, onSuccess, onFailure);
}

function populateGoal() {
    var userDetails = getObjectByName("USER_DETAILS");
    var filters = {
        'whereConditionAsAString': "USER_ID = '" + sante.current.user.USER_ID + "'"
    };

    function onFailure(err) {
        alert("Error in reading Item records. " + JSON.stringify(err));
    }

    function onSuccess(records) {
        if (records.length === 0) {
            alert("No user details found");
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
        'ZDATE': getDateFromCalender(), // TODO proper datae
    };
    itemObject.create(consumedItem, {}, onSuccess, onFailure);
}

function populateWorkoutDetails() {
    var userDetails = getObjectByName("USER_DETAILS");
    var filters = {
        'whereConditionAsAString': "USER_ID = '" + sante.current.user.USER_ID + "'"
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
            var description = objRecord.DESCRIPTION;
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
            var itemID = objRecord.DIFFICULTY;
            itemIdAsString += itemID;
            if (i + 1 < noOfRecords) {
                itemIdAsString += ",";
            }
        }

        itemIdAsString += ")";

        var whereCondition = "PLAN_ID IN " + itemIdAsString;
        var itemFilter = {
            "whereConditionAsAString": whereCondition
        };

        var workoutPlan = getObjectByName("WORKOUT_PLAN");
        workoutPlan.get(itemFilter, onSuccessWorkoutPlan, onFailure);
    }

    function onSuccess(records) {
        if (records.length === 0) {
            alert("No details found for the user");
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

function loginSuccess(response) {
  	kony.application.dismissLoadingScreen();
    kony.print("login success " + JSON.stringify(response));
  
    //getting the user profile
    kony.application.showLoadingScreen(null, "Getting Profile..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
    authClient.getProfile(true, getProfileSuccess, getProfileError);
}

function loginFailure(error) {
    kony.print("login failure " + JSON.stringify(error));
}

function loginWithGoogle() {
    kony.print(" Init Success ");
    kony.application.showLoadingScreen(null, "Connecting..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER);
  
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

function getProfilePictureSuccess(response) {
   var pictureUrl = response.picture;
   frmUserKA.imgUserProfile.src = pictureUrl;
}

function getProfileSuccess(response) {
    kony.print("User profile is " + JSON.stringify(response));
    sante.current.google = {};
    sante.current.google.user = response;
  	
  	//Get the profile picture of the user
  	authClient.getUserAttributes(getProfilePictureSuccess, getProfileError);
  
    validateCurrentUserProfile();
}

function validateCurrentUserProfile() {
    //check user table for email
    loginWithUsernamePassword("tester", "test", "SanteSapIdentity");
}

function setUpSuccess() {
    kony.print("setup success");
}

function getFailure(error) {
    kony.print("cannot find user " + error.errorCode);
}


var newUser = {};

function getSuccess(records) {
    if (records.length === 0) {
        kony.print("cannot find user ");
        //create a record in user table with basic information
        var user = new kony.sdk.KNYObj("USER");
        newUser = {};
        newUser.USER_ID = sante.current.google.user.email.substring(0, 16);
        newUser.FIRST_NAME = sante.current.google.user.firstname;
        newUser.LAST_NAME = sante.current.google.user.lastname;
        newUser.EMAIL = sante.current.google.user.email;
        newUser.METADATA = "{\"Veg\": 1}";
        user.create(newUser, {}, userCreateSuccess, userCreateFailure);
    } else {
        kony.print("found user " + JSON.stringify(records));
        sante.current.user.USER_ID = records[0].USER_ID;
        sante.current.user.EMAIL = records[0].EMAIL;
        sante.current.user.FIRST_NAME = records[0].FIRST_NAME;
        sante.current.user.LAST_NAME = records[0].LAST_NAME;
        sante.current.user.METADATA = records[0].METADATA;
        var name = sante.current.user.FIRST_NAME + "" + sante.current.user.LAST_NAME;
        var email = sante.current.user.EMAIL;
        frmUserKA.lblHeader.text = name;
        frmUserKA.lblEmail.text = email;
        var userDetails = new kony.sdk.KNYObj("USER_DETAILS");
        // do nothing
        var filters = {
            'whereConditionAsAString': "USER_ID = '" + sante.current.user.USER_ID + "'"
        };

        userDetails.get(filters, getUserDetailsSuccess, userCreateFailure);
    }
}

var newUserDetails = {};

function userCreateSuccess(result) {
    kony.print("user created with primary key " + JSON.stringify(result));
    sante.current.user = newUser;
    var name = sante.current.user.FIRST_NAME + "" + sante.current.user.LAST_NAME;
    var email = sante.current.user.EMAIL;
    frmUserKA.lblHeader.text = name;
    frmUserKA.lblEmail.text = email;

    var userDetails = new kony.sdk.KNYObj("USER_DETAILS");
    var filters = {
        'whereConditionAsAString': 'USER_ID = ' + sante.current.user.USER_ID
    };

    function onSuccess(records) {
        var userDetails = new kony.sdk.KNYObj("USER_DETAILS");
        if (records.length === 0) {
            // create user details

            var newUserDetails = {};
            newUserDetails.USER_ID = newUser.USER_ID;
            newUserDetails.AGE = "0";
            newUserDetails.HEIGHT = "0";
            newUserDetails.IMAGEURL = "0";
            newUserDetails.SETGOALWGT = "0";
            newUserDetails.TOTAL_CALORIES = "0";
            newUserDetails.USER_DETAILSID = newUser.USER_ID;
            userDetails.create(newUserDetails, {}, userDetailsSuccess, userCreateFailure);
        } else {
            // do nothing
            var filters = {
                'whereConditionAsAString': "USER_ID = '" + sante.current.user.USER_ID + "'"
            };

            userDetails.get(filters, getUserDetailsSuccess, userCreateFailure);
        }
    }

    function onFailure(err) {
        alert(JSON.stringify(err));
    }
    userDetails.get({}, onSuccess, onFailure);
}

function userDetailsSuccess() {
    kony.print("user details create success");
    sante.current.user.TOTAL_CAL = newUserDetails.TOTAL_CALORIES;
  	kony.application.dismissLoadingScreen();
  	
  	loginWithBox();
}

function getUserDetailsSuccess(rec) {
    kony.print("user details create success");
    if (rec.length > 0) {
        sante.current.user.TOTAL_CAL = rec[0].TOTAL_CALORIES;
    }
  	kony.application.dismissLoadingScreen();
  
  	loginWithBox();
}

function userCreateFailure(error) {
    alert("Creating User profile failed with error " + JSON.stringify(error));
}

function setUpFailure() {
    kony.print("Setup failure");
}

function getProfileError(error) {
    kony.print("Failed to fetch user profile " + JSON.stringify(error));
}

function appservicereq(params) {
    handleDeeplinkCallback(params); // Required validations are done and proceed with rest of login flow.
    var currentForm = kony.application.getCurrentForm(); // Form that needs to be shown.
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
    userDetails.TOTAL_CALORIES = '1432';

    try {
        var wieght = parseInt(userDetails.WEIGHT);
        var hieght = parseInt(userDetails.HEIGHT);

        var totalCal = 0;
        userDetails.TOTAL_CALORIES = totalCal + '';
    } catch (e) {
        // Igonore
    }

    if (sante.current.user) {
        var options = {
            'whereConditionAsAString': "USER_DETAILSID = '" + sante.current.user.USER_ID + "'"
        };
        var userDetailsObj = new kony.sdk.KNYObj("USER_DETAILS");
        userDetailsObj.get(options, getUserSuccess, getUserFailure);
    }

    function getUserSuccess(records) {
        if (records.length > 0) {
            kony.print("fetched the record for email " + sante.current.user.EMAIL + " with user id " + records[
                0].USER_ID);
            //Update User Details table
            //var options = {};
            var whereCondition = {};
            whereCondition.primaryKeys = {
                'USER_DETAILSID': records[0].USER_DETAILSID
            };
            var uDetails = new kony.sdk.KNYObj("USER_DETAILS");
            uDetails.updateByPK(userDetails, whereCondition, updateUserDetailsSuccess, updateUserDetailsFailure);
        } else {
            kony.print("record doesn't exist with email " + sante.current.user.EMAIL);
        }

        function updateUserDetailsSuccess(result) {
            kony.print("user details " + JSON.stringify(userDetails) + " updated successfully ");
            frmUserKA.show();
        }

        function updateUserDetailsFailure(error) {
            kony.print("error updating user details " + JSON.stringify(error));
        }
    }

    function getUserFailure(error) {
        kony.print("error in fetching the user with email " + JSON.stringify(error));
    }
}


function updateGoalDetails() {

    if (sante.current.user) {
        var options = {
            'whereConditionAsAString': "USER_DETAILSID = '" + sante.current.user.USER_ID + "'"
        };
        var userDetailsObj = new kony.sdk.KNYObj("USER_DETAILS");
        userDetailsObj.get(options, getUserSuccess, getUserFailure);
    }

    function getUserSuccess(records) {
        if (records.length > 0) {
            kony.print("fetched the record for email " + sante.current.user.EMAIL + " with user id " + records[
                0].USER_ID);
            var setGoalWeight = parseInt(frmSetGoalKA.tbxGoalWeight.text);
            //if(setGoalWeight < parseInt(records[0].WEIGHT)) {
            var weightDifference = parseInt(records[0].WEIGHT) - setGoalWeight;
            var totalCal = 0;
            try {
                totalCal = 66 + (13 * parseInt(records[0].WEIGHT)) + (5 * parseInt(records[0].HEIGHT)) - (6 *
                    parseInt(records[0].AGE));

                if (weightDifference < 0) {
                    totalCal += weightDifference * 2;
                } else {
                    totalCal -= weightDifference * 2;
                }
            } catch (e) {
                // Ignore
            }
            var whereCondition = {};
            whereCondition.primaryKeys = {
                'USER_DETAILSID': records[0].USER_DETAILSID
            };
            var userDetails = new kony.sdk.KNYObj("USER_DETAILS");


            userDetails.updateByPK({
                    "SETGOALWGT": setGoalWeight + '',
                    "TOTAL_CALORIES": totalCal + ''
                }, whereCondition,
                updateUserDetailsSuccess,
                updateUserDetailsFailure);


            //} else {
            //alert("please enter weight less than present body weight "); 
            //}
        }

        function updateUserDetailsSuccess(result) {
            kony.print("user details " + JSON.stringify(userDetails) + " updated successfully ");
            sante.current.user.TOTAL_CAL = totalCal;
            frmUserKA.show();
        }

        function updateUserDetailsFailure(error) {
            kony.print("error updating user details " + JSON.stringify(error));
        }
    }

    function getUserFailure(error) {
        kony.print("error in fetching the user with email " + JSON.stringify(error));
    }

}

// ------------ box login -----------

function loginWithBox() {
    var boxAuthClient = kony.sdk.getCurrentInstance().getIdentityService("SanteBoxIdentity");
    var options = {};
    boxAuthClient.login(options, boxLoginSuccess, boxLoginFailure);
}

function boxLoginSuccess(response) {
    kony.print("box login success " + JSON.stringify(response));
    //invoke the integration service for the image
    getBinaryFromBox();
}

function boxLoginFailure(error) {
  	kony.application.dismissLoadingScreen();
    kony.print("login failure " + JSON.stringify(error));
}

function onFileDownloadStartedCallback(res) {
    kony.print("file download started " + JSON.stringify(res));
}

function onChunkDownloadCompleteCallback(res) {
    //alert("file chunk download completed " + JSON.stringify(res));
}

function onFileDownloadCompleteCallback(res) {
    kony.print("file download completed " + JSON.stringify(res));
    try {
        sante.constants.filePath = res.FilePath;
        frmUserKA.show();
    } catch (e) {
        alert("Exception " + JSON.stringify(e) + " while reading image file at location " + JSON.stringify(res));
    }
}

function onFileDownloadFailureCallback(err) {
    sante.constants.filePath = '/data/data/com.orgname.Sample/downloads/' + err.BlobID;
    kony.print("file download failed with error : " + JSON.stringify(err));
    setCurrentDateToCalender();
    frmUserKA.show();

}

function getBinaryFromBox() {
  	kony.application.showLoadingScreen();
  
    var integrationSvc = kony.sdk.getCurrentInstance().getIntegrationService("SanteBoxIntegration");
    integrationSvc.getBinaryData("get_files_fileId_content", {
            "fileId": "223318658418"
        },
        false, {},
        onFileDownloadStartedCallback,
        onChunkDownloadCompleteCallback,
        onFileDownloadCompleteCallback,
        onFileDownloadFailureCallback);
  
  	kony.application.dismissLoadingScreen();
}


function populateItemDetials() {
    var filePath = sante.constants.filePath;
    var imageFile = new kony.io.File(filePath);
    var imgRawBytes = imageFile.read();
    frmEditQuantityKA.imgFood.rawBytes = imgRawBytes;
    frmEditQuantityKA.lblHeader.text = clickedSegmentRowDiet;
    frmEditQuantityKA.CopylblHeader0i39dff53858547.text = clickedSegmentRowDietCalories;
}

function populateFoodPreference() {
    var user_metadata = sante.current.user.METADATA;
    try {
        var metadata = JSON.parse(user_metadata);
        if (metadata && metadata.Veg === 1) {
            frmFoodPreferenceKA.chkboxFoodPreference.selectedKeys = ['cbg1'];
        } else {
            frmFoodPreferenceKA.chkboxFoodPreference.selectedKeys = ['cbg3', 'cbg1'];
        }
    } catch (e) {
        // silent ignore (non veg)
        frmFoodPreferenceKA.chkboxFoodPreference.selectedKeys = ['cbg1', 'cbg3'];
    }
}

function updateFoodPreference() {
    var fpre = {};
    var user = new kony.sdk.KNYObj('USER');
    var seletedKeys = frmFoodPreferenceKA.chkboxFoodPreference.selectedKeys;
    if (seletedKeys[0] === 'cbg3' || seletedKeys[1] === 'cbg3') {
        fpre.Veg = 0;
    } else {
        fpre.Veg = 1;
    }

    var options = {
        'primaryKeys': {
            'USER_ID': sante.current.user.USER_ID
        }
    };

    function onSuccess(res) {
        sante.current.user.METADATA = JSON.stringify(fpre);
        frmUserKA.show();
    }

    function onFailure(err) {
        alert(JSON.stringify(err));
    }

    user.updateByPK({
        'METADATA': JSON.stringify(fpre)
    }, options, onSuccess, onFailure);
}


// --------------- Date base -------

function getDateFromCalender() {
    var dateComponents = frmDietKA.Calendar0b0ad95e8760e43.dateComponents;
    var dateC = parseInt(dateComponents[0]);
    var monthC = parseInt(dateComponents[1]);
    var yearC = parseInt(dateComponents[2]);

    var date = dateC,
        month = monthC;

    if (dateC < 10) {
        date = '0' + dateC;
    }

    if (month < 10) {
        month = '0' + monthC;
    }

    var queryDate = month + '/' + date + '/' + yearC;
    return queryDate;
}

function setCurrentDateToCalender() {
    var  today  =  new  Date();
    var  currDay  =  today.getDay();
    var  currMonth  =  today.getMonth();
    var  currYear  =  today.getYear(); 

    frmDietKA.Calendar0b0ad95e8760e43.dateComponents = [currDay, currMonth, currYear, 0, 0, 0];
}


// --- Assigning item name in editquanity form ----

var clickedSegmentRowDietCalories = null;
var clickedSegmentRowDiet = null;

function onFrmDietKASegmentsRowClick(seguiWidget, sectionIndex, rowIndex, isSelected) {
    var selectedRowItems = null;
    var selectedRowData = null;
    if (this !== null) {
        kony.print(" segui id " + this.id);
        if (this.id === "segConsumedItems") {
            selectedRowItems = frmDietKA.segConsumedItems.selectedRowItems;
        } else if (this.id === "segMorningSnack") {
            selectedRowItems = frmDietKA.segMorningSnack.selectedRowItems;
        } else if (this.id === "segLunch") {
            selectedRowItems = frmDietKA.segLunch.selectedRowItems;
        } else if (this.id === "segEveningSnack") {
            selectedRowItems = frmDietKA.segEveningSnack.selectedRowItems;
        } else if (this.id === "segDinner") {
            selectedRowItems = frmDietKA.segDinner.selectedRowItems;
        }
        if ((selectedRowItems !== null) &&
            (selectedRowItems.length > 0)) {
            selectedRowData = selectedRowItems[0];
            if (typeof selectedRowData === 'object') {
                clickedSegmentRowDietCalories = selectedRowData.segCalorieslbl.text;
                clickedSegmentRowDiet = selectedRowData.segRecordsLbl.text;
            }
        }
    }
    frmEditQuantityKA.show();
}