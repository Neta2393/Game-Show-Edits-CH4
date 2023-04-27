const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-button")
const timerElement = document.querySelector(".timer-count")

let randomQuestions, currentQuestionIndex
// Created an event listener(callback) function for the start button
startButton.addEventListener("click", startGame)


function startGame(){
  console.log("start")
  startButton.classList.add("hide")
  randomQuestions = question.sort(() => Math.random() - 0)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setnextQuestion()
}

function setnextQuestion(){
  showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
     const button = document.createElement("button")
     button.innerText = answer.text
     button.classList.add("btn")
     if (answer.correct) {
      button.dataset.correct = answer.correct
     }
  })

}

function selectAnswer() {

}

const question = [
  {
    question: "what is the dogs name on Scooby Doo?",
    answers: [
      { text: "4", correct: true },
      { text: "33", correct: false }
    ]
  }
]


function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}