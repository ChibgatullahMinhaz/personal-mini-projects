// create div
const container = document.getElementById('container');
const headDiv = document.createElement('div');
const input_serch = document.createElement('div');
const output = document.createElement('div');
// append child element
const head_title = document.createElement('h1');
const input = document.createElement('input');
const btn = document.createElement('button');
const outputP = document.createElement('p');
outputP.textContent = 'Meaning will be displayed here...';
btn.textContent= 'generate'
input.type= 'text';
input.placeholder = 'Enter a word and get a meaning... '
head_title.textContent = 'Dictionary App';
headDiv.appendChild(head_title);
input_serch.appendChild(input);
input_serch.appendChild(btn)
output.appendChild(outputP)
container.appendChild(headDiv)
container.appendChild(input_serch)
container.appendChild(output)

btn.addEventListener('click', async() => {
    const val = input.value;
    if( val === ""){
        let userInput = prompt('Please Enter Your Word');
        const response  = await fetch( `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`);
        let  data = await response.json();
        outputP.textContent = data[0]['meanings'][0]["definitions"][0]["definition"];
        input.value = userInput;
    }else {    
        const response  = await fetch( `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`);
        let  data = await response.json();
        outputP.textContent = data[0]['meanings'][0]["definitions"][0]["definition"];
    }
});


// Apply global styles
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';

// Apply body styles
document.body.style.backgroundColor = 'antiquewhite';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';

// Create and style container
container.style.backgroundColor = 'white';
container.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.2)';
container.style.width = '450px';
container.style.textAlign = 'center';
container.style.borderRadius = '10px';
container.style.padding = '15px';
container.style.position = 'relative';

// Create and style header
head_title.style.position = 'absolute';
head_title.style.top = '-50%';
head_title.style.color = '#892BE2';
head_title.style.fontSize = '2rem';
head_title.style.left = '30%';

// Create and style input
input.style.display = 'block';
input.style.width = '95%';
input.style.padding = '10px';
input.style.border = '1px solid #ccc';
input.style.borderRadius = '5px';
input.style.marginBottom = '10px';
input.style.fontSize = '1rem';
input.style.outline = 'none';

// Add focus style for input
input.addEventListener('focus', () => {
    input.style.borderColor = '#892BE2';
});

outputP.style.color = 'red';
outputP.style.fontWeight = 'bolder'
// Create and style button
btn.style.backgroundColor = '#892BE2';
btn.style.color = 'white';
btn.style.border = 'none';
btn.style.padding = '10px 20px';
btn.style.borderRadius = '5px';
btn.style.fontSize = '1rem';
btn.style.cursor = 'pointer';
btn.style.marginBottom = '10px';