const container = document.getElementById('container');

// creating elements
// header 
const headerDiv = document.createElement('div');
headerDiv.className= 'header';
const h1 = document.createElement ('h1');
h1.innerText = 'Todo Application';
headerDiv.appendChild(h1);
container.appendChild(headerDiv)

const inputDiv = document.createElement('div');
const input = document.createElement('input');
input.classList.add("input");
input.type = 'text';
input.placeholder= 'Enter Your Todo';
const Addtodo = document.createElement('button');
Addtodo.id = 'Addtodo';
Addtodo.innerText = 'Add Todo';
inputDiv.appendChild(input);
inputDiv.appendChild(Addtodo)
container.appendChild(inputDiv);
// outputs
const outputDiv = document.createElement('div');
outputDiv.className = 'output';
const output = document.createElement('ul');
output.id= 'output';
outputDiv.appendChild(output);
container.appendChild(outputDiv)

Addtodo.addEventListener('click', () => {
  const todo = input.value;
  if( todo === '' ) {
    alert('Please enter a todo');
    return;
  }else {
    const li = document.createElement('li');
    li.innerHTML = `<span>${todo}</span>
    <button id="listBtn" onClick="removeTodo(this)">Remove</button>`;
    output.appendChild(li)
    input.value = ''
  }
});

function removeTodo(element){
    element.parentNode.remove();
}