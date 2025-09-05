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

// Touch controls
let touchStartX = null;
let touchStartY = null;

document.body.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }
});

document.body.addEventListener('touchend', function (e) {
    if (touchStartX === null || touchStartY === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    // Only consider horizontal swipes
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
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
    } else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
        // Tap (mute/unmute)
        var audio = document.getElementById("audio_src");
        audio.muted = !audio.muted;
    }
    touchStartX = null;
    touchStartY = null;
});


// To ensure keyboard events are captured, focus the body
document.body.tabIndex = 0;
document.body.focus();
