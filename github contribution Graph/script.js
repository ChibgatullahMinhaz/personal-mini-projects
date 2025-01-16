const container = document.getElementById('container');
const no_of_boxes = 300;
const colors = ["#196127","#219A3A","#EAEDF0","#C6E48B","#7BC96F"]

function randomColor(colors){
    return colors[Math.floor(Math.random()*colors.length)]
}

for(let i= 0;i< no_of_boxes;i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.style.backgroundColor = randomColor(colors)
    container.appendChild(square)
}