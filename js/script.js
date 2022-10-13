// Letter H stands for hours
let clockH = document.querySelector(".clock-hours");
let clockM = document.querySelector(".clock-minutes");
let clockS = document.querySelector(".clock-seconds");
let countdownDays = document.querySelector(".countdown-days");
let countdownHours = document.querySelector(".countdown-hours");
let countdownMinutes = document.querySelector(".countdown-minutes");
let countdownSeconds = document.querySelector(".countdown-seconds");
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let finalDate = new Date("Dec 31, 2022 00:00:00");

let startClock = () => {
  updateTime();
  updateCountdown();
  setInterval(() => {
    updateTime();
    updateCountdown();
  }, 1000);
};

let updateTime = () => {
  let now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  clockH.style.transform = `rotate(${(360 / 12) * hours}deg)`;
  clockM.style.transform = `rotate(${(360 / 60) * minutes}deg)`;
  clockS.style.transform = `rotate(${(360 / 60) * seconds}deg)`;
};

let updateCountdown = () => {
  let now = new Date();
  let diff = finalDate - now;
  let diffObj = convertMillisToDHMS(diff);
  countdownDays.textContent =
    diffObj.days >= 10 ? diffObj.days : "0" + diffObj.days;
  countdownHours.textContent =
    diffObj.hours >= 10 ? diffObj.hours : "0" + diffObj.hours;
  countdownMinutes.textContent =
    diffObj.minutes >= 10 ? diffObj.minutes : "0" + diffObj.minutes;
  countdownSeconds.textContent =
    diffObj.seconds >= 10 ? diffObj.seconds : "0" + diffObj.seconds;
};

//convert milliseconds to days, hours, minutes, and seconds
let convertMillisToDHMS = (millis) => {
  let days = Math.floor(millis / day);
  let hours = Math.floor((millis % day) / hour);
  let minutes = Math.floor((millis % hour) / minute);
  let seconds = Math.floor((millis % minute) / second);
  return { days, hours, minutes, seconds };
};
startClock();
