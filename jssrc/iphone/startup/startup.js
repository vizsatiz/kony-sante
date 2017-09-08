//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Sante",
    appName: "Sante",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.125",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "Sante",
    isturlbase: "http://10.10.33.35:8080/services",
    isMFApp: true,
    appKey: "786785effa2f94629b1a6149f123acae",
    appSecret: "dd812f47baf3819a8c7ce89fe85c0b2e",
    serviceUrl: "http://10.10.33.35:8080/authService/100000002/appconfig",
    svcDoc: {
        "selflink": "http://10.10.33.35:8080/authService/100000002/appconfig",
        "identity_meta": {
            "boxIdentity": {
                "success_url": "allow_any"
            },
            "SanteIdentity": {
                "success_url": "allow_any"
            }
        },
        "integsvc": {
            "BinaryImage": "http://10.10.33.35:8080/services/BinaryImage"
        },
        "appId": "6bbb26d7-0533-4f52-b3f1-cbc0aa73f126",
        "name": "Sante",
        "reportingsvc": {
            "session": "http://10.10.33.35:8080/services/IST",
            "custom": "http://10.10.33.35:8080/services/CMS"
        },
        "baseId": "622f1c7b-9630-4163-8288-22aece942df1",
        "login": [{
            "alias": "boxIdentity",
            "type": "oauth2",
            "prov": "boxIdentity",
            "url": "http://10.10.33.35:8080/authService/100000002"
        }, {
            "alias": "SanteIdentity",
            "type": "oauth2",
            "prov": "SanteIdentity",
            "url": "http://10.10.33.35:8080/authService/100000002"
        }, {
            "alias": "SanteSapIdentity",
            "type": "basic",
            "prov": "SanteSapIdentity",
            "url": "http://10.10.33.35:8080/authService/100000002"
        }],
        "services_meta": {
            "BinaryOS": {
                "metadata_url": "http://10.10.33.35:8080/services/metadata/v1/BinaryOS",
                "type": "objectsvc",
                "version": "1.0",
                "url": "http://10.10.33.35:8080/services/data/v1/BinaryOS"
            },
            "SanteOS": {
                "metadata_url": "http://10.10.33.35:8080/services/metadata/v1/SanteOS",
                "type": "objectsvc",
                "version": "1.0",
                "url": "http://10.10.33.35:8080/services/data/v1/SanteOS"
            },
            "BinaryImage": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://10.10.33.35:8080/services/BinaryImage"
            }
        }
    },
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "http://10.10.33.35:8080/admin/Sante/MWServlet",
    secureurl: "http://10.10.33.35:8080/admin/Sante/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeMVCTemplates();
    initializeUserWidgets();
    initializetmpSelectAssetKA();
    frmDietKAGlobals();
    frmFoodPreferenceKAGlobals();
    frmHomeKAGlobals();
    frmItemsKAGlobals();
    frmPlanKAGlobals();
    frmSetGoalKAGlobals();
    frmUserDetailsKAGlobals();
    frmUserKAGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHomeKA.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;