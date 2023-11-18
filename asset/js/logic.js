var mainEl = document.getElementById("main")
var timerElement = document.getElementById("timer")
var buttonOne = document.getElementById("button1")
var buttonTwo = document.getElementById("button2")
var buttonThree = document.getElementById("button3")
var buttonFour = document.getElementById("button4")
var question = document.getElementById('questions')

buttonOne.addEventListener('click', checkAnswer)
buttonTwo.addEventListener('click', checkAnswer)
buttonThree.addEventListener('click', checkAnswer)
buttonFour.addEventListener('click', checkAnswer)


mainEl.style.display = "none"

var startButton = document.querySelector('#start')
startButton.addEventListener('click', function () {
    mainEl.style.display = "block"
    startButton.style.display = "none"
    startTimer()
    displayQuestion()

})



var currentQuestion = 0;
var score = 0;
var timerObject;
var timerCounter = 50;