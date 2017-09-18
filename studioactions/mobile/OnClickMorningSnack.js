function OnClickMorningSnack(eventobject, x, y) {
    return AS_Image_e03e5b5b40d440569bab39d6edf31204(eventobject, x, y);
}

function AS_Image_e03e5b5b40d440569bab39d6edf31204(eventobject, x, y) {
    sante.current.category = 2;
    frmItemsKA.lblHeader.text = "What did you have for Morning Snack?";
    frmItemsKA.show();
}