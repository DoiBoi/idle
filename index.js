// Get number of images in ./imgs using pure JS (browser)
var index = 0;
const length = 2;

function changeAudio() {
    var audio = document.getElementById("audio_src");
    audio.src = `audio/${index}.mp3`;
    audio.load();
    audio.play();
}

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


// To ensure keyboard events are captured, focus the body
document.body.tabIndex = 0;
document.body.focus();
