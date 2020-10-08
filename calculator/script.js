const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

buttons.forEach(button => {
    button.addEventListener('click', calculator)
})

// function calculator(event) {
//     const clickedButtonValue = event.target.value
//
//     if(clickedButtonValue === '='){
//         if(display.value != ''){
//             display.value = eval(display.value)
//         }
//     } else if(clickedButtonValue === 'C'){
//         display.value =''
//     } else {
//         display.value += clickedButtonValue;
//     }
// }
// 嘗試添加更多按鈕，例如退格鍵，以清除最後一個字符。
// 或添加更多的運算符，例如餘數運算符（％）。只是玩...

function calculator(e) {
    const clickedBtnValue = e.target.value
    if (clickedBtnValue === '=') {  // press '='
        if(display.value != ''){
            display.value = eval(display.value)  // calculator display value
        }
    }else if (clickedBtnValue === 'C'){
        display.value = ''  // display value empty
    } else {
        display.value += clickedBtnValue  // calculator
    }
}