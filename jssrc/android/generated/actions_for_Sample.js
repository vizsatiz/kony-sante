//actions.js file 
function AS_FlexContainer_b6286f3fd4c34102b00415e2fd683882(eventobject) {
    this.view.segImage.pageSkin = "sknNewsDetails";
}

function AS_AppEvents_e639ed7065f64a72ba009a122df3d399(eventobject) {
    appservicereq(eventobject);
}

function AS_Button_a74b7af6ce3a42e29120492606694e02(eventobject) {
    frmUserKA.show();
}

function AS_Button_b4c92a5966c84fa68cc5fb768333a5df(eventobject) {
    frmDietKA.show();
}

function AS_Button_bdc0a1796eef4ea8bd00165ebb553e66(eventobject) {
    return updateUserDetails.call(this);
}

function AS_Button_c24315c3a79547fbb09b086e32e8cba7(eventobject) {
    performObjectServiceSync('Sante4');
}

function AS_Button_db14b2adc7b1444cb83006cf0fba13b6(eventobject) {
    frmDietKA.show();
}

function AS_Button_f819fcb0c28149328b1a81a10917da59(eventobject) {
    frmUserKA.show();
}

function AS_Button_i42809aebb96463eabe7cd390d8c39d6(eventobject) {
    return updateGoalDetails.call(this);
}

function AS_FlexContainer_f752d13666e54572b16a3dc768b664ce(eventobject, x, y) {
    frmSanteKA.show();
}

function AS_Form_a691e86c93c34c2cb51e112833f240af(eventobject) {
    populateItemInFrmItemsKA()
}

function AS_Form_abb2276bdee24b82b79c67f51c5034b7(eventobject) {
    sante.constants.todaysCalories = 0;
    populateConsumedItemsBreakFast();
    populateConsumedItemsMorningSnacks();
    populateConsumedItemsLunch();
    populateConsumedItemsEveningSnack();
    populateConsumedItemsDinner();
}

function AS_Form_b10b0260748c46f580c578cf15ee652a(eventobject) {
    populateUserDetails();
}

function AS_Form_c231758fdec642cc94497378e47f43af(eventobject) {}

function AS_Form_c55aacd3369e4ec0af64ef5498b6549c(eventobject) {
    populateGoal();
}

function AS_Form_cc32892f85474dc2a4a06bdf568042b3(eventobject) {
    populateItemInFrmItemsKA();
}

function AS_Form_cd121849ac4942c48a5d3a9aeeb152dd(eventobject) {
    var name = sante.current.user.FIRST_NAME + "" + sante.current.user.LAST_NAME;
    var email = sante.current.user.EMAIL;
    frmUserKA.lblHeader.text = name;
    frmUserKA.lblEmail.text = email;
}

function AS_Form_da3185b308854cb68b1ab158a4b6818e(eventobject) {}

function AS_Form_e476d203b4614807abb9ab7cafccd260(eventobject) {}

function AS_Form_e5da246f38ce49f7871d8cf8fe8d7bbf(eventobject) {
    populateWorkoutDetails();
}

function AS_Form_f4941228472d468c8ad991e34bd09d80(eventobject) {}

function AS_Form_h998de6895dd42798982e8c2c0bee323(eventobject) {
    loginWithUsernamePassword("tester", "test", "SanteSapIdentity");
}

function AS_Image_b2bbfbc152cb4794b6d4cc741897684c(eventobject, x, y) {
    var string = frmItemsKA.tbWhere.text;
    var whereCondition = "ITEM_NAME LIKE '" + string + "%'";
    populateItemInFrmItemsKA({
        "whereConditionAsAString": whereCondition
    })
}

function AS_Image_i226ffdd2b0542b1998170e079b90f48(eventobject, x, y) {
    var searchText = frmItemsKA.tbWhere.text;
    var where = "ITEM_NAME like '" + searchText + "%'";
    populateItemInFrmItemsKA({
        "whereConditionAsAString": where
    });
}

function AS_Image_j86bbf9a08e343b59ff77286b49e384b(eventobject, imagesrc, issuccess) {}

