const container = document.getElementById('container');
const hexcode = '0123456789ABCDEF';

for (let i = 0; i < 30; i++) {
    const boxs = document.createElement('div');
    boxs.classList.add('color_card');
    let color = '#';
    for (let j = 0; j < 6; j++) {
        color += hexcode[getRandom()];
    }
    boxs.textContent = color;
    boxs.style.backgroundColor = color;

    const copy = document.createElement('div');
    copy.classList.add('message');
    copy.textContent = 'Copied';
    boxs.appendChild(copy);
    container.appendChild(boxs);

    // Add event listener to each box
    boxs.addEventListener('click', async () => {
        await navigator.clipboard.writeText(color);
        showMessage(copy);
    });
}

function getRandom() {
    return Math.floor(Math.random() * 16);
}

function showMessage(copy) {
    copy.style.display = 'inline-block';
    copy.style.opacity = '1';
    setTimeout(() => {
        copy.style.opacity = '0';
        setTimeout(() => {
            copy.style.display = 'none';
        }, 500);
    }, 500);
}
