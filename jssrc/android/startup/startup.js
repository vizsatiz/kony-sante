//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Sante",
    appName: "Sante",
    appVersion: "1.0.1",
    platformVersion: null,
    serverIp: "10.10.12.125",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "Sante",
    isturlbase: "https://cloud80.qa-konycloud.com/services",
    isMFApp: true,
    appKey: "d8ea8abb2cc53a01d1a2516be7a0182b",
    appSecret: "e598ac7fa594ba9d18eeee55e6c1e8f7",
    serviceUrl: "https://100000008.auth.qa-konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100000008.auth.qa-konycloud.com/appconfig",
        "identity_meta": {
            "SanteIdentity": {
                "success_url": "allow_any"
            }
        },
        "appId": "67f70b2f-4da6-41d1-ab61-20461f90ec66",
        "name": "Sante2",
        "reportingsvc": {
            "session": "https://cloud80.qa-konycloud.com/services/IST",
            "custom": "https://cloud80.qa-konycloud.com/services/CMS"
        },
        "baseId": "d06cfd1d-f887-4294-a407-93eeed553c9d",
        "login": [{
            "alias": "SanteIdentity",
            "type": "oauth2",
            "prov": "SanteIdentity",
            "url": "https://100000008.auth.qa-konycloud.com"
        }, {
            "alias": "SanteSapIdentity",
            "type": "basic",
            "prov": "SanteSapIdentity",
            "url": "https://100000008.auth.qa-konycloud.com"
        }],
        "services_meta": {
            "SanteOS2": {
                "metadata_url": "https://cloud80.qa-konycloud.com/services/metadata/v1/SanteOS2",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://cloud80.qa-konycloud.com/services/data/v1/SanteOS2"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://cloud80.qa-konycloud.com/Sante/MWServlet",
    secureurl: "https://cloud80.qa-konycloud.com/Sante/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeMVCTemplates();
    initializeUserWidgets();
    initializetmpConsumedItems();
    initializetmpSelectAssetKA();
    initializetmpSelectItems();
    frmDietKAGlobals();
    frmEditQuantityKAGlobals();
    frmFoodPreferenceKAGlobals();
    frmHomeKAGlobals();
    frmItemsKAGlobals();
    frmPlanKAGlobals();
    frmSanteKAGlobals();
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
        appservice: AS_AppEvents_e639ed7065f64a72ba009a122df3d399,
        showstartupform: function() {
            frmHomeKA.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
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