//actions.js file 
function AS_FlexContainer_b6286f3fd4c34102b00415e2fd683882(eventobject) {
    this.view.segImage.pageSkin = "sknNewsDetails";
}

function AS_Image_j86bbf9a08e343b59ff77286b49e384b(eventobject, imagesrc, issuccess) {}

function OnClickBackItems(eventobject) {
    return AS_Button_af1d2a15bcd144e0a1074315ed97ac23(eventobject);
}

function AS_Button_af1d2a15bcd144e0a1074315ed97ac23(eventobject) {
    frmDietKA.show();
}

function OnClickBreakfast(eventobject, x, y) {
    return AS_Image_e564ba19014d4326afb66e732c69c385(eventobject, x, y);
}

function AS_Image_e564ba19014d4326afb66e732c69c385(eventobject, x, y) {
    frmItemsKA.lblHeader.text = "What did you have for Breakfast?";
    frmItemsKA.show();
}

function OnClickDinner(eventobject, x, y) {
    return AS_Image_f01517cfb503487591070583afca4f31(eventobject, x, y);
}

function AS_Image_f01517cfb503487591070583afca4f31(eventobject, x, y) {
    frmItemsKA.lblHeader.text = "What did you have for Dinner?";
    frmItemsKA.show();
}

function OnClickEveningSnack(eventobject, x, y) {
    return AS_Image_f8185a11f8cd49819db9bdd04e959e78(eventobject, x, y);
}

function AS_Image_f8185a11f8cd49819db9bdd04e959e78(eventobject, x, y) {
    frmItemsKA.lblHeader.text = "What did you have for Evening Snack?";
    frmItemsKA.show();
}

function OnClickLogin(eventobject) {
    return AS_Button_e19d02c5a3a8471aaab5c69cc120c576(eventobject);
}

function AS_Button_e19d02c5a3a8471aaab5c69cc120c576(eventobject) {
    frmDietKA.show();
}

function OnClickLunch(eventobject, x, y) {
    return AS_Image_j25522113ee243539ec31ce463fc8b1f(eventobject, x, y);
}

function AS_Image_j25522113ee243539ec31ce463fc8b1f(eventobject, x, y) {
    frmItemsKA.lblHeader.text = "What did you have for Lunch?";
    frmItemsKA.show();
}

function OnClickMorningSnack(eventobject, x, y) {
    return AS_Image_e03e5b5b40d440569bab39d6edf31204(eventobject, x, y);
}

function AS_Image_e03e5b5b40d440569bab39d6edf31204(eventobject, x, y) {
    frmItemsKA.lblHeader.text = "What did you have for Morning Snack?";
    frmItemsKA.show();
}

function OnClickUserBack(eventobject) {
    return AS_Button_e7b2306e5a494ba9b862c1a106de36e6(eventobject);
}

function AS_Button_e7b2306e5a494ba9b862c1a106de36e6(eventobject) {
    frmDietKA.show();
}

function OnClickUserInfo(eventobject) {
    return AS_Button_h716422b321b41d9a66b0eb30201a0fe(eventobject);
}

function AS_Button_h716422b321b41d9a66b0eb30201a0fe(eventobject) {
    frmUserKA.show();
}

function OnFlxSwipe(eventobject, x, y) {
    return AS_FlexContainer_fa66ecd33dc944c88f67470f77dfb6d5(eventobject, x, y);
}

function AS_FlexContainer_fa66ecd33dc944c88f67470f77dfb6d5(eventobject, x, y) {
    frmHomeKA.flxMainScreen1KA.isVisible = false;
    frmHomeKA.flxMainScreen2KA.isVisible = true;
}

function OnTouchBasicInfo(eventobject, x, y) {
    return AS_Image_bb24eeb4ef7e4759ab4bd45819e596bc(eventobject, x, y);
}

function AS_Image_bb24eeb4ef7e4759ab4bd45819e596bc(eventobject, x, y) {
    frmUserDetailsKA.show();
}

function OnTouchFoodPreference(eventobject, x, y) {
    return AS_Image_ac616a39eb5c47af921907b0cd6736c9(eventobject, x, y);
}

function AS_Image_ac616a39eb5c47af921907b0cd6736c9(eventobject, x, y) {
    frmFoodPreferenceKA.show();
}

function OnTouchGoal(eventobject, x, y) {
    return AS_Image_g9a27dc877dc42e1ba6a245e743dd686(eventobject, x, y);
}

function AS_Image_g9a27dc877dc42e1ba6a245e743dd686(eventobject, x, y) {
    frmSetGoalKA.show();
}