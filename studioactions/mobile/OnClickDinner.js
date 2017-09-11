function OnClickDinner(eventobject, x, y) {
    return AS_Image_f01517cfb503487591070583afca4f31(eventobject, x, y);
}

function AS_Image_f01517cfb503487591070583afca4f31(eventobject, x, y) {
    sante.current.category = 5;
    frmItemsKA.lblHeader.text = "What did you have for Dinner?";
    frmItemsKA.show();
}