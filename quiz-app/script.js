const quizData = [
    {
        question: '在英國，NHS的縮寫代表國家甚麼服務？',
        a: "人性",
        b: "健康",
        c: "榮譽",
        d: "家庭",
        correct: 'b'
    },
    {
        question: '200-哪個迪斯尼人物著名地在皇家舞會上留下了玻璃拖鞋？',
        a: '風中奇緣',
        b: '睡美人',
        c: '灰姑娘',
        d: '艾爾莎',
        correct: 'c'
    },
    {
        question: '300-在將托運行李從飛機運送到行李提取場的機場中，旋轉皮帶機械起了什麼名字？',
        a: '機庫',
        b: '終點站',
        c: '大堂',
        d: '輪播',
        correct: 'a'
    },
    {
        question: '500-以下哪個品牌主要與家用鎖的製造相關？',
        a: '菲利普斯',
        b: '飛飛',
        c: '丘布',
        d: '龍沙爾',
        correct: 'a'
    },
    {
        question: '1,000-錘子和鐮刀是哪種政治意識形態中最知名的標誌之一？',
        a: '共和主義',
        b: '共產主義',
        c: '保守主義',
        d: '自由主義',
        correct: 'b'
    }
]

let quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    const errMessage = document.getElementById('errMessage');

    if (!answer) {
        errMessage.innerHTML = '請選擇一個答案';
        return;
    } else {
        errMessage.innerHTML = '';
    }
    console.log(answer);
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (answer) {
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>你總共答對了 ${score}/ ${quizData.length} 題目</h2>

                            <button onclick="location.reload();">再試一次</button>`
        }
    }

})