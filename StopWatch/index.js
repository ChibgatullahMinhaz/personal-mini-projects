const reset = document.getElementById('reset');
const start = document.getElementById('start');
const timer = document.getElementById('timer');
const container = document.querySelector('.container');
const header = document.querySelector('.header');

let active = false;
let [ss, mm, hh] = [0, 0, 0];
let interval;

let formattedHh;
let formattedSs;
let formattedMm;

const watchTime = () => {
    ss++
    if (ss > 59) {
        ss = 0;
        mm++;
        if (mm > 59) {
            mm = 0;
            hh++;
        }
    }
    formattedSs = String(ss).padStart(2, '0');
    formattedMm = String(mm).padStart(2, '0');
    formattedHh = String(hh).padStart(2, '0');
    timer.textContent = `${formattedHh}:${formattedMm}:${formattedSs}`;

}

const startWatch = () => {
    start.addEventListener('click', () => {
        active = active ? false : true
        if (active === true) {
            start.textContent = 'Stop';
            start.classList.add('active')
            interval = setInterval(watchTime, 100)
        } else {
            console.log('false')
            start.textContent = 'Start'
            start.classList.remove('active')
            clearInterval(interval)

        }

    })

}

const ResetWatch = () => {
    reset.addEventListener('click', () => {
        clearInterval(interval)
        timer.innerText = '00:00:00';
        if (active) {
            start.textContent = 'Start';
            start.classList.remove('active')
            startWatch()
        }
    })

}

function init() {
    startWatch()
    ResetWatch()
}
init()

// styling 
document.body.style.backgroundColor = 'rgb(32, 30, 27)';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';

container.style.borderRadius = ' 0px 0px 10px 10px';
container.style.boxShadow = '0 0 30px rgba(18, 236, 36, 0.5)';
container.style.backgroundColor = 'white';
container.style.width = '300px';
container.style.textAlign = 'center';

header.style.padding = '20px';
header.style.backgroundColor = 'rgb(54, 54, 63)';
header.style.color = 'white';
header.style.fontSize = '1.2rem';

start.style.border = 'none';
start.style.backgroundColor = 'blue';
start.style.color = 'white';
start.style.padding = '10px 20px';
start.style.marginBottom = '10px';
start.style.borderRadius = '5px';
start.style.cursor = 'pointer';

reset.style.backgroundColor = 'blue';
reset.style.border = 'none';
reset.style.color = 'white';
reset.style.padding = '10px 20px';
reset.style.marginBottom = '10px';
reset.style.cursor = 'pointer';
reset.style.borderRadius = '5px';

timer.style.padding = '20px';
timer.style.fontSize = '2.75rem';