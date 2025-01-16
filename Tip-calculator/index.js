// Create a style element
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
}

.bill-info {
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
}

.tip-info {
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
}

input {
    width: 100%;
    padding: 10px;
    outline: none;
    margin-bottom: 10px;
    border-radius: 5px;
}

button {
    width: 120px;
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

.result {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
}
`;

// Append the style element to the head of the document
document.head.appendChild(style);
// finding elements
const billamount = document.querySelector("#bill-amount");
const tippercentage = document.querySelector("#tip-percentage");
const calculate = document.querySelector("#calculate");
const tipsAmount = document.getElementById('tipsAmount');
const output = document.querySelector("#total-bill");

calculate.addEventListener("click", (e)=>{
    if( billamount.value === "" || tippercentage.value === ""){
        alert("Please enter the values");
        return;
    }else if(billamount.value < 0 || tippercentage.value < 0){
        alert("Please enter positive values");
        return;
    }else{
        const billamountvalue = parseFloat(billamount.value);
        const tippercentagevalue = parseFloat(tippercentage.value);
        const tipamount = billamountvalue * (tippercentagevalue/100);
        console.log(tipamount)
        tipsAmount.innerText = tipamount;
        const totalbill = billamountvalue + tipamount;
        output.innerText = totalbill;
    }
});