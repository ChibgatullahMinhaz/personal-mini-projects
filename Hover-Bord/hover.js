const container = document.querySelector('#container');
const n_of_box = 600;
const colors = ["green", "orange", "yellow", "red", "violet", "pink", "blue"];

function RandomC(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element) {
    element.style.backgroundColor = RandomC(colors);
    element.style.boxShadow = `0 0 2px ${element.style.backgroundColor}, 0 0 10px ${element.style.backgroundColor}`;
}

function unsetColor(element) {
    element.style.backgroundColor = "#1D1D1D";
    element.style.boxShadow = "0 0 2px 0 rgba(0,0,0,0.3)";
}

const homerSquare = ()=>{
    for (let i = 0; i < n_of_box; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            setColor(square);
        });
        square.addEventListener('mouseout', () => {
            unsetColor(square);
        });
        container.appendChild(square);
    }
}


function init (){

homerSquare()
}
init()

