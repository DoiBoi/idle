// Get number of images in ./imgs using pure JS (browser)
var index = 0;
const length = 2;

function changeAudio() {
    var audio = document.getElementById("audio_src");
    audio.src = `audio/${index}.mp3`;
    audio.load();
    audio.play();
}


// Keyboard controls
document.body.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "ArrowRight":
            if (index + 1 < length) {
                index++;
            } else {
                index = 0;
            }
            changeAudio();
            document.body.style.backgroundImage = `url(imgs/${index}.gif)`
            break;
        case "ArrowLeft":
            if (index - 1 > 0) {
                index--;
            } else {
                index = length - 1;
            }
            changeAudio();
            document.body.style.backgroundImage = `url(imgs/${index}.gif)`
            break;
        case " ":
            var audio = document.getElementById("audio_src");
            audio.muted = !audio.muted;
            break;
        default:
            console.log(event.key)
            break;
    }
});

// Touch interactions
let touchStartX = null;

document.addEventListener('touchstart', function (event) {
    if (event.touches.length === 1) {
        touchStartX = event.touches[0].clientX;
    }
});

document.addEventListener('touchend', function (event) {
    if (touchStartX === null) return;
    let touchEndX = event.changedTouches[0].clientX;
    let dx = touchEndX - touchStartX;
    console.log(dx);
    if (Math.abs(dx) > 30) {
        // Horizontal swipe
        if (dx > 0) {
            // Swipe right (previous)
            if (index - 1 > 0) {
                index--;
            } else {
                index = length - 1;
            }
            changeAudio();
            document.body.style.backgroundImage = `url(imgs/${index}.gif)`
        } else {
            // Swipe left (next)
            if (index + 1 < length) {
                index++;
            } else {
                index = 0;
            }
            changeAudio();
            document.body.style.backgroundImage = `url(imgs/${index}.gif)`
        }
    } else if (Math.abs(dx) < 10) {
        var audio = document.getElementById("audio_src");
        audio.muted = !audio.muted;
    }
    touchStartX = null;
});

