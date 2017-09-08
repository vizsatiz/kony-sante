function OnTouchStartBreakfast(eventobject, x, y) {
    return AS_Label_h32f587b823b42379e6480e0672f7116(eventobject, x, y);
}

function AS_Label_h32f587b823b42379e6480e0672f7116(eventobject, x, y) {
    if (frmDietKA.segConsumedItems.isVisible == true) {
        frmDietKA.segConsumedItems.isVisible = false;
    } else {
        frmDietKA.segConsumedItems.isVisible = true;
    }
}