function addWidgetsfrmSanteKA() {
    frmSanteKA.setDefaultUnit(kony.flex.DP);
    var frmMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "frmMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFlxF5D1E3",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmMainKA.setDefaultUnit(kony.flex.DP);
    var flxHeaderKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "140dp",
        "id": "flxHeaderKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderKA.setDefaultUnit(kony.flex.DP);
    var btnMenu = new kony.ui.Button({
        "focusSkin": "sknBtnMenuKA",
        "height": "30dp",
        "id": "btnMenu",
        "isVisible": true,
        "left": "15dp",
        "onClick": AS_Button_a21489740f424d888410df3d344d96b2,
        "skin": "sknBtnMenuKA",
        "top": "13dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHeader = new kony.ui.Label({
        "centerX": "50.03%",
        "centerY": "50.00%",
        "height": "40dp",
        "id": "lblHeader",
        "isVisible": true,
        "left": "127dp",
        "skin": "sknCN1103a3f77KA",
        "text": "Santé",
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
    flxHeaderKA.add(btnMenu, lblHeader);
    var flxMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "347dp",
        "id": "flxMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "right": "5%",
        "skin": "sknFlxWhite",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxMainKA.setDefaultUnit(kony.flex.DP);
    var flxDetail1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "flxDetail1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "sknFlxWhite",
        "top": "25dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetail1.setDefaultUnit(kony.flex.DP);
    var imgDetail1 = new kony.ui.Image2({
        "centerY": "49.84%",
        "height": "35dp",
        "id": "imgDetail1",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "diet.png",
        "top": "16dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLabel1 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxLabel1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "72%",
        "zIndex": 1
    }, {}, {});
    flxLabel1.setDefaultUnit(kony.flex.DP);
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "Food... Its the biggest cause",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknLbl1F1C1BCN26KA",
        "text": "to gain weigth. Track it today!",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLabel1.add(lbl1, lbl2);
    var imgNext1 = new kony.ui.Image2({
        "centerY": "49.84%",
        "height": "25dp",
        "id": "imgNext1",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_Image_bb24eeb4ef7e4759ab4bd45819e596bc,
        "skin": "slImage",
        "src": "arrowright.png",
        "top": "3dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetail1.add(imgDetail1, flxLabel1, imgNext1);
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
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxDetail2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "flxDetail2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "sknFlxWhite",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetail2.setDefaultUnit(kony.flex.DP);
    var imgDetail2 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "35dp",
        "id": "imgDetail2",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "workout.png",
        "top": "16dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLabel2 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxLabel2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "72%",
        "zIndex": 1
    }, {}, {});
    flxLabel2.setDefaultUnit(kony.flex.DP);
    var Copylbl0bab13806d08a45 = new kony.ui.Label({
        "id": "Copylbl0bab13806d08a45",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "Track your workouts today !",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copylbl0ebd8fc5152764c = new kony.ui.Label({
        "id": "Copylbl0ebd8fc5152764c",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknLbl1F1C1BCN26KA",
        "text": "Walk, jog, jump... just burn",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLabel2.add(Copylbl0bab13806d08a45, Copylbl0ebd8fc5152764c);
    var imgNext2 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgNext2",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_Image_g9a27dc877dc42e1ba6a245e743dd686,
        "skin": "slImage",
        "src": "arrowright.png",
        "top": "3dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetail2.add(imgDetail2, flxLabel2, imgNext2);
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
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxDetail3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "flxDetail3",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "sknFlxWhite",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetail3.setDefaultUnit(kony.flex.DP);
    var imgDetail3 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "35dp",
        "id": "imgDetail3",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "water.png",
        "top": "16dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLabel3 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxLabel3",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "72%",
        "zIndex": 1
    }, {}, {});
    flxLabel3.setDefaultUnit(kony.flex.DP);
    var Copylbl0cf9a100f581144 = new kony.ui.Label({
        "id": "Copylbl0cf9a100f581144",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "Drink it up",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copylbl0c3ffe154e4b84d = new kony.ui.Label({
        "id": "Copylbl0c3ffe154e4b84d",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknLbl1F1C1BCN26KA",
        "text": "Hydration is the key to loose weight",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLabel3.add(Copylbl0cf9a100f581144, Copylbl0c3ffe154e4b84d);
    var imgNext3 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgNext3",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "arrowright.png",
        "top": "3dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetail3.add(imgDetail3, flxLabel3, imgNext3);
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
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxDetail4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "flxDetail4",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "sknFlxWhite",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetail4.setDefaultUnit(kony.flex.DP);
    var imgCoach = new kony.ui.Image2({
        "centerY": "50%",
        "height": "35dp",
        "id": "imgCoach",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "coach.png",
        "top": "16dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLabel4 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxLabel4",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "72%",
        "zIndex": 1
    }, {}, {});
    flxLabel4.setDefaultUnit(kony.flex.DP);
    var Copylbl0g878dcd215554d = new kony.ui.Label({
        "id": "Copylbl0g878dcd215554d",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "Get a personal Coach",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copylbl0f66e990e9bc241 = new kony.ui.Label({
        "id": "Copylbl0f66e990e9bc241",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknLbl1F1C1BCN26KA",
        "text": "and loose weight like never before",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLabel4.add(Copylbl0g878dcd215554d, Copylbl0f66e990e9bc241);
    var imgNext4 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgNext4",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "arrowright.png",
        "top": "3dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetail4.add(imgCoach, flxLabel4, imgNext4);
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
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMainKA.add(flxDetail1, lblLine1, flxDetail2, lblLine2, flxDetail3, lblLine3, flxDetail4, lblLine4);
    frmMainKA.add(flxHeaderKA, flxMainKA);
    frmSanteKA.add(frmMainKA);
};

function frmSanteKAGlobals() {
    frmSanteKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSanteKA,
        "enabledForIdleTimeout": false,
        "id": "frmSanteKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_c231758fdec642cc94497378e47f43af,
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