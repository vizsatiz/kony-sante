function addWidgetsfrmPlanKA() {
    frmPlanKA.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_Button_a73d34d6e22949b69eff432b4fc51fa1,
        "skin": "sknBtnBackFilterKA",
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
        "text": "Workout Plan",
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
        "height": "187dp",
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
        "isVisible": false,
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
        "height": "89.98%",
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
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLabel1.setDefaultUnit(kony.flex.DP);
    var lbl1 = new kony.ui.Label({
        "height": "30dp",
        "id": "lbl1",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "This is your suggested Workout Plan",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": "88.48%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lbl2 = new kony.ui.Label({
        "bottom": "20dp",
        "id": "lbl2",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknLbl000000HB35KA",
        "text": "Jog everyday for 30minutes. Do 10 crunches and 10 pushups..Jog everyday for 30minutes. Do 10 crunches and 10 pushups..Jog everyday for 30minutes. Do 10 crunches and 10 pushups..",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLabel1.add(lbl1, lbl2);
    flxDetail1.add(imgDetail1, flxLabel1);
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
        "isVisible": false,
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
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLabel2.setDefaultUnit(kony.flex.DP);
    var Copylbl0bab13806d08a45 = new kony.ui.Label({
        "id": "Copylbl0bab13806d08a45",
        "isVisible": true,
        "left": "30dp",
        "skin": "sknNewsAuthor",
        "text": "If you do so.. you will burn calories",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": "90%",
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
        "skin": "sknLbl000000HB35KA",
        "text": "Calories burnt 227",
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
    flxDetail2.add(imgDetail2, flxLabel2);
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
    flxMainKA.add(flxDetail1, lblLine1, flxDetail2, lblLine2);
    frmMainKA.add(flxHeaderKA, flxMainKA);
    frmPlanKA.add(frmMainKA);
};

function frmPlanKAGlobals() {
    frmPlanKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPlanKA,
        "enabledForIdleTimeout": false,
        "id": "frmPlanKA",
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