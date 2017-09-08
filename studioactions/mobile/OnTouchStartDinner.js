function OnTouchStartDinner(eventobject, x, y) {
    return AS_Label_cf64ff890a6d4a62b700f53786ef8302(eventobject, x, y);
}

function AS_Label_cf64ff890a6d4a62b700f53786ef8302(eventobject, x, y) {
    if (frmDietKA.segDinner.isVisible == true) {
        frmDietKA.segDinner.isVisible = false;
    } else {
        frmDietKA.segDinner.isVisible = true;
    }
}