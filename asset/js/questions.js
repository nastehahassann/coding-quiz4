
var mainEl = document.getElementById("main");
var timerElement = document.getElementById("timer");
var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var buttonThree = document.getElementById("button3");
var buttonFour = document.getElementById("button4");
var question = document.getElementById('questions');


buttonOne.addEventListener('click', checkAnswer);
buttonTwo.addEventListener('click', checkAnswer);
buttonThree.addEventListener('click', checkAnswer);
buttonFour.addEventListener('click', checkAnswer);


mainEl.style.display = "none";


var startButton = document.querySelector('#start');
startButton.addEventListener('click', function () {
    mainEl.style.display = "block";
    startButton.style.display = "none";
    startTimer();
    displayQuestion();
});


var questionDB = [
    {
        question: "Which HTML tag is used to define the largest heading?",
        option1: "h1",
        option2: "heading",
        option3: "head",
        option4: "header",
        answer: "h1"
    },
    {
        question: "How many basic arithmetic (+,-,*) is most commonly used in day to day programming languages?",
        option1: 1,
        option2: 2,
        option3: 3,
        option4: 4,
        answer: 4,
    },
    {
        question: "What is the name used for a variable when coding?",
        option1: "Function",
        option2: "Object",
        option3: "Method ",
        option4: "Var",
        answer: "Var",
    }
];


var currentQuestion = 0;
var score = 0;
var timerObject;
var timerCounter = 50;


function startTimer() {
    timerObject = setInterval(function () {
        timerElement.innerText = "Time Left: " + timerCounter;
        if (timerCounter > 0) {
            timerCounter--;
        }
    }, 1000);
}


function displayQuestion() {
    question.innerText = questionDB[currentQuestion].question;
    buttonOne.innerText = questionDB[currentQuestion].option1;
    buttonTwo.innerText = questionDB[currentQuestion].option2;
    buttonThree.innerText = questionDB[currentQuestion].option3;
    buttonFour.innerText = questionDB[currentQuestion].option4;
}


function checkAnswer(event) {
    var specific = event.target.innerText;
    if (specific == questionDB[currentQuestion].answer) {
        score += 5;
    } else {
        timerCounter -= 5;
    }
    if (currentQuestion < questionDB.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {

        showResults();
    }
}

function showResults() {
    mainEl.style.display = "none";
    var resultElement = document.createElement('p');
    resultElement.textContent = "Quiz Completed!"
    document.body.appendChild(resultElement);
}
