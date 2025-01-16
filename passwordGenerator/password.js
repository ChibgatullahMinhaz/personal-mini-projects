const passinput = document.getElementById('PasswordInput');
const Copy = document.querySelector('#Copy');
const lengthN = document.querySelector('#length_number');
const upper = document.getElementById('Uppercase');
const lower = document.querySelector('#Lowercase');
const Symbols = document.querySelector('#Symbols');
const Number = document.querySelector('#Numbers');
const Generat = document.querySelector('#Generator');
const buttonText = document.getElementById('button-text');
const loadingSpinner = document.getElementById('loading-spinner');

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

Generat.addEventListener('click', () => {
    buttonText.style.display = 'none'; // Hide button text
    loadingSpinner.style.display = 'inline-block'; // Show loading spinner

    setTimeout(() => {
        let password = ''; // Reset password each time
        let str = '';
        
        if (upper.checked) {
            str += uppercasestr;
        }
        if (lower.checked) {
            str += lowercasestr;
        }
        if (Number.checked) {
            str += numberstr;
        }
        if (Symbols.checked) {
            str += symbolstr;
        }
        
        for (let i = 0; i < lengthN.value; i++) { // Use lengthN.value for length
            let index = Math.floor(Math.random() * str.length);
            password += str[index];
        }
        passinput.value = password;

        buttonText.style.display = 'inline'; // Show button text
        loadingSpinner.style.display = 'none'; // Hide loading spinner
    }, 1000); 
});

Copy.addEventListener('click', async () => {
    if (passinput.value === '') {
        alert('Please Generate First');
    } else {
        try {
            await navigator.clipboard.writeText(passinput.value);
            alert('Copied');
            passinput.value = '';
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
});
