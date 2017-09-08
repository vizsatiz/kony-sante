function OnTouchStartEveningSnack(eventobject, x, y) {
    return AS_Label_b235dc47737a40f289ee3be74e3cef1a(eventobject, x, y);
}

function AS_Label_b235dc47737a40f289ee3be74e3cef1a(eventobject, x, y) {
    if (frmDietKA.segEveningSnack.isVisible == true) {
        frmDietKA.segEveningSnack.isVisible = false;
    } else {
        frmDietKA.segEveningSnack.isVisible = true;
    }
}