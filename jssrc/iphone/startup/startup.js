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
    isturlbase: "https://test-800-sdk.sit2-konycloud.com/services",
    isMFApp: true,
    appKey: "59b59119d5a61ab5e00a7b050aab066f",
    appSecret: "bb0bb5896013943c93cb4c3d2168b4ee",
    serviceUrl: "https://100000013.auth.sit2-konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100000013.auth.sit2-konycloud.com/appconfig",
        "identity_meta": {
            "SanteIdentity": {
                "success_url": "allow_any"
            },
            "SanteBoxIdentity": {
                "success_url": "allow_any"
            }
        },
        "integsvc": {
            "SanteBoxIntegration": "https://test-800-sdk.sit2-konycloud.com/services/SanteBoxIntegration"
        },
        "appId": "9e9b9dc4-c272-4f7b-b18e-6dfcc30db93a",
        "name": "Sante4",
        "reportingsvc": {
            "session": "https://test-800-sdk.sit2-konycloud.com/services/IST",
            "custom": "https://test-800-sdk.sit2-konycloud.com/services/CMS"
        },
        "baseId": "21c1c787-c003-43d4-8393-453903509d4b",
        "login": [{
            "alias": "SanteIdentity",
            "type": "oauth2",
            "prov": "SanteIdentity",
            "url": "https://100000013.auth.sit2-konycloud.com"
        }, {
            "alias": "SanteBoxIdentity",
            "type": "oauth2",
            "prov": "SanteBoxIdentity",
            "url": "https://100000013.auth.sit2-konycloud.com"
        }, {
            "alias": "SanteSapIdentity",
            "type": "basic",
            "prov": "SanteSapIdentity",
            "url": "https://100000013.auth.sit2-konycloud.com"
        }],
        "services_meta": {
            "SanteBoxIntegration": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://test-800-sdk.sit2-konycloud.com/services/SanteBoxIntegration"
            },
            "Sante4": {
                "metadata_url": "https://test-800-sdk.sit2-konycloud.com/services/metadata/v1/Sante4",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://test-800-sdk.sit2-konycloud.com/services/data/v1/Sante4"
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
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
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