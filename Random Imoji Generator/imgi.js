// finding elements
const clickme = document.querySelector('#btn')
const imojiName = document.querySelector("#imojiName")
const group = document.getElementById('group');
const subGroup = document.getElementById('subGroup');
const slug = document.getElementById('slug');
const codePoint = document.getElementById('codePoint');


const url = "https://emoji-api.com/emojis?access_key=8bd7c2327a663e6d1b92a245cc9b14a0b56f7bf6";

function getRandomNumber(n){
    return Math.floor(Math.random()*n)
}

// fetch
const fetchDate = async()=>{
    let getData = await fetch(url)
    getData = await getData.json()
    console.log(getData)
    const randomN = getRandomNumber(getData.length)
    const character= getData[randomN].character
    const uniCode = getData[randomN].unicodeName
    const group = getData[randomN].group
    const subGroupim = getData[randomN].subGroup
    const slugim = getData[randomN].slug
    const codePoint = getData[randomN].codePoint
    clickme.textContent = character
    imojiName.textContent = uniCode
    group.textContent = group
    subGroup.innerText = subGroupim
    slug.textContent = slug
    codePoint.textContent = codePoint

}
const randomImageGenerate = ()=>{
    clickme.addEventListener("click",async ()=> {
        fetchDate()
        });
}
function init (){
randomImageGenerate()
}
init()