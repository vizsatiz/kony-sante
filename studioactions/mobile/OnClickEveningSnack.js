function OnClickEveningSnack(eventobject, x, y) {
    return AS_Image_f8185a11f8cd49819db9bdd04e959e78(eventobject, x, y);
}

function AS_Image_f8185a11f8cd49819db9bdd04e959e78(eventobject, x, y) {
    sante.current.category = 4;
    frmItemsKA.lblHeader.text = "What did you have for Evening Snack?";
    frmItemsKA.show();
}