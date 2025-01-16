const container = document.getElementById('container');
const no_of_boxes = 600;
const hexcode = '0123456789ABCDEF';

function getRandom() {
    return Math.floor(Math.random() * 16);
}
function generateBoxs(){
    for (let i = 0; i < no_of_boxes; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        let previousColor = "#1D1D1D"; // Initialize with default color
        // Save the current color
       setInterval(() => {
        let currentColor = '#';
        for (let j = 0; j < 6; j++) {
            currentColor += hexcode[getRandom()];
        }
        // Set the new color
        box.style.backgroundColor = currentColor;
        box.style.boxShadow = `0 0 2px ${currentColor}, 0 0 10px ${currentColor}`;
       setTimeout(() => {
        box.style.backgroundColor = "#1D1D1D";
        box.style.boxShadow = "0 0 2px 0 rgba(0,0,0,0.3)";
       }, 300);
       }, 600);

       
       container.appendChild(box);
    }
}


function init(){
    generateBoxs()
}
init()