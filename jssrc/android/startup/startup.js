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
    isturlbase: "https://test-800-sdk.sit2-konycloud.com/services",
    isMFApp: true,
    appKey: "15df850603d64b7a7de6de728f830e5e",
    appSecret: "887dfbfb962bd9959b7c57d4760b3ac1",
    serviceUrl: "https://100000013.auth.sit2-konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100000013.auth.sit2-konycloud.com/appconfig",
        "identity_meta": {
            "SanteIdentity": {
                "success_url": "allow_any"
            }
        },
        "appId": "bca66a96-4cb3-4223-bb65-30168c04effe",
        "name": "Sante2",
        "reportingsvc": {
            "session": "https://test-800-sdk.sit2-konycloud.com/services/IST",
            "custom": "https://test-800-sdk.sit2-konycloud.com/services/CMS"
        },
        "baseId": "8a2501e6-53b1-43d6-9198-f8ef8eb38e3c",
        "login": [{
            "alias": "SanteIdentity",
            "type": "oauth2",
            "prov": "SanteIdentity",
            "url": "https://100000013.auth.sit2-konycloud.com"
        }, {
            "alias": "SanteSapIdentity",
            "type": "basic",
            "prov": "SanteSapIdentity",
            "url": "https://100000013.auth.sit2-konycloud.com"
        }],
        "services_meta": {
            "SanteOS2": {
                "metadata_url": "https://test-800-sdk.sit2-konycloud.com/services/metadata/v1/SanteOS2",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://test-800-sdk.sit2-konycloud.com/services/data/v1/SanteOS2"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://test-800-sdk.sit2-konycloud.com/Sante/MWServlet",
    secureurl: "https://test-800-sdk.sit2-konycloud.com/Sante/MWServlet"
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