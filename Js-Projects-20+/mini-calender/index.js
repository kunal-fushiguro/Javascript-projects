const Month = document.querySelector(".month");
const WeekDay = document.querySelector(".day");
const pDate = document.querySelector(".date");
const Year = document.querySelector(".year");
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
window.addEventListener('DOMContentLoaded',()=>{
    const date = new Date();
    // console.log(date);
    Year.textContent = date.getFullYear();
    Month.textContent = date.toLocaleDateString("en-US",{month:"long"});
    pDate.textContent = date.getDate();
    WeekDay.textContent = week[date.getDay()];
});
