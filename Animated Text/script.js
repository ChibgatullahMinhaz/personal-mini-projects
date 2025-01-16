const animatedText = document.querySelector(".animated-text");
const texts = [
    "Subscribe to  Youtube Channel",
    "Learn MERN Stack Development",
    "Follow for more tutorials"
];
let currentTextIndex = 0;
let i = 0;
let speed = 40;

function animate() {
    const currentText = texts[currentTextIndex];
    animatedText.textContent = currentText.substring(0, i);
    i++;

    if (i > currentText.length) {
        i = 0;
        currentTextIndex++;
        if (currentTextIndex >= texts.length) {
            currentTextIndex = 0;
        }
    }

    setTimeout(animate, speed);
}

// initial function
function init (){
    animate()
}
init()