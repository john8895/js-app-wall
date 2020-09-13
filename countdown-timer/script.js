const fullYearOld = '15 Aug 2021';
const bornDay = '15 Aug 2020';

function countdown() {
    const fullYearOldDate = new Date(fullYearOld);
    const currentDate = new Date();
    const daysEl = document.querySelector('#days')
    const hoursEl = document.querySelector('#hours')
    const minsEl = document.querySelector('#mins')
    const secondsEl = document.querySelector('#seconds')

    // timestamp 為毫秒(ms)，1s = 1000ms ，所以 / 1000 = 秒
    const totalSeconds = (fullYearOldDate - currentDate) / 1000;

    // Math.floor 取最大整數
    // 時間公式如下：
    // 1min = 60s ; 60min(1hr) = 3600s
    // totalSeconds / 3600 = hr / 24 = days
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

// 個位數補 0
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function currentYearOldCount() {
    const bornDayDate = new Date(bornDay);
    const currentDate = new Date();
    const daysEl = document.querySelector('#days_cur');
    const monthEl = document.querySelector('#month_cur');
    const weekEl = document.querySelector('#week_cur');
    const yearEl = document.querySelector('#year_cur');

    const totalYearOldSeconds = (currentDate - bornDayDate) / 1000;

    // todo: 算出月、年
    const days = Math.floor(totalYearOldSeconds / 3600 / 24);
    const month = Math.floor(totalYearOldSeconds / 3600 / 24 / 30);
    const week = Math.floor(totalYearOldSeconds / 3600 / 24 / 7);
    const year = Math.floor(totalYearOldSeconds / 3600 / 24 / 365);

    daysEl.innerHTML = formatTime(days);
    monthEl.innerHTML = formatTime(month);
    weekEl.innerHTML = formatTime(week);
    yearEl.innerHTML = formatTime(year);
}

countdown();
setInterval(countdown, 1000);

currentYearOldCount();