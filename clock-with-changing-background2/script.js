// https://thecodingpie.com/post/how-to-create-an-analog-clock-using-html-css-and-javascript/

let hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second')

rotate();
function rotate() {
    const currentDate = new Date()

    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const secondsFraction = seconds / 60  // 一分六十秒，得到秒數的分數
    const minutesFraction = (secondsFraction + minutes) / 60
    const hoursFraction = (minutesFraction + hours) / 12
    // rotating fraction --> how many fraction to rotate for each hand.
    // 時針、分針都跟秒針一樣是一小格一小格走，而不是一次走一個小時，所以這邊要減慢行走的速度
    // 以減慢相對於彼此的手的速度
    // const secondsFraction = seconds / 60;
    // const minutesFraction = minutes / 60;
    // const hoursFraction = hours / 12;

    // 計算旋轉度數 360 圓圈
    const secondsRotate = secondsFraction * 360
    const minutesRotate = minutesFraction * 360
    const hoursRotate = hoursFraction * 360

    // apply the rotate style to each element
    // use backtick `` instead of single quotes ''

    secondHand.style.transform = `rotate(${secondsRotate}deg)`
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`
    hourHand.style.transform = `rotate(${hoursRotate}deg)`

}

// for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
setInterval(rotate, 1000)