const outputValue = document.getElementById('bmi-value');
const outputStatus = document.getElementById('bmi-status');
const calculate = document.getElementById('calculate-bmi');
const height = document.getElementById('height');
const weight = document.getElementById('weight');


calculate.addEventListener('click', ()=>{
    let hVal = height.value;
    let wVal = weight.value;
    let height_value_metter = hVal / 100;
    if(hVal === "" || wVal === ""){
        alert('Fill up All inputs');
        return;
    }else{
        let bmi = wVal / (height_value_metter * height_value_metter);
        outputValue.textContent = bmi.toFixed(2);
        if(bmi <= 18.4) {
            outputStatus.textContent = 'Underweight';
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            outputStatus.textContent = 'Normal';
        } else if(bmi >= 25 && bmi <= 39.9) {
            outputStatus.textContent = 'Overweight';
        } else if(bmi >= 40) {
            outputStatus.textContent = 'Obese';
        }
    }
})