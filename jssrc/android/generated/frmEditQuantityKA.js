function addWidgetsfrmEditQuantityKA() {
    frmEditQuantityKA.setDefaultUnit(kony.flex.DP);
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
        "height": "180dp",
        "id": "flxHeaderKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknflx9197ABKA",
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
        "onClick": AS_Button_h8ddb1f1327040308bc6859407b9e7ea,
        "skin": "sknBtnBackKA",
        "top": "8dp",
        "width": "35dp",
        "zIndex": 20
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHeader = new kony.ui.Label({
        "bottom": "30dp",
        "height": "40dp",
        "id": "lblHeader",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLblFFFFFFCN36KA",
        "text": "Museli Friut and Nuts with Toned Milk",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "95%",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopylblHeader0i39dff53858547 = new kony.ui.Label({
        "bottom": "5dp",
        "height": "40dp",
        "id": "CopylblHeader0i39dff53858547",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLblFFFFFFCN36KA",
        "text": "Quantity - Calories",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "95%",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgFood = new kony.ui.Image2({
        "centerX": "50.00%",
        "centerY": "51.11%",
        "height": "100%",
        "id": "imgFood",
        "isVisible": true,
        "skin": "slImage",
        "src": "food11.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeaderKA.add(btnBack, lblHeader, CopylblHeader0i39dff53858547, imgFood);
    var flxDetailsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "57.45%",
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
        "top": "30dp",
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
        "text": "Pick the quantity of food !!",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flx1.add(lblGoalWeight);
    var lblLine2 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flx2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flx2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx2.setDefaultUnit(kony.flex.DP);
    var lblNumber = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "lblNumber",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Quantity",
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
    var tbxNumber = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxNumber",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "1",
        "right": "15dp",
        "secureTextEntry": false,
        "skin": "sknTbx5E5050CB30KA",
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
    flx2.add(lblNumber, tbxNumber);
    var lblLine3 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine3",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flx3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flx3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx3.setDefaultUnit(kony.flex.DP);
    var CopylblNumber0e796c5d3afca4f = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "CopylblNumber0e796c5d3afca4f",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Units",
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
    var CopytbxNumber0c94f4d1203cb4c = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "49.72%",
        "height": "30dp",
        "id": "CopytbxNumber0c94f4d1203cb4c",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "bowl",
        "right": "15dp",
        "secureTextEntry": false,
        "skin": "sknTbx5E5050CB30KA",
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
    flx3.add(CopylblNumber0e796c5d3afca4f, CopytbxNumber0c94f4d1203cb4c);
    var lblLine1 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flx4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flx4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx4.setDefaultUnit(kony.flex.DP);
    var CopylblNumber0d3106147dc2c4a = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "CopylblNumber0d3106147dc2c4a",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Calories",
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
    var CopytbxNumber0cfed95668df849 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "CopytbxNumber0cfed95668df849",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "250 cal",
        "right": "15dp",
        "secureTextEntry": false,
        "skin": "sknTbx5E5050CB30KA",
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
    flx4.add(CopylblNumber0d3106147dc2c4a, CopytbxNumber0cfed95668df849);
    var lblLine4 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine4",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDetailsKA.add(flx1, lblLine2, flx2, lblLine3, flx3, lblLine1, flx4, lblLine4);
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
    frmEditQuantityKA.add(frmMainKA);
};

function frmEditQuantityKAGlobals() {
    frmEditQuantityKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEditQuantityKA,
        "enabledForIdleTimeout": false,
        "id": "frmEditQuantityKA",
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