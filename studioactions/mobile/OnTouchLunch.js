function OnTouchLunch(eventobject, x, y) {
    return AS_Label_f7952a807a4c470bb77cf29c622090b7(eventobject, x, y);
}

function AS_Label_f7952a807a4c470bb77cf29c622090b7(eventobject, x, y) {
    if (frmDietKA.segLunch.isVisible == true) {
        frmDietKA.segLunch.isVisible = false;
    } else {
        frmDietKA.segLunch.isVisible = true;
    }
}