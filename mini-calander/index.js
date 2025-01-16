const month = document.querySelector(".month")
const weekday = document.querySelector(".weekday")
const day = document.querySelector(".day")
const year = document.querySelector(".year")
const Hours = document.querySelector(".Hours")
const minit = document.querySelector(".minits")
const seconds = document.querySelector(".seconds")


window.addEventListener("DOMContentLoaded",()=>{
    const date = new Date();
    function convertToBengaliNumber(number) {
        const bengaliNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return number.toString().split('').map(digit => bengaliNumbers[digit]).join('');
    }
    day.textContent =  convertToBengaliNumber(date.getDate());
   year.textContent =  convertToBengaliNumber(date.getFullYear());
    month.textContent = date.toLocaleDateString("bn-BD",{month:"long"})
    weekday.textContent = date.toLocaleDateString("bn-BD",{weekday:"long"})

})
