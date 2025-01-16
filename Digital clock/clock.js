const container = document.createElement('div');
const TimerDiv = document.createElement('div');
TimerDiv.textContent = '00:00:00'
const headerDiv = document.createElement('div');
headerDiv.textContent = 'Digital Clock'


// appending child
container.appendChild(headerDiv);
container.appendChild(TimerDiv);
document.body.appendChild(container);

// styling 
document.body.style.background = 'antiquewhite'
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';

container.style.border = '1px solid blue';
container.style.borderRadius = '10px';
container.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
container.style.width = '250px';
container.style.backgroundColor = 'white';
container.style.textAlign = 'center';
container.style.padding = "1rem";

// timing 
setInterval(() => {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes()
    let s = now.getSeconds()
    if (s < 10) {
        s = "0" + s;
    } else {
        s = s;
    }
    if (m < 10) {
        m = "0" + m;
    } else {
        m = m;
    }
    if (h < 10) {
        h = "0" + h;
    } else {
        h = h;
    }
    const timestr = h + ":" + m + ":" + s
    TimerDiv.textContent = timestr;
}, 1000);