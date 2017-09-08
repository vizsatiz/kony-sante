define(function() {
    var controller = require("com/konymp/newsdetails/usernewsdetailsController");
    var actions = require("com/konymp/newsdetails/newsdetailsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});