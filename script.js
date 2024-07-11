function toggleLogin() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');

    if (container.classList.contains('active')) {
        playSound('login.mp3');
    }
}

function playSound(src) {
    const audio = new Audio(src);
    audio.play();
}
