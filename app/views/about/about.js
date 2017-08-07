var frames = require("ui/frame");

function onTap() {
    frames.topmost().goBack();
}

exports.onTap = onTap;