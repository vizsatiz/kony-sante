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
        "id": "lblTagLineKA",
        "isVisible": true,
        "left": "45dp",
        "skin": "slLabel",
        "text": "Transform yourself..",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "247dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblQuoteKA = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblQuoteKA",
        "isVisible": true,
        "left": "26dp",
        "skin": "slLabel",
        "text": "A big fish to a light bird",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "298dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
    var btnLogin = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "56dp",
        "onClick": AS_Button_e19d02c5a3a8471aaab5c69cc120c576,
        "skin": "slButtonGlossBlue",
        "text": "Login",
        "top": "234dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMainScreen2KA.add(imgFish1KA, imgBird1KA, imgSelect, imgUnselect, btnLogin);
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
        "skin": "slForm",
        "verticalScrollIndicator": false
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};