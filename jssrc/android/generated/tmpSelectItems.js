function initializetmpSelectItems() {
    flxTmpAssetMainKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxTmpAssetMainKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlxF2F2F2KA"
    }, {}, {});
    flxTmpAssetMainKA.setDefaultUnit(kony.flex.DP);
    var flxMainAssetKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "87%",
        "id": "flxMainAssetKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3.15%",
        "skin": "sknFlxFFFFFFShadow000000XYKA",
        "top": "0dp",
        "width": "93.70%",
        "zIndex": 1
    }, {}, {});
    flxMainAssetKA.setDefaultUnit(kony.flex.DP);
    var flxSwipeKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSwipeKA",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "top": "0dp",
        "width": "149%",
        "zIndex": 1
    }, {}, {});
    flxSwipeKA.setDefaultUnit(kony.flex.DP);
    var flxDetailsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxDetailsKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0dp",
        "width": "66.98%",
        "zIndex": 1
    }, {}, {});
    flxDetailsKA.setDefaultUnit(kony.flex.DP);
    var segRecordsLbl = new kony.ui.Label({
        "centerY": "50%",
        "height": "30dp",
        "id": "segRecordsLbl",
        "isVisible": true,
        "left": "15dp",
        "skin": "sknLbl5E5050CN30KA",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "270dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var imgTask = new kony.ui.Image2({
        "centerY": "50%",
        "height": "23dp",
        "id": "imgTask",
        "isVisible": true,
        "right": "15dp",
        "src": "add_active.png",
        "top": "2dp",
        "width": "23dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblidKA = new kony.ui.Label({
        "bottom": "15dp",
        "id": "lblidKA",
        "isVisible": false,
        "left": "0dp",
        "skin": "sknLbl5E5050CN26KA",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDetailsKA.add(segRecordsLbl, imgTask, lblidKA);
    var flxSwipeDetailsKA = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSwipeDetailsKA",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "flxTransSkinKA",
        "top": "0dp",
        "width": "20.57%",
        "zIndex": 1
    }, {}, {});
    flxSwipeDetailsKA.setDefaultUnit(kony.flex.DP);
    var btnUpdateKA = new kony.ui.Button({
        "centerX": 31,
        "centerY": "59.68%",
        "focusSkin": "sknBtn3A3F77Border4pxCN28KA",
        "height": "100%",
        "id": "btnUpdateKA",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknBtnCN1103a3f77OnKA",
        "text": "Update",
        "width": "62dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnDeleteKA = new kony.ui.Button({
        "centerX": "80.65%",
        "centerY": "51.28%",
        "focusSkin": "sknBtn3A3F77Border4pxCN28KA",
        "height": "68.91%",
        "id": "btnDeleteKA",
        "isVisible": true,
        "skin": "btntouchCancleSkinNormalKA",
        "width": "26.49%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSwipeDetailsKA.add(btnUpdateKA, btnDeleteKA);
    flxSwipeKA.add(flxDetailsKA, flxSwipeDetailsKA);
    flxMainAssetKA.add(flxSwipeKA);
    flxTmpAssetMainKA.add(flxMainAssetKA);
}