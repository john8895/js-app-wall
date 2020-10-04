const date = new Date();
// 			year = date.getFullYear(),
// 			month = date.getMonth(),
// 			day = date.getUTCDate(),
// 			months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const momentDate = moment().format('MM dd yyyy');

document.querySelector('.dayMonth').innerHTML = moment().format('MMM Do');
document.querySelector('.year').innerHTML = moment().format('yyyy');

// document.querySelector('.dayMonth').innerHTML = months[month] + ' ' + day;
// document.querySelector('.year').innerHTML = year;

let hour = document.querySelector('.hours');
let minute = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let digital = document.getElementsByClassName('digital-time');
let daytime = document.querySelector('.dd');
let colorDiv = document.getElementById('color-bkg');
let analog = document.getElementsByClassName('clock');

const time = () => {
    let d = new Date(),
        ds = d.getSeconds(),
        dm = d.getMinutes(),
        dh = d.getHours(),
        as = ds * 6,
        am = dm * 6 + (ds / 60),
        ah = dh % 12 / 12 * 360 + (dm / 12),
        dd = 'AM';

    hour.style.transform = "rotate("+ah+"deg)";
    minute.style.transform = "rotate("+am+"deg)";
    seconds.style.transform = "rotate("+as+"deg)";

    // dd = dh >= 12 ? 'PM' : 'AM';
    // dm = dm < 10 ? '0' + dm : dm;
    // ds = ds < 10 ? '0' + ds : ds;
    // dh = dh >= 12 ? dh - 12 : dh;
    // digital.innerHTML = dh +':'+ dm +' '+ dd;
    digital[0].innerHTML = moment().format('LT');

    return getBackground();
}

const getBackground = () => {
    let color;
    let currentTime = moment(),
        startTime = moment('06:30 am', 'hh:mm a'),
        endTime = moment('09:00 pm', 'hh:mm a');
    let amIBetween = currentTime.isBetween(startTime , endTime);  // Boolean

    color = amIBetween ? '144, 224, 239' : '70, 70, 85';
    let newColor = `rgba(${color}, 0.75)`;
    return (colorDiv.style.backgroundColor = newColor);
    // return (colorDiv.classList.add('daytime'), digital[0].classList.add('daytime'), analog[0].classList.add('daytime'), document.getElementsByClassName('dayMonth')[0].classList.add('dayMonth-light'));
}

const clock = setInterval(time, 1000);  // time function
time();