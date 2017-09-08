function OnTouchMorningSnack(eventobject, x, y) {
    return AS_Label_e9eeea6f9a474ca690b9aad023a3c17f(eventobject, x, y);
}

function AS_Label_e9eeea6f9a474ca690b9aad023a3c17f(eventobject, x, y) {
    if (frmDietKA.segMorningSnack.isVisible == true) {
        frmDietKA.segMorningSnack.isVisible = false;
    } else {
        frmDietKA.segMorningSnack.isVisible = true;
    }
}