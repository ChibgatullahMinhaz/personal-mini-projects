const input = document.getElementById('input');
const submit = document.getElementById('submit');
const imgContainer = document.getElementById('img-container');


submit.addEventListener("click", ()=>{
    let count = input.value;
    if(count < 1 || count > 500){
        alert('Please enter a number between 1 and 500');
        return
    }else{
        imgContainer.innerHTML = '';
        for (let index = 0; index < count; index++) {
            let img = document.createElement("img");
            img.src =  `https://picsum.photos/200/300/?random/${index}`;
            imgContainer.appendChild(img)
        }

    }
})