function OnClickBreakfast(eventobject, x, y) {
    return AS_Image_e564ba19014d4326afb66e732c69c385(eventobject, x, y);
}

function AS_Image_e564ba19014d4326afb66e732c69c385(eventobject, x, y) {
    sante.current.category = 1;
    frmItemsKA.lblHeader.text = "What did you have for Breakfast?";
    frmItemsKA.show();
}