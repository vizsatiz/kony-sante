function AS_Image_i226ffdd2b0542b1998170e079b90f48(eventobject, x, y) {
    var searchText = frmItemsKA.tbWhere.text;
    var where = "ITEM_NAME like '" + searchText + "%'";
    populateItemInFrmItemsKA({
        "whereConditionAsAString": where
    });
}