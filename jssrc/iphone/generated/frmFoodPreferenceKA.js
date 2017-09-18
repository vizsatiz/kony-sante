function addWidgetsfrmFoodPreferenceKA() {
    frmFoodPreferenceKA.setDefaultUnit(kony.flex.DP);
    var frmMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "frmMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFlxWhite",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmMainKA.setDefaultUnit(kony.flex.DP);
    var flxHeaderKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "150dp",
        "id": "flxHeaderKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxF5D1E3",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderKA.setDefaultUnit(kony.flex.DP);
    var btnBack = new kony.ui.Button({
        "focusSkin": "sknBtnBackKA",
        "height": "35dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "8dp",
        "onClick": AS_Button_ea79215043d34903969fb01564417234,
        "skin": "sknBtnBackKA",
        "top": "8dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "15%",
        "height": "40dp",
        "id": "lblHeader",
        "isVisible": true,
        "left": "127dp",
        "skin": "sknCN1103a3f77KA",
        "text": "Food Preference",
        "top": "4dp",
        "width": "250dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgFood = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "60%",
        "height": "80dp",
        "id": "imgFood",
        "isVisible": true,
        "skin": "slImage",
        "src": "foodpreference.png",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeaderKA.add(btnBack, lblHeader, imgFood);
    var flxDetailsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "63.96%",
        "id": "flxDetailsKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetailsKA.setDefaultUnit(kony.flex.DP);
    var chkboxFoodPreference = new kony.ui.CheckBoxGroup({
        "height": "63dp",
        "id": "chkboxFoodPreference",
        "isVisible": true,
        "left": "17dp",
        "masterData": [
            ["cbg1", ".        Vegetarian"],
            ["cbg3", ".        Non-Vegetarian"]
        ],
        "skin": "slCheckBoxGroup",
        "top": "47dp",
        "width": "87.04%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tickedImage": "bf_filter_checked.png",
        "untickedImage": "bf_filter_unchecked.png",
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    flxDetailsKA.add(chkboxFoodPreference);
    var BorderButtonRoundSigned = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "60dp",
        "id": "BorderButtonRoundSigned",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0e28de830a2a64a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    BorderButtonRoundSigned.setDefaultUnit(kony.flex.DP);
    var ContainerButtonBorderNegative = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "id": "ContainerButtonBorderNegative",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0e28de830a2a64a",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    ContainerButtonBorderNegative.setDefaultUnit(kony.flex.DP);
    var btnReset = new kony.ui.Button({
        "bottom": "5dp",
        "focusSkin": "ButtonBorderNegativeActive",
        "id": "btnReset",
        "isVisible": false,
        "left": "10dp",
        "right": "5dp",
        "skin": "ButtonBorderNegativeNormal",
        "text": "Reset",
        "top": "5dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    ContainerButtonBorderNegative.add(btnReset);
    var ContainerButtonBorderPositive = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "id": "ContainerButtonBorderPositive",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "right": "0dp",
        "skin": "slFbox0e28de830a2a64a",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    ContainerButtonBorderPositive.setDefaultUnit(kony.flex.DP);
    var btnDone = new kony.ui.Button({
        "bottom": 5,
        "focusSkin": "ButtonBorderPostiveActive",
        "id": "btnDone",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_Button_c00e8fe0a0364c0d888cf6cfe2c063de,
        "right": "10dp",
        "skin": "ButtonBorderPostiveNormal",
        "text": "Done",
        "top": "5dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    ContainerButtonBorderPositive.add(btnDone);
    BorderButtonRoundSigned.add(ContainerButtonBorderNegative, ContainerButtonBorderPositive);
    frmMainKA.add(flxHeaderKA, flxDetailsKA, BorderButtonRoundSigned);
    frmFoodPreferenceKA.add(frmMainKA);
};

function frmFoodPreferenceKAGlobals() {
    frmFoodPreferenceKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFoodPreferenceKA,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmFoodPreferenceKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "preShow": AS_Form_i7eea69580774e8c8c13fa46cb630519,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
};