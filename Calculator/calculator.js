
// Create container div
const container = document.createElement('div');
container.className = 'container';

// Create output div
const outputDiv = document.createElement('div');
outputDiv.className = 'output';

// Create result input
const resultInput = document.createElement('input');
resultInput.type = 'text';
resultInput.className = 'result';
resultInput.placeholder = '0';
resultInput.disabled = true;

// Append result input to output div
outputDiv.appendChild(resultInput);

// Append output div to container
container.appendChild(outputDiv);

// Function to create a row of buttons
function createRow(buttons) {
    const row = document.createElement('div');
    row.className = 'row';
    buttons.forEach(text => {
        const button = document.createElement('button');
        button.className = text.toLowerCase();
        button.textContent = text;
        row.appendChild(button);
    });
    return row;
}

// Create rows of buttons
const rows = [
    ['AC', 'DEL', '/', '%'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['00', '0', '.', '=']
];

// Append rows to container
rows.forEach(buttons => {
    const row = createRow(buttons);
    container.appendChild(row);
});

// Append container to body
document.body.appendChild(container);

const output = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
let str = '';
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent.trim() === 'AC') {
            str = '';
            output.value = str;
        } else if (e.target.textContent.trim() === '=') {
            try {
                str = eval(str);
                output.value = str;
            } catch (error) {
                output.textContent = 'Error';
            }
        } else if (e.target.textContent.trim() === 'DEL') {
            str = str.substring(0, str.length - 1);
            output.value = str;
        } else {
            str += e.target.textContent.trim();
            output.value = str;
        }
        console.log('Current string:', str);
    });
});