const counters = document.querySelectorAll('.counter');
 console.log(counters)

 counters.forEach(counter =>{
    counter.innerHTML = 0;
    let targetValue =Number(counter.getAttribute('data-target'));
    console.log(typeof targetValue)
    let count = 0;
    function increment(){
        if(count < targetValue){
            count++
            counter.innerHTML = count;
            setInterval(increment, 1);
        }else{
            counter.innerHTML = targetValue;
        }
    }
    increment()
 })