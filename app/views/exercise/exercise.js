var dialogsModule = require("ui/dialogs");
var frames = require("ui/frame");

var topFrame = frames.topmost();

function pageLoaded() {
    dialogsModule.alert("Your page is opened.");
}

function goBack() {
    topFrame.goBack();
}

exports.pageLoaded = pageLoaded;
exports.goBack = goBack;