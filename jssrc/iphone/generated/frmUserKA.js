function addWidgetsfrmUserKA() {
    frmUserKA.setDefaultUnit(kony.flex.DP);
    var frmHeaderKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "157dp",
        "id": "frmHeaderKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxF5D1E3",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmHeaderKA.setDefaultUnit(kony.flex.DP);
    var btnBack = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "23dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "8dp",
        "onClick": AS_Button_e7b2306e5a494ba9b862c1a106de36e6,
        "skin": "sknBtnBack",
        "top": "13dp",
        "width": "23dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
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
    var lblEmail = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "70%",
        "height": "35dp",
        "id": "lblEmail",
        "isVisible": true,
        "left": "127dp",
        "skin": "sknLbl736464CB110KA",
        "text": "user@kony.com",
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
        "height": "457dp",
        "id": "flxMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFlxWhite",
        "top": "0dp",
        "width": "100%",
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
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetail1.setDefaultUnit(kony.flex.DP);
    var imgDetail1 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "35dp",
        "id": "imgDetail1",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "imagedrag.png",
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
        "width": "76.85%",
        "zIndex": 1
    }, {}, {});
    flxLabel1.setDefaultUnit(kony.flex.DP);
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "Basic Information",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknLbl1F1C1BCN26KA",
        "text": "Update your Basic information here",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxLabel1.add(lbl1, lbl2);
    var imgNext1 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgNext1",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_Image_bb24eeb4ef7e4759ab4bd45819e596bc,
        "skin": "slImage",
        "src": "imagedrag.png",
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
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    var CopyimgDetail0h8ac16dfee8d45 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "35dp",
        "id": "CopyimgDetail0h8ac16dfee8d45",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "16dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyflxLabel0c09c00f2e0994c = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "CopyflxLabel0c09c00f2e0994c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "76.85%",
        "zIndex": 1
    }, {}, {});
    CopyflxLabel0c09c00f2e0994c.setDefaultUnit(kony.flex.DP);
    var Copylbl0bab13806d08a45 = new kony.ui.Label({
        "id": "Copylbl0bab13806d08a45",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "Goal",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Copylbl0ebd8fc5152764c = new kony.ui.Label({
        "id": "Copylbl0ebd8fc5152764c",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknLbl1F1C1BCN26KA",
        "text": "Update your Goal here",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyflxLabel0c09c00f2e0994c.add(Copylbl0bab13806d08a45, Copylbl0ebd8fc5152764c);
    var CopyimgNext0gcae3b76b8ba42 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "CopyimgNext0gcae3b76b8ba42",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_Image_g9a27dc877dc42e1ba6a245e743dd686,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "3dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetail2.add(CopyimgDetail0h8ac16dfee8d45, CopyflxLabel0c09c00f2e0994c, CopyimgNext0gcae3b76b8ba42);
    var lblLine2 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine2",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    var CopyimgDetail0d5fb4cb9cd734e = new kony.ui.Image2({
        "centerY": "50%",
        "height": "35dp",
        "id": "CopyimgDetail0d5fb4cb9cd734e",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "16dp",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyflxLabel0i5eff87c41ca42 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "CopyflxLabel0i5eff87c41ca42",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "76.85%",
        "zIndex": 1
    }, {}, {});
    CopyflxLabel0i5eff87c41ca42.setDefaultUnit(kony.flex.DP);
    var Copylbl0cf9a100f581144 = new kony.ui.Label({
        "id": "Copylbl0cf9a100f581144",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "Food Preferences",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Copylbl0c3ffe154e4b84d = new kony.ui.Label({
        "id": "Copylbl0c3ffe154e4b84d",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknLbl1F1C1BCN26KA",
        "text": "Update your Food Preferences here",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyflxLabel0i5eff87c41ca42.add(Copylbl0cf9a100f581144, Copylbl0c3ffe154e4b84d);
    var CopyimgNext0ae63b8f92caa4b = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "CopyimgNext0ae63b8f92caa4b",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_Image_ac616a39eb5c47af921907b0cd6736c9,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "3dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetail3.add(CopyimgDetail0d5fb4cb9cd734e, CopyflxLabel0i5eff87c41ca42, CopyimgNext0ae63b8f92caa4b);
    var lblLine3 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine3",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxMainKA.add(flxDetail1, lblLine1, flxDetail2, lblLine2, flxDetail3, lblLine3);
    frmUserKA.add(frmHeaderKA, flxMainKA);
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