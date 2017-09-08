define(function() {
    return function(controller) {
        var newsdetails = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "newsdetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "preShow": controller.AS_FlexContainer_b6286f3fd4c34102b00415e2fd683882,
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        newsdetails.setDefaultUnit(kony.flex.DP);
        var flxNewsDetails = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "100%",
            "id": "flxNewsDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknNewsDetails",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxNewsDetails.setDefaultUnit(kony.flex.DP);
        var flxNewsImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "300dp",
            "id": "flxNewsImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxNewsImage.setDefaultUnit(kony.flex.DP);
        var segImage = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "Image0j5421d6ccf6e46": "newsdetailimage1.png"
            }, {
                "Image0j5421d6ccf6e46": "newsdetailimage2.png"
            }, {
                "Image0j5421d6ccf6e46": "newsdetailimage3.png"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segImage",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "FlexContainer0f6ec0fa04dea44",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "FlexContainer0f6ec0fa04dea44": "FlexContainer0f6ec0fa04dea44",
                "Image0j5421d6ccf6e46": "Image0j5421d6ccf6e46"
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
        flxNewsImage.add(segImage);
        var flxHeading = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "300dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblNewsheading = new kony.ui.Label({
            "height": "100%",
            "id": "lblNewsheading",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblNewsTitle",
            "text": "Tour bus crashes in Peru's capital, killing at least 9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 3, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxHeading.add(lblNewsheading);
        var flxSubHeading = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSubHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "365dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSubHeading.setDefaultUnit(kony.flex.DP);
        var flxDateTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxDateTime",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "50%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDateTime.setDefaultUnit(kony.flex.DP);
        var lblDateTime = new kony.ui.Label({
            "id": "lblDateTime",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknDateTime",
            "text": "Jul 10, 2017 10:04 AM",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxDateTime.add(lblDateTime);
        var flxReporterDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxReporterDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxReporterDetails.setDefaultUnit(kony.flex.DP);
        var CopyLabel0e12d8ff34a9942 = new kony.ui.Label({
            "id": "CopyLabel0e12d8ff34a9942",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblNewsBy",
            "text": "By",
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblReporterName = new kony.ui.Label({
            "id": "lblReporterName",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknNewsAuthor",
            "text": "Caitlin Schiller",
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxReporterDetails.add(CopyLabel0e12d8ff34a9942, lblReporterName);
        flxSubHeading.add(flxDateTime, flxReporterDetails);
        var flxNews = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNews",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox",
            "top": "425dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxNews.setDefaultUnit(kony.flex.DP);
        var Label0e4092c7ef0bc43 = new kony.ui.Label({
            "id": "Label0e4092c7ef0bc43",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknNewsText",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 3, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxNews.add(Label0e4092c7ef0bc43);
        flxNewsDetails.add(flxNewsImage, flxHeading, flxSubHeading, flxNews);
        newsdetails.add(flxNewsDetails);
        return newsdetails;
    }
})