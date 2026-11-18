//your JS code here. If required.

const buttons = document.getElementById("buttons");

const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

const audioElements = {};

sounds.forEach((sound) => {
    audioElements[sound] = new Audio(`sounds/${sound}.mp3`);
});

buttons.addEventListener("click", (event) => {

    if (event.target.classList.contains("btn")) {

        const soundName = event.target.dataset.sound;

        // Stop previous sounds
        Object.values(audioElements).forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });

        // Play selected sound
        audioElements[soundName].currentTime = 0;
        audioElements[soundName].play();
    }

    // Stop button
    if (event.target.classList.contains("stop")) {

        Object.values(audioElements).forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });

    }
});
