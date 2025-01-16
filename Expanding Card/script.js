const Cards = document.querySelectorAll('.inner_container');

const removeClass = ()=>{
    Cards.forEach(card =>{
        card.classList.remove("active")

    })
}
const addClass = ()=>{
    Cards.forEach(card =>{
        card.addEventListener('click', ()=>{
            removeClass()
            card.classList.add("active")
        })
    })
}
addClass()