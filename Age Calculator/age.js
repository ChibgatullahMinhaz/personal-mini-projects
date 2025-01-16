const inputVal = document.getElementById('age_dob_input');
const btn = document.getElementById('calculate_btn');
const output = document.getElementById('output');

btn.addEventListener('click',()=>{
    if(inputVal.value === ''){
        alert('Enter Your DOB')
    }else{
        const dob = new Date(inputVal.value);
        const dob_year = dob.getFullYear();

        // current 
        const now = new Date()
        const now_year = now.getFullYear()
        const age = now_year - dob_year;
        output.textContent =age;
    }

})