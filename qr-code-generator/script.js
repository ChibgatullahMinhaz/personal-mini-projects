const qrinput = document.getElementById('qr-inpput')
const qrimg = document.getElementById('qr-img')
const qrbutton=document.getElementById('qr-button')

qrbutton.addEventListener('click', ()=>{
    const inputValu = qrinput.value;
    if(!inputValu){
        alert('please enter a valid URL')
        return;
    }else{
        qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValu}`;
        qrimg.alt=`QR code for ${inputValu}`
    }
})