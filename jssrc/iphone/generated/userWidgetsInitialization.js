function initializeUserWidgets() {
    kony.mvc.registry.add("com.konymp.newsdetails", "newsdetails", "newsdetailsController");
    kony.application.registerMaster({
        "namespace": "com.konymp",
        "classname": "newsdetails",
        "name": "com.konymp.newsdetails"
    });
}