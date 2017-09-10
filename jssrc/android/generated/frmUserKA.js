function addWidgetsfrmUserKA() {
    frmUserKA.setDefaultUnit(kony.flex.DP);
    var flxForm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxForm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFlxF5D1E3",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxForm.setDefaultUnit(kony.flex.DP);
    var frmHeaderKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "157dp",
        "id": "frmHeaderKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmHeaderKA.setDefaultUnit(kony.flex.DP);
    var btnBack = new kony.ui.Button({
        "focusSkin": "sknBtnBackFilterKA",
        "height": "35dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_aa7bf500ed4b47a289666543657c33f5,
        "skin": "sknBtnBackFilterKA",
        "top": "13dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxDetailsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "63dp",
        "id": "flxDetailsKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "90dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetailsKA.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerX": "49.97%",
        "centerY": "31.75%",
        "height": "35dp",
        "id": "lblHeader",
        "isVisible": true,
        "left": "127dp",
        "skin": "sknLbl736464CB110KA",
        "text": "Username",
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
    var lblEmail = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "70%",
        "height": "35dp",
        "id": "lblEmail",
        "isVisible": true,
        "left": "127dp",
        "skin": "sknLbl736464CB110KA",
        "text": "user@kony.com",
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
    flxDetailsKA.add(lblHeader, lblEmail);
    var imgUserProfile = new kony.ui.Image2({
        "centerX": "50%",
        "height": "83dp",
        "id": "imgUserProfile",
        "isVisible": true,
        "skin": "slImage",
        "src": "persondetailpic.png",
        "top": "13dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHeaderKA.add(btnBack, flxDetailsKA, imgUserProfile);
    var flxMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "307dp",
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
        "top": "30dp",
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
        "src": "blueperson.png",
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
        "text": "Basic Information",
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
        "text": "Update your Basic information here",
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
        "onTouchStart": AS_Image_g00919c99de643e9a6b151f6f922f53e,
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
        "top": "0dp",
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
        "src": "goalicon.png",
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
        "text": "Goal",
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
        "text": "Update your Goal here",
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
        "onTouchStart": AS_Image_dbd032117f9c406dbf920cfaa5acb0d7,
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
        "top": "0dp",
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
        "src": "foodpreference.png",
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
        "text": "Food Preferences",
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
        "text": "Update your Food Preferences here",
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
        "onTouchStart": AS_Image_ac616a39eb5c47af921907b0cd6736c9,
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
    flxMainKA.add(flxDetail1, lblLine1, flxDetail2, lblLine2, flxDetail3, lblLine3);
    flxForm.add(frmHeaderKA, flxMainKA);
    frmUserKA.add(flxForm);
};

function frmUserKAGlobals() {
    frmUserKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUserKA,
        "enabledForIdleTimeout": false,
        "id": "frmUserKA",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
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