const button1 = document.querySelector('#applause');
const button2 = document.querySelector('#boo');
const button3 = document.querySelector('#gasp');
const button4 = document.querySelector('#tada');
const btn5 = document.getElementById('Victory');
const btn6 = document.getElementById('wrong')

const audio1 = document.querySelector('#audio-applause');
const audio2 = document.querySelector('#audio-boo');
const audio3 = document.querySelector('#audio-gasp');
const audio4 = document.querySelector('#audio-tada');
const audio5 = document.querySelector('#audio-victory');
const audio6 = document.querySelector('#audio-wrong');

button1.addEventListener('click', () => {
    stopAudio()
    audio6.play();
})

button2.addEventListener('click', () => {
    stopAudio()
    audio2.play();
})

button3.addEventListener('click', () => {
    stopAudio()
    audio3.play();
})

button4.addEventListener('click', () => {
    stopAudio()
    audio4.play();
})

btn5.addEventListener('click', function () {
    stopAudio()
    audio5.play();
})

btn6.addEventListener('click', function () {
    stopAudio()
    audio6.play();
})

function stopAudio() {
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
}