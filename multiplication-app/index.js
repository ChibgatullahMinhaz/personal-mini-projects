const score = document.querySelector('#score');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
let input = document.getElementById('input');
console.log(input.value)
const submit = document.querySelector('#button');
let count = 0;

submit.addEventListener('click', () => {
    let val = input.value;  // get value of input
    val = val.trim();  //trim the value
    val = Number(val);  //convert to number
    let mult = Number(num1.textContent * num2.textContent); // convert number with multiplication in num1 and num2 textcontent 
    if( input.value === '') {
        alert('Please enter a number')
    }else if (val === mult) {
        count++;
        score.textContent = count;
        num1.textContent= Math.floor(Math.random() * 20);
        num2.textContent= Math.floor(Math.random() * 20);
    }else {
        num1.textContent= Math.floor(Math.random() * 20);
        num2.textContent= Math.floor(Math.random() * 20);
    }
});