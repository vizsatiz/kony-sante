function addWidgetsfrmHomeKA() {
    frmHomeKA.setDefaultUnit(kony.flex.DP);
    var flxMainScreen1KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainScreen1KA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchMove": AS_FlexContainer_fa66ecd33dc944c88f67470f77dfb6d5,
        "skin": "sknFlxF5D1E3",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMainScreen1KA.setDefaultUnit(kony.flex.DP);
    var imgFishKA = new kony.ui.Image2({
        "bottom": "40dp",
        "height": "150dp",
        "id": "imgFishKA",
        "isVisible": true,
        "right": "10dp",
        "skin": "slImage",
        "src": "fatfish.png",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgBirdKA = new kony.ui.Image2({
        "height": "150dp",
        "id": "imgBirdKA",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "gull.png",
        "top": "3dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTagLineKA = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "lblTagLineKA",
        "isVisible": true,
        "left": "45dp",
        "skin": "sknLbl3A3F77CN22KA",
        "text": "Transform yourself..",
        "top": "247dp",
        "width": "200dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblQuoteKA = new kony.ui.Label({
        "centerX": "50.00%",
        "id": "lblQuoteKA",
        "isVisible": true,
        "left": "26dp",
        "skin": "sknCN1103a3f77KA",
        "text": "A big fish to a light bird",
        "top": "287dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgSelect1KA = new kony.ui.Image2({
        "centerX": "46.30%",
        "centerY": "95.05%",
        "height": "23dp",
        "id": "imgSelect1KA",
        "isVisible": true,
        "skin": "slImage",
        "src": "pageondot.png",
        "width": "23dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgUnselect1KA = new kony.ui.Image2({
        "centerX": "51.60%",
        "centerY": "95.02%",
        "height": "23dp",
        "id": "imgUnselect1KA",
        "isVisible": true,
        "skin": "slImage",
        "src": "pageoffdot.png",
        "width": "23dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMainScreen1KA.add(imgFishKA, imgBirdKA, lblTagLineKA, lblQuoteKA, imgSelect1KA, imgUnselect1KA);
    var flxMainScreen2KA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainScreen2KA",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxF5D1E3",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMainScreen2KA.setDefaultUnit(kony.flex.DP);
    var imgFish1KA = new kony.ui.Image2({
        "bottom": "40dp",
        "height": "150dp",
        "id": "imgFish1KA",
        "isVisible": true,
        "right": "10dp",
        "skin": "slImage",
        "src": "fatfish.png",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgBird1KA = new kony.ui.Image2({
        "height": "150dp",
        "id": "imgBird1KA",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "gull.png",
        "top": "3dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgSelect = new kony.ui.Image2({
        "centerX": "52.10%",
        "centerY": "95.03%",
        "height": "23dp",
        "id": "imgSelect",
        "isVisible": true,
        "skin": "slImage",
        "src": "pageondot.png",
        "width": "23dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgUnselect = new kony.ui.Image2({
        "centerX": "46.30%",
        "centerY": "95.04%",
        "height": "23dp",
        "id": "imgUnselect",
        "isVisible": true,
        "skin": "slImage",
        "src": "pageoffdot.png",
        "width": "23dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var BorderButtonRound = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "60dp",
        "id": "BorderButtonRound",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0c0f4b80f57ce4d",
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    BorderButtonRound.setDefaultUnit(kony.flex.DP);
    var ButtonBorder = new kony.ui.Button({
        "bottom": "5dp",
        "focusSkin": "ButtonBorderActive",
        "id": "ButtonBorder",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_fc0e127b3016406a92ca83a27a76d680,
        "right": "10dp",
        "skin": "ButtonBorderNormal",
        "text": "Login",
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
    BorderButtonRound.add(ButtonBorder);
    var ButtonBoxLogin = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "80%",
        "clipBounds": true,
        "height": "60dp",
        "id": "ButtonBoxLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0c0f4b80f57ce4d",
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    ButtonBoxLogin.setDefaultUnit(kony.flex.DP);
    var BtnBoxLogin = new kony.ui.Button({
        "bottom": "5dp",
        "focusSkin": "ButtonBorderActive",
        "id": "BtnBoxLogin",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_eae3c6d85ab8492e9ca55b5be7098ed5,
        "right": "10dp",
        "skin": "ButtonBorderNormal",
        "text": "Login",
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
    ButtonBoxLogin.add(BtnBoxLogin);
    var lblNote = new kony.ui.Label({
        "centerX": "50%",
        "height": "30dp",
        "id": "lblNote",
        "isVisible": true,
        "left": "143dp",
        "skin": "sknLbl5e5050ClanProBook28pxKA",
        "text": "Sign in using Google Account",
        "top": "333dp",
        "width": "200dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxMainScreen2KA.add(imgFish1KA, imgBird1KA, imgSelect, imgUnselect, BorderButtonRound, ButtonBoxLogin, lblNote);
    frmHomeKA.add(flxMainScreen1KA, flxMainScreen2KA);
};

function frmHomeKAGlobals() {
    frmHomeKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHomeKA,
        "bounces": false,
        "enabledForIdleTimeout": false,
        "id": "frmHomeKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_da3185b308854cb68b1ab158a4b6818e,
        "preShow": AS_Form_f4941228472d468c8ad991e34bd09d80,
        "skin": "slForm",
        "verticalScrollIndicator": false
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};