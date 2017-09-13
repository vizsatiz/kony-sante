function addWidgetsfrmUserDetailsKA() {
    frmUserDetailsKA.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_Button_e0e6b0f4ff63465da21c137d0a5b1399,
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
        "text": "Basic Information",
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
    var imgInfo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "60%",
        "height": "80dp",
        "id": "imgInfo",
        "isVisible": true,
        "skin": "slImage",
        "src": "weight.png",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeaderKA.add(btnBack, lblHeader, imgInfo);
    var flxDetailsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65.60%",
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
    var lblName = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "lblName",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Name",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Harry Potter",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTbxPlaceholder5B7A9ACB28KA",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flx1.add(lblName, tbxName);
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
        "text": "Phone Number",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxNumber = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxNumber",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "xxxxxxxxxx",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTbxPlaceholder5B7A9ACB28KA",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flx2.add(lblNumber, tbxNumber);
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
    var lblAge = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "lblAge",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Age",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxAge = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxAge",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "25",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTbxPlaceholder5B7A9ACB28KA",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flx3.add(lblAge, tbxAge);
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
    var lblWeight = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "lblWeight",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Weight",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxWeight = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxWeight",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "60 Kg",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTbxPlaceholder5B7A9ACB28KA",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flx4.add(lblWeight, tbxWeight);
    var flx5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flx5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx5.setDefaultUnit(kony.flex.DP);
    var lblHeight = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "lblHeight",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Height",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxHeight = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxHeight",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "165 cm",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTbxPlaceholder5B7A9ACB28KA",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flx5.add(lblHeight, tbxHeight);
    var flx6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flx6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx6.setDefaultUnit(kony.flex.DP);
    var lblGender = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "lblGender",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Gender",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxGender = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxGender",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "M",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTbxPlaceholder5B7A9ACB28KA",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flx6.add(lblGender, tbxGender);
    var flx7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flx7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx7.setDefaultUnit(kony.flex.DP);
    var lblBMI = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "lblBMI",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "BMI",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxBMI = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "30dp",
        "id": "tbxBMI",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "23.1",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknTbxPlaceholder5B7A9ACB28KA",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flx7.add(lblBMI, tbxBMI);
    var flx8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flx8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx8.setDefaultUnit(kony.flex.DP);
    var lblActivity = new kony.ui.Label({
        "centerY": "50%",
        "height": "35dp",
        "id": "lblActivity",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Daily Activity",
        "width": "150dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var listboxActivity = new kony.ui.ListBox({
        "centerY": "50.00%",
        "height": "40dp",
        "id": "listboxActivity",
        "isVisible": true,
        "masterData": [
            ["lb1", "Less than 30 min"],
            ["lb2", "Atleast 30 min"],
            ["lb3", "An hour"],
            ["lb4", "Atleast 2 hours"]
        ],
        "right": "15dp",
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "Less than 30 min"],
        "skin": "sknListBox5E5050CB28KA",
        "width": "169dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flx8.add(lblActivity, listboxActivity);
    flxDetailsKA.add(flx1, flx2, flx3, flx4, flx5, flx6, flx7, flx8);
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
        "onClick": AS_Button_bdc0a1796eef4ea8bd00165ebb553e66,
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
    frmUserDetailsKA.add(frmMainKA);
};

function frmUserDetailsKAGlobals() {
    frmUserDetailsKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUserDetailsKA,
        "enabledForIdleTimeout": false,
        "id": "frmUserDetailsKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "preShow": AS_Form_b10b0260748c46f580c578cf15ee652a,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
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