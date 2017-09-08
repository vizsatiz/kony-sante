function addWidgetsfrmUserDetailsKA() {
    frmUserDetailsKA.setDefaultUnit(kony.flex.DP);
    frmUserDetailsKA.add();
};

function frmUserDetailsKAGlobals() {
    frmUserDetailsKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUserDetailsKA,
        "enabledForIdleTimeout": false,
        "id": "frmUserDetailsKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};