var dialogsModule = require("ui/dialogs");
var frames = require("ui/frame");

function onTap(args) {
    dialogsModule.alert("Your message has been sent.")
        .then(function() {
            frames.topmost().goBack();
        });
}

exports.onTap = onTap;