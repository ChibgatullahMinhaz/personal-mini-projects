const inputFeild = document.getElementById('password');
const outputFeild = document.getElementById('output');


inputFeild.addEventListener('input', () => {
    let password = inputFeild.value;
    console.log(password)
    if (password.length < 8) {
        outputFeild.innerText = 'Password is too short';
        outputFeild.style.color = 'red';
    } else {
        if (password.search(/[a-z]/) == -1) {
            outputFeild.innerText = 'Password is missing a lowercase latter';
            outputFeild.style.color = 'red'
        } else if (password.search(/[A-Z]/) == -1) {
            outputFeild.innerText = 'Password is missing a Uppercase latter';
            outputFeild.style.color = 'red'
        }
        else if (password.search(/[0-9]/) == -1) {
            outputFeild.innerText = 'Password is missing Numeric number';
            outputFeild.style.color = 'red'
        }
        else if (password.search(/[!\@\#\$\%\^\&\*\(\)\-\_\=\+\|\[\]\{\}\;\:\/]/) == -1) {
            outputFeild.innerText = 'Password must contain at least one special character';
            outputFeild.style.color = 'red';
        }
         else {
            outputFeild.innerText = 'Password is Strong';
            outputFeild.style.color = 'green';
        }
    }
})