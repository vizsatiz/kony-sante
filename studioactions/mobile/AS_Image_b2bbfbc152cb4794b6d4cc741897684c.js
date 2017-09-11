function AS_Image_b2bbfbc152cb4794b6d4cc741897684c(eventobject, x, y) {
    var string = frmItemsKA.tbWhere.text;
    var whereCondition = "ITEM_NAME LIKE '" + string + "%'";
    populateItemInFrmItemsKA({
        "whereConditionAsAString": whereCondition
    })
}