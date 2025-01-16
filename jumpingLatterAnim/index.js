const container = document.querySelectorAll("span");
console.log(container);



container.forEach(
    (letter) =>{
        letter.addEventListener('click', ()=>{
            letter.classList.toggle('active')
        })
    }
)