function OnClickLunch(eventobject, x, y) {
    return AS_Image_j25522113ee243539ec31ce463fc8b1f(eventobject, x, y);
}

function AS_Image_j25522113ee243539ec31ce463fc8b1f(eventobject, x, y) {
    sante.current.category = 3;
    frmItemsKA.lblHeader.text = "What did you have for Lunch?";
    frmItemsKA.show();
}