const quizData = [

    {
        question: 'If the first president of Kenya was Kenyatta, who was the first president of Zambia?',
        a: 'Zambiatta',
        b: 'George Bush',
        c: 'Kenneth David Kaunda',
        d: 'Robert Mugabe',
        correct: 'c'

    },
    {
        question: 'What is the most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'

    },
    {
        question: 'Who was the first president of US?',
        a: 'George Washington',
        b: 'Donald Trump',
        c: 'Barrack Obama',
        d: 'Joe Biden',
        correct: 'a'

    },
    {
        question: 'What does HTML stand for ?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason  Object Notation',
        d: 'Helicopters Terminals Motoboats Lamborginis',
        correct: 'a'

    },
    {
        question: 'What year was Javascript Launched ?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'

    }

]
const quiz = document.getElementById('quiz');
const answerELs = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let answer = undefined;
//call every time we submit
loadQuiz();


function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    // console.log(currentQuizData);
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;


}


function getSelected() {

    answerELs.forEach((answerEL) => {
        if (answerEL.checked) {

            answer = answerEL.id;
        }
    });


    return answer;

}


function deselectAnswers() {

    answerELs.forEach((answerEL) => {
        answerEL.checked = false;
    });


}

submitBtn.addEventListener('click', () => {

    // currentQuiz ++;
    //check to see answer
    answer = getSelected();
    //console.log(answer);
    //if we have an answer load next
    if (answer) {

        currentQuizAnswer = quizData[currentQuiz];
        if (answer === currentQuizAnswer.correct) {

            score++;
        }

        //console.log(score);
        //console.log(quizData.length);
        currentQuiz++;

        if (currentQuiz < quizData.length) {

            loadQuiz();
        } else {
            //show result
            let star = undefined;
            for (var i = 1; i <= score; i++) {
                star = ("&#129321 ".repeat(i));
            }
            if (score == 0) {

                star = `<h2> You got nothing  &#128557. Click to Try Again </h2> `;
            } else {

                star = ` <h2> Rated  ${star}  champion.Click to Try again </h2>`;
            }



            if (score != quizData.length) {

                quiz.innerHTML = `<h2> You correctly answered  ${score} / ${quizData.length}  questions.</h2>
                <button onclick="location.reload()">
                ${star} </button> `

            } else {

                quiz.innerHTML = `<h2> You correctly answered  ${score} / ${quizData.length}  questions.</h2>
                <button onclick="location.reload()">
                 ${star} </button>`
            }



        }
    }









})