function AS_Segment_e5eea0916e3e4d489ddeaf625768c35c(eventobject, sectionNumber, rowNumber) {
    return addItemsToCategory.call(this, eventobject, sectionNumber, rowNumber);
}

function OnBackClickEditQuantity(eventobject) {
    return AS_Button_h8ddb1f1327040308bc6859407b9e7ea(eventobject);
}

function AS_Button_h8ddb1f1327040308bc6859407b9e7ea(eventobject) {
    frmDietKA.show();
}

function OnClickBackDiet(eventobject) {
    return AS_Button_e8cce781ff194950bde21f0f3708ddf2(eventobject);
}

function AS_Button_e8cce781ff194950bde21f0f3708ddf2(eventobject) {
    frmSanteKA.show();
}

function OnClickBackFoodPreference(eventobject) {
    return AS_Button_ea79215043d34903969fb01564417234(eventobject);
}

function AS_Button_ea79215043d34903969fb01564417234(eventobject) {
    frmUserKA.show();
}

function OnClickBackItems(eventobject) {
    return AS_Button_af1d2a15bcd144e0a1074315ed97ac23(eventobject);
}

function AS_Button_af1d2a15bcd144e0a1074315ed97ac23(eventobject) {
    frmDietKA.show();
}

function OnClickBackSetGoal(eventobject) {
    return AS_Button_hc3de3c13053477e8a5d8eec945d8662(eventobject);
}

function AS_Button_hc3de3c13053477e8a5d8eec945d8662(eventobject) {
    frmUserKA.show();
}

function OnClickBackUser(eventobject) {
    return AS_Button_aa7bf500ed4b47a289666543657c33f5(eventobject);
}

function AS_Button_aa7bf500ed4b47a289666543657c33f5(eventobject) {
    frmSanteKA.show();
}

function OnClickBackWorkout(eventobject) {
    return AS_Button_a73d34d6e22949b69eff432b4fc51fa1(eventobject);
}

function AS_Button_a73d34d6e22949b69eff432b4fc51fa1(eventobject) {
    frmSanteKA.show();
}

function OnClickBasicInformation(eventobject) {
    return AS_Button_e0e6b0f4ff63465da21c137d0a5b1399(eventobject);
}

function AS_Button_e0e6b0f4ff63465da21c137d0a5b1399(eventobject) {
    frmUserKA.show();
}

function OnClickBreakfast(eventobject, x, y) {
    return AS_Image_e564ba19014d4326afb66e732c69c385(eventobject, x, y);
}

function AS_Image_e564ba19014d4326afb66e732c69c385(eventobject, x, y) {
    sante.current.category = 1;
    frmItemsKA.lblHeader.text = "What did you have for Breakfast?";
    frmItemsKA.show();
}

function OnClickBtnLogin(eventobject) {
    return AS_Button_fc0e127b3016406a92ca83a27a76d680(eventobject);
}

function AS_Button_fc0e127b3016406a92ca83a27a76d680(eventobject) {
    loginWithGoogle();
}

function OnClickDinner(eventobject, x, y) {
    return AS_Image_f01517cfb503487591070583afca4f31(eventobject, x, y);
}

function AS_Image_f01517cfb503487591070583afca4f31(eventobject, x, y) {
    sante.current.category = 5;
    frmItemsKA.lblHeader.text = "What did you have for Dinner?";
    frmItemsKA.show();
}

function OnClickEveningSnack(eventobject, x, y) {
    return AS_Image_f8185a11f8cd49819db9bdd04e959e78(eventobject, x, y);
}

function AS_Image_f8185a11f8cd49819db9bdd04e959e78(eventobject, x, y) {
    sante.current.category = 4;
    frmItemsKA.lblHeader.text = "What did you have for Evening Snack?";
    frmItemsKA.show();
}

function OnClickLogin(eventobject) {
    return AS_Button_e19d02c5a3a8471aaab5c69cc120c576(eventobject);
}

function AS_Button_e19d02c5a3a8471aaab5c69cc120c576(eventobject) {
    frmSanteKA.show();
}

function OnClickLunch(eventobject, x, y) {
    return AS_Image_j25522113ee243539ec31ce463fc8b1f(eventobject, x, y);
}

