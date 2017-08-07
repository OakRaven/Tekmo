var frameModule = require("ui/frame");

function navigateToAbout() {
    navigateTo("views/about/about");
}

function navigateToContactUs() {
    navigateTo("views/contact-us/contact-us");
}

function navigateToExercise() {
    navigateTo("views/exercise/exercise");
}

function navigateTo(view) {
    var navigationEntry = {
        moduleName: view,
        transition: {
            name: "slideLeft"
        }
    };

    frameModule.topmost().navigate(navigationEntry);
}

exports.navigateToAbout = navigateToAbout;
exports.navigateToContactUs = navigateToContactUs;
exports.navigateToExercise = navigateToExercise;