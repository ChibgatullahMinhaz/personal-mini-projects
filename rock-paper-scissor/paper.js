const your_score = document.querySelector('#your_score');
const computer_score = document.querySelector('#computer_score');
const your_shs = document.getElementById('your_shs');
const computer_chs = document.getElementById('computer_chs');
let your_choice = "";
let computer_choice = "";
const buttons = document.querySelectorAll('button');

function computerChoice(){
    const choices = ['✊', '✋', '✌'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        your_choice = button.innerText;
        computer_choice = computerChoice();
        const result = findWinner();
        if(result == "You Win!!!"){
            your_score.innerText = parseInt(your_score.innerText) + 1;
            alert("You Win!!!")
        }else if(result == "You Loose!!!"){
            computer_score.innerText = parseInt(computer_score.innerText) + 1;
           alert("You Loose!!!")
        }else if(result == "It's Tie!!!"){
            your_score.innerText = parseInt(your_score.innerText) + 1;
            computer_score.innerText = parseInt(computer_score.innerText) + 1;
            alert("It's Tie!!!")
        }
        computer_chs.innerText= computerChoice();
        your_shs.innerText= button.innerText;
    });
});

function findWinner(){
    let result = "";
    if( your_choice == computer_choice){
        result = "It's Tie!!!";
    }else if ( your_choice == "✊" && (computer_choice == "✋" || computer_choice == "✌")){
        result = "You Win!!!";
    }else if ( your_choice == "✋" &&(computer_choice == "✌" || computer_choice == "✊")){
        result = "You Loose!!!";
    }else if ( your_choice == "✌" && computer_choice == "✊"){
        result = "You Loose!!!";
    } else if ( your_choice == "✌" && computer_choice == "✋"){
        result = "You Win!!!";
    }
    return result;
}