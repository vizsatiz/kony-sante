function addWidgetsfrmDietKA() {
    frmDietKA.setDefaultUnit(kony.flex.DP);
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
    var frmHeaderKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "160dp",
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
    var Calendar0b0ad95e8760e43 = new kony.ui.Calendar({
        "calendarIcon": "sky.png",
        "dateComponents": [7, 9, 2017, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 7,
        "formattedDate": "07/09/2017",
        "height": "40dp",
        "hour": 0,
        "id": "Calendar0b0ad95e8760e43",
        "isVisible": true,
        "left": "50dp",
        "minutes": 0,
        "month": 9,
        "seconds": 0,
        "skin": "sknCalenderDefaultKA",
        "top": "7dp",
        "viewConfig": {
            "gridConfig": {
                "leftNavigationImage": "sky.png",
                "rightNavigationImage": "sky.png"
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "250dp",
        "year": 2017,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnBack = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "23dp",
        "id": "btnBack",
        "isVisible": true,
        "left": "8dp",
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
    var btnMenu = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "23dp",
        "id": "btnMenu",
        "isVisible": true,
        "left": "323dp",
        "onClick": AS_Button_h716422b321b41d9a66b0eb30201a0fe,
        "skin": "sknBtnMenuKA",
        "top": "12dp",
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
    flxDateKA.add(Calendar0b0ad95e8760e43, btnBack, btnMenu);
    var lblTotalCal = new kony.ui.Label({
        "centerX": "50%",
        "height": "40dp",
        "id": "lblTotalCal",
        "isVisible": true,
        "skin": "sknLbl1F1C1BCN30KA",
        "text": "0/1300 Cal",
        "top": 0,
        "width": "200dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxCategoryKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxCategoryKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCategoryKA.setDefaultUnit(kony.flex.DP);
    var lblSuggestions = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSuggestions",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLbl1C3F64CN110KA",
        "text": "Suggestions",
        "top": "0",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblMeals = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblMeals",
        "isVisible": true,
        "left": "20dp",
        "skin": "sknLbl1C3F64CN110KA",
        "text": "Meals",
        "top": "0dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAnalytics = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblAnalytics",
        "isVisible": true,
        "left": "20dp",
        "skin": "sknLbl1C3F64CN110KA",
        "text": "Analytics",
        "top": "0dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxCategoryKA.add(lblSuggestions, lblMeals, lblAnalytics);
    var lblHighlightKA = new kony.ui.Label({
        "centerX": "50%",
        "height": "3dp",
        "id": "lblHighlightKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblWhite",
        "text": "Label",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmHeaderKA.add(flxDateKA, lblTotalCal, flxCategoryKA, lblHighlightKA);
    var flxScrollMainKA = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "73.71%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollMainKA",
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
    flxScrollMainKA.setDefaultUnit(kony.flex.DP);
    var flxFocus1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxFocus1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxF2F2F2KA",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFocus1.setDefaultUnit(kony.flex.DP);
    var flxMeal1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "flxMeal1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "right": "5dp",
        "skin": "sknFlxWhite",
        "zIndex": 1
    }, {}, {});
    flxMeal1.setDefaultUnit(kony.flex.DP);
    var lblMeal1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblMeal1",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLbl000000HB35KA",
        "text": "Breakfast",
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
    var lblCalories1 = new kony.ui.Label({
        "centerY": "50.00%",
        "id": "lblCalories1",
        "isVisible": true,
        "left": "70dp",
        "skin": "sknLbl000000HB35KA",
        "text": "367/361",
        "width": "70dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgAdd1 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgAdd1",
        "isVisible": true,
        "left": "15dp",
        "onTouchStart": AS_Image_e564ba19014d4326afb66e732c69c385,
        "skin": "slImage",
        "src": "add_active.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMeal1.add(lblMeal1, lblCalories1, imgAdd1);
    flxFocus1.add(flxMeal1);
    var flxFocus2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxFocus2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxF2F2F2KA",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFocus2.setDefaultUnit(kony.flex.DP);
    var flxMeal2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "flxMeal2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "right": "5dp",
        "skin": "sknFlxWhite",
        "zIndex": 1
    }, {}, {});
    flxMeal2.setDefaultUnit(kony.flex.DP);
    var CopylblMeal0fe7aff697d1d44 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblMeal0fe7aff697d1d44",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLbl000000HB35KA",
        "text": "Morning Snack",
        "top": "0dp",
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
    var CopylblCalories0a89328abee6640 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblCalories0a89328abee6640",
        "isVisible": true,
        "left": "70dp",
        "skin": "sknLbl000000HB35KA",
        "text": "0/136",
        "width": "70dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyimgAdd0e1466c6a37844b = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "CopyimgAdd0e1466c6a37844b",
        "isVisible": true,
        "left": "15dp",
        "onTouchStart": AS_Image_e03e5b5b40d440569bab39d6edf31204,
        "skin": "slImage",
        "src": "add_active.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMeal2.add(CopylblMeal0fe7aff697d1d44, CopylblCalories0a89328abee6640, CopyimgAdd0e1466c6a37844b);
    flxFocus2.add(flxMeal2);
    var flxFocus3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxFocus3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxF2F2F2KA",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFocus3.setDefaultUnit(kony.flex.DP);
    var flxMeal3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "flxMeal3",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "right": "5dp",
        "skin": "sknFlxWhite",
        "zIndex": 1
    }, {}, {});
    flxMeal3.setDefaultUnit(kony.flex.DP);
    var CopylblMeal0i91ff79ae65e4a = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblMeal0i91ff79ae65e4a",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLbl000000HB35KA",
        "text": "Lunch",
        "top": "0dp",
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
    var CopylblCalories0e2db4b45fec14e = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblCalories0e2db4b45fec14e",
        "isVisible": true,
        "left": "70dp",
        "skin": "sknLbl000000HB35KA",
        "text": "0/365",
        "width": "70dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyimgAdd0dd61d6546d9a48 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "CopyimgAdd0dd61d6546d9a48",
        "isVisible": true,
        "left": "15dp",
        "onTouchStart": AS_Image_j25522113ee243539ec31ce463fc8b1f,
        "skin": "slImage",
        "src": "add_active.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMeal3.add(CopylblMeal0i91ff79ae65e4a, CopylblCalories0e2db4b45fec14e, CopyimgAdd0dd61d6546d9a48);
    flxFocus3.add(flxMeal3);
    var flxFocus4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxFocus4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxF2F2F2KA",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFocus4.setDefaultUnit(kony.flex.DP);
    var flxMeal4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "flxMeal4",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "right": "5dp",
        "skin": "sknFlxWhite",
        "zIndex": 1
    }, {}, {});
    flxMeal4.setDefaultUnit(kony.flex.DP);
    var CopylblMeal0b76a277b6b9840 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblMeal0b76a277b6b9840",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLbl000000HB35KA",
        "text": "Evening Snack",
        "top": "0dp",
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
    var CopylblCalories0h2492c889b2840 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblCalories0h2492c889b2840",
        "isVisible": true,
        "left": "70dp",
        "skin": "sknLbl000000HB35KA",
        "text": "0/135",
        "width": "70dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyimgAdd0cd926065d3af4d = new kony.ui.Image2({
        "centerY": "50.00%",
        "height": "25dp",
        "id": "CopyimgAdd0cd926065d3af4d",
        "isVisible": true,
        "left": "15dp",
        "onTouchStart": AS_Image_f8185a11f8cd49819db9bdd04e959e78,
        "skin": "slImage",
        "src": "add_active.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMeal4.add(CopylblMeal0b76a277b6b9840, CopylblCalories0h2492c889b2840, CopyimgAdd0cd926065d3af4d);
    flxFocus4.add(flxMeal4);
    var flxFocus5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxFocus5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxF2F2F2KA",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFocus5.setDefaultUnit(kony.flex.DP);
    var flxMeal5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "flxMeal5",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "right": "5dp",
        "skin": "sknFlxWhite",
        "zIndex": 1
    }, {}, {});
    flxMeal5.setDefaultUnit(kony.flex.DP);
    var CopylblMeal0cfe15f86c75a41 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblMeal0cfe15f86c75a41",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknLbl000000HB35KA",
        "text": "Dinner",
        "top": "0dp",
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
    var CopylblCalories0d0e0368543b94d = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblCalories0d0e0368543b94d",
        "isVisible": true,
        "left": "70dp",
        "skin": "sknLbl000000HB35KA",
        "text": "0/365",
        "width": "70dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyimgAdd0af72f16209a94e = new kony.ui.Image2({
        "centerY": "50.00%",
        "height": "25dp",
        "id": "CopyimgAdd0af72f16209a94e",
        "isVisible": true,
        "left": "15dp",
        "onTouchStart": AS_Image_f01517cfb503487591070583afca4f31,
        "skin": "slImage",
        "src": "add_active.png",
        "top": "0dp",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMeal5.add(CopylblMeal0cfe15f86c75a41, CopylblCalories0d0e0368543b94d, CopyimgAdd0af72f16209a94e);
    flxFocus5.add(flxMeal5);
    var lblConsumedItems = new kony.ui.Label({
        "height": "30dp",
        "id": "lblConsumedItems",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknCN110736464KA",
        "text": "Consumed Items:",
        "top": "10dp",
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
    var segConsumedItems = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnDeleteKA": "",
            "btnUpdateKA": "Update",
            "imgTask": "add_active.png",
            "lblidKA": "Label",
            "segRecordsLbl": "Label"
        }, {
            "btnDeleteKA": "",
            "btnUpdateKA": "Update",
            "imgTask": "add_active.png",
            "lblidKA": "Label",
            "segRecordsLbl": "Label"
        }, {
            "btnDeleteKA": "",
            "btnUpdateKA": "Update",
            "imgTask": "add_active.png",
            "lblidKA": "Label",
            "segRecordsLbl": "Label"
        }],
        "groupCells": false,
        "height": "55%",
        "id": "segConsumedItems",
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
        "top": "10dp",
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
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    flxScrollMainKA.add(flxFocus1, flxFocus2, flxFocus3, flxFocus4, flxFocus5, lblConsumedItems, segConsumedItems);
    frmMainKA.add(frmHeaderKA, flxScrollMainKA);
    frmDietKA.add(frmMainKA);
};

function frmDietKAGlobals() {
    frmDietKA = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDietKA,
        "enabledForIdleTimeout": false,
        "id": "frmDietKA",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
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