function AS_Image_j25522113ee243539ec31ce463fc8b1f(eventobject, x, y) {
    sante.current.category = 3;
    frmItemsKA.lblHeader.text = "What did you have for Lunch?";
    frmItemsKA.show();
}

function OnClickMorningSnack(eventobject, x, y) {
    return AS_Image_e03e5b5b40d440569bab39d6edf31204(eventobject, x, y);
}

function AS_Image_e03e5b5b40d440569bab39d6edf31204(eventobject, x, y) {
    sante.current.category = 2;
    frmItemsKA.lblHeader.text = "What did you have for Morning Snack?";
    frmItemsKA.show();
}

function OnClickSetGoal(eventobject, x, y) {
    return AS_Image_dbd032117f9c406dbf920cfaa5acb0d7(eventobject, x, y);
}

function AS_Image_dbd032117f9c406dbf920cfaa5acb0d7(eventobject, x, y) {
    frmSetGoalKA.show();
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

function OnClickUserProfile(eventobject, x, y) {
    return AS_Image_g00919c99de643e9a6b151f6f922f53e(eventobject, x, y);
}

function AS_Image_g00919c99de643e9a6b151f6f922f53e(eventobject, x, y) {
    frmUserDetailsKA.show();
}

function OnFlxSwipe(eventobject, x, y) {
    return AS_FlexContainer_fa66ecd33dc944c88f67470f77dfb6d5(eventobject, x, y);
}

function AS_FlexContainer_fa66ecd33dc944c88f67470f77dfb6d5(eventobject, x, y) {
    frmHomeKA.flxMainScreen1KA.isVisible = false;
    frmHomeKA.flxMainScreen2KA.isVisible = true;
}

function OnMenuClick(eventobject) {
    return AS_Button_a21489740f424d888410df3d344d96b2(eventobject);
}

function AS_Button_a21489740f424d888410df3d344d96b2(eventobject) {
    frmUserKA.show();
}

function OnRowClickConsumedItems(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_c2e06565346b40f989ecb6100d349c6c(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_c2e06565346b40f989ecb6100d349c6c(eventobject, sectionNumber, rowNumber) {
    frmEditQuantityKA.show();
}

function OnRowClickDinner(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_ea62bb33a66c455b80f50c1b4baa8fdb(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_ea62bb33a66c455b80f50c1b4baa8fdb(eventobject, sectionNumber, rowNumber) {
    frmEditQuantityKA.show();
}

function OnRowClickEveningSnack(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_ic2efcbe50684de6b7c2ba03599889fe(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_ic2efcbe50684de6b7c2ba03599889fe(eventobject, sectionNumber, rowNumber) {
    frmEditQuantityKA.show();
}

function OnRowClickLunch(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_e9a0bbb98a5049ea859cc4a4104a58f8(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_e9a0bbb98a5049ea859cc4a4104a58f8(eventobject, sectionNumber, rowNumber) {
    frmEditQuantityKA.show();
}

function OnRowClickMorningSnack(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_accaa00509bb4fee9b8bc5511b27dee9(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_accaa00509bb4fee9b8bc5511b27dee9(eventobject, sectionNumber, rowNumber) {
    frmEditQuantityKA.show();
}

function OnTouchTrackDiet(eventobject, x, y) {
    return AS_Image_bb24eeb4ef7e4759ab4bd45819e596bc(eventobject, x, y);
}

function AS_Image_bb24eeb4ef7e4759ab4bd45819e596bc(eventobject, x, y) {
    frmDietKA.show();
}

function OnTouchWater(eventobject, x, y) {
    return AS_Image_ac616a39eb5c47af921907b0cd6736c9(eventobject, x, y);
}

function AS_Image_ac616a39eb5c47af921907b0cd6736c9(eventobject, x, y) {
    frmFoodPreferenceKA.show();
}

function OnTouchWorkoutPlan(eventobject, x, y) {
    return AS_Image_g9a27dc877dc42e1ba6a245e743dd686(eventobject, x, y);
}

function AS_Image_g9a27dc877dc42e1ba6a245e743dd686(eventobject, x, y) {
    frmPlanKA.show();
}

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