const style = document.createElement('style');

// Add CSS rules to the style element
style.innerHTML = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
#count{
font-size: 4rem;
 text-align: center;
 font-weight: 700;
}
.container {
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    background-color: white;
    width: 400px;
    text-align: center;
    padding: 20px;
}
.header {
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 2rem;
}
button {
    width: 80px;
    padding: 10px;
    font-size: 16px;
    background-color: red;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 10px;
}

button:hover {
    cursor: pointer;
    background-color: #ff0099;
}
`;

// Append the style element to the head of the document
document.head.appendChild(style);

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
const count = document.getElementById('count');
let cont = 0
plus.addEventListener('click', ()=>{
    cont++
    count.innerText = cont
})

minus.addEventListener('click', ()=>{
    cont--
    count.innerText = cont
})

reset.addEventListener('click', ()=>{
    cont = 0;
    count.innerText = cont;
})