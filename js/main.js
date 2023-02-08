const year = document.querySelector('#year');

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds')
const preloader = document.querySelector("#preloader");
const countdown = document.querySelector("#countdown")


const currentYear = new Date().getFullYear();// получение текущего года
const nextYear = new Date(`${currentYear+1}`)//получение слудуещего года

year.innerHTML = currentYear + 1;

function updateCountDown (){
    const currentTime = new Date();// получаем текущее время
    const diff = nextYear - currentTime; // узнаем сколько осталось до нового года в милисекундах

    const daysLeft = Math.floor(diff/1000/60/60/24); // узнаем сколько осталось до нового года в днях
    const hoursLeft = Math.floor(diff/1000/60/60)%24;// узнаем сколько осталось до нового года в часах
    const minutesLeft = Math.floor(diff/1000/60)%60;// узнаем сколько осталось до нового года в минутах
    const secondsLeft = Math.floor(diff/1000)%60// узнаем сколько осталось до нового года в секундах

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft ;
    minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}
setInterval(updateCountDown,1000);

setTimeout(function () {
    countdown.style.display = "flex";
    preloader.remove();
    
},1000)
