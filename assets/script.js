var startButton = document.querySelector("start-btn");
var nextButton = document.querySelector("next-btn");
var resetButton = document.querySelector("reset-btn");
var questionContainerElement = document.querySelector("question-container");
var questionElement = document.querySelector("question");
var answerButtonElement = document.querySelector("answers");


let shuffledQuestions, currentQuestionIndex
// Created an event listener(callback) function for the start button



function startGame(){
  startButton.addEventListener("click", startGame)
  console.log("start")
  startButton.classList.add("hide")
  shuffledQuestions = question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setnextQuestion()
}

function setnextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answer.forEach(() => .5) }
     const button = document.createElement("button")
     button.innerText = answer.text,
     button.classList.add("btn")
     if (answers.correct) {
      button.dataset.correct = answers.correct
     }
     button.addEventListener("click", selectAnswer)
     answerButtonElement.appendChild(button)
{} 

function selectAnswer() {
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })  
}

function setStatusClass(element, correct) {

}

let question = [
  {
    question: "What is 2 + 2",
    answers: [
      { text: "4", correct: true },
      { text: "33", correct: false }
    ]
  }
]