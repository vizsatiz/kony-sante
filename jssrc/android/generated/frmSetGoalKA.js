function addWidgetsfrmSetGoalKA() {
    frmSetGoalKA.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_Button_hc3de3c13053477e8a5d8eec945d8662,
        "skin": "sknBtnBackKA",
        "top": "8dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "15%",
        "height": "40dp",
        "id": "lblHeader",
        "isVisible": true,
        "left": "127dp",
        "skin": "sknCN1103a3f77KA",
        "text": "My Goal",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "4dp",
        "width": "250dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgFood = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "60%",
        "height": "80dp",
        "id": "imgFood",
        "isVisible": true,
        "skin": "slImage",
        "src": "workout.png",
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
        "height": "65.63%",
        "id": "flxDetailsKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetailsKA.setDefaultUnit(kony.flex.DP);
    var flx1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flx1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx1.setDefaultUnit(kony.flex.DP);
    var lblGoalWeight = new kony.ui.Label({
        "centerY": "43.06%",
        "height": "35dp",
        "id": "lblGoalWeight",
        "isVisible": true,
        "left": "20dp",
        "skin": "sknLbl000000HB35KA",
        "text": "Set Goal Weight",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var tbxGoalWeight = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxGoalWeight",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "57 Kg",
        "right": "20dp",
        "secureTextEntry": false,
        "skin": "skntbxFiltersKA",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "167dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknTbxPlaceholder5B7A9ACB28KA",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flx1.add(lblGoalWeight, tbxGoalWeight);
    var radioBtnSetGoal = new kony.ui.RadioButtonGroup({
        "height": "137dp",
        "id": "radioBtnSetGoal",
        "isVisible": true,
        "left": "10dp",
        "masterData": [
            ["rbg1", "Loose Weight"],
            ["rbg2", "Be Fitter"],
            ["rbg3", "Gain Muscle"],
            ["rbg4", "Run Better"]
        ],
        "selectedKey": "rbg1",
        "selectedKeyValue": ["rbg1", "Loose Weight"],
        "skin": "slRadioButtonGroup",
        "top": "14dp",
        "width": "333dp",
        "zIndex": 1
    }, {
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetailsKA.add(flx1, radioBtnSetGoal);
    var BorderButtonRoundSigned = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
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
        "isVisible": true,
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
    }, {});
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
    }, {});
    ContainerButtonBorderPositive.add(btnDone);
    BorderButtonRoundSigned.add(ContainerButtonBorderNegative, ContainerButtonBorderPositive);
    frmMainKA.add(flxHeaderKA, flxDetailsKA, BorderButtonRoundSigned);
    frmSetGoalKA.add(frmMainKA);
};

function frmSetGoalKAGlobals() {
    frmSetGoalKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSetGoalKA,
        "enabledForIdleTimeout": false,
        "id": "frmSetGoalKA",
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