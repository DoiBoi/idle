// Get number of images in ./imgs using pure JS (browser)
var index = 0;
const length = 1;

document.body.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "ArrowRight":
            if (index + 1 < length) {
                index++;
            } else {
                index = 0;
            }
            break;
        case "ArrowLeft":
            if (index - 1 > 0) {
                index--;
            } else {
                index = length - 1;
            }
            break;
    }

    document.body.style.backgroundImage = `url(imgs/${index}.gif)`
});


// To ensure keyboard events are captured, focus the body
document.body.tabIndex = 0;
document.body.focus();