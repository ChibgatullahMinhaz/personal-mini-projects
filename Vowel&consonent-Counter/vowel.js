const textarea = document.getElementById('textarea');
const button = document.getElementById('count');
const vowel = document.getElementById('vowel');
const consonant = document.getElementById('consonent');

button.addEventListener('click', () => {
    if (textarea.value === '') {
        alert('Please Enter Some Text');
    } else {
        const val = textarea.value.toLowerCase();
        let vowelCount = 0;
        let consonantCount = 0;
        for (let i = 0; i < val.length; i++) {
       if (val[i] === 'a' || val[i] === 'e' || val[i] === 'i' || val[i] === 'o' || val[i] === 'u') {
                vowelCount++;
            } else if (val[i] >= 'a' && val[i] <= 'z') {
                consonantCount++;
            }     
        }
        vowel.innerHTML = ` Vowel: ${vowelCount}`;
        consonant.innerHTML = ` Consonent: ${consonantCount}`;
    }
});
