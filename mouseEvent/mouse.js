const xposition = document.getElementById('xpos-value');
const yposition = document.getElementById('ypos-value');
window.addEventListener('mousemove', (event)=>{
    xposition.textContent = event.clientX;
    yposition.textContent = event.clientY;
})