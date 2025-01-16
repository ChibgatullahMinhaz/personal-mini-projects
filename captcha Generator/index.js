const refresh = document.getElementById('refresh');
const mathch = document.getElementById('mathch');
const input = document.getElementById('cap_value');
const generate = document.getElementById('generate');
let randomCaptcha = ""; // Declare randomCaptcha outside the function

function getRandomN(){
    const captchaStr = "a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
    const captchaArr = captchaStr.split(" "); // Split the string into an array of characters
    randomCaptcha = ""; // Reset randomCaptcha each time
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * captchaArr.length); // Generate a random index
        randomCaptcha += captchaArr[randomIndex]; // Add the random character to the string
    }
    generate.innerHTML = randomCaptcha;
}

refresh.addEventListener('click', ()=>{
    getRandomN();
});

mathch.addEventListener('click', ()=>{
    if(input.value === ''){
        alert('Enter The Captcha ');
    } else if(input.value === randomCaptcha){
        alert('Match');
    }else {
        alert('not Match')
    }

});
