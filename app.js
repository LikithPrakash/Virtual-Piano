const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => playAudio(button));
});

function playAudio(button) {
    const audio = document.getElementById(button.dataset.key);
    audio.currentTime = 0;
    audio.play();
}

function changeColor() {
    let color = document.getElementById('board').value;
    document.body.style.backgroundColor = color;

}