function addWidgetsfrmItemsKA() {
    frmItemsKA.setDefaultUnit(kony.flex.DP);
    var frmHeaderKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "117dp",
        "id": "frmHeaderKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFlxF5D1E3",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmHeaderKA.setDefaultUnit(kony.flex.DP);
    var flxDateKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxDateKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDateKA.setDefaultUnit(kony.flex.DP);
    var btnBack = new kony.ui.Button({
        "focusSkin": "sknBtnBack",
        "height": "23dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_af1d2a15bcd144e0a1074315ed97ac23,
        "skin": "sknBtnBack",
        "top": "13dp",
        "width": "23dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "40dp",
        "id": "lblHeader",
        "isVisible": true,
        "left": "127dp",
        "skin": "sknLbl736464CB110KA",
        "text": "What did you have for Breakfast?",
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
    flxDateKA.add(btnBack, lblHeader);
    var flxSearchKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxSearchKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSearchKA.setDefaultUnit(kony.flex.DP);
    var imgSearch = new kony.ui.Image2({
        "height": "23dp",
        "id": "imgSearch",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "zoomout.png",
        "top": "15dp",
        "width": "23dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tbWhere = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "tbWhere",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "35dp",
        "placeholder": "Search your food item..",
        "secureTextEntry": false,
        "skin": "skntbxFiltersKA",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "87.04%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "tbPlaceHolderSkin",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxSearchKA.add(imgSearch, tbWhere);
    frmHeaderKA.add(flxDateKA, flxSearchKA);
    var flxItems = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "81%",
        "id": "flxItems",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxWhite",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxItems.setDefaultUnit(kony.flex.DP);
    var lblLine = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine",
        "isVisible": false,
        "left": "0dp",
        "skin": "sknLbl5E5050LineKA",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "44dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var segItems = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnDeleteKA": "",
            "btnUpdateKA": "Update",
            "imgTask": "add_active.png",
            "lblidKA": "Label",
            "segRecordsLbl": "Milk with Boost and Sugar"
        }, {
            "btnDeleteKA": "",
            "btnUpdateKA": "Update",
            "imgTask": "add_active.png",
            "lblidKA": "Label",
            "segRecordsLbl": "Dosa (Plain)"
        }, {
            "btnDeleteKA": "",
            "btnUpdateKA": "Update",
            "imgTask": "add_active.png",
            "lblidKA": "Label",
            "segRecordsLbl": "Veg Biryani"
        }],
        "groupCells": false,
        "height": "97%",
        "id": "segItems",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxTmpAssetMainKA,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "5dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "btnDeleteKA": "btnDeleteKA",
            "btnUpdateKA": "btnUpdateKA",
            "flxDetailsKA": "flxDetailsKA",
            "flxMainAssetKA": "flxMainAssetKA",
            "flxSwipeDetailsKA": "flxSwipeDetailsKA",
            "flxSwipeKA": "flxSwipeKA",
            "flxTmpAssetMainKA": "flxTmpAssetMainKA",
            "imgTask": "imgTask",
            "lblidKA": "lblidKA",
            "segRecordsLbl": "segRecordsLbl"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxItems.add(lblLine, segItems);
    frmItemsKA.add(frmHeaderKA, flxItems);
};

function frmItemsKAGlobals() {
    frmItemsKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmItemsKA,
        "enabledForIdleTimeout": false,
        "id": "frmItemsKA",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "preShow": AS_Form_cc32892f85474dc2a4a06bdf568042b3,
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