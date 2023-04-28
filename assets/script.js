// Defined the startButton, nextButton, questionContainerElement, questionElement, and answerButtonsElement
// Due to having different elements that I wanted to function correctly in the code I opted to use const instead of let or var
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// The next block of code is have the questions appear in a random order and not go from top to bottom or bottom to top
// The currentQuestionIndex is placed to ensure that the shuffled questions are coming from the currentQuestionIndex
let shuffledQuestions, currentQuestionIndex
// Added event listener to call back the function of the startButton
startButton.addEventListener('click', startGame)
// Added event listener to call back the function of the next button
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
// Created a function tell the files what to do when the start button is clicked I am asking it to pick a random question and hide the rest of the question
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .6)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
// This block of code sets a function for selecting an answer in the quiz
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
// The following block of code is defining the questions and answers
// Created an array to place the questions and answers so that when the start button is clicked it is choosing from the specific questions below and does not return as undefined.
const questions = [
  {
    question: 'Which is not apart of the DOM tree?',
    answers: [
      { text: '<title>', correct: false },
      { text: '<dominoes>', correct: true },
      { text: '<href>', correct: false },
      { text: '<h1>', correct: false}
    ]
  },
  {
    question: 'What year was the first computer invented?',
    answers: [
      { text: '1822', correct: true },
      { text: '1981', correct: false },
      { text: '2010', correct: false },
      { text: '2035', correct: false }
    ]
  },
  {
    question: 'Who was the worlds first programmer?',
    answers: [
      { text: 'Grace Hopper', correct: false },
      { text: 'Steve Wozniak', correct: false },
      { text: 'Bill Gates', correct: false },
      { text: 'Ada Lovelace', correct: true }
    ]
  },
  {
    question: 'What was the first computer virus?',
    answers: [
      { text: 'roaches', correct: false },
      { text: 'virus', correct: false },
      { text: 'creeper', correct: true },
      { text: 'bugs', correct: false }
    ]
  },
  {
    question: 'How many program developers are there in the world?',
    answers: [
      { text: '500,000', correct: false },
      { text: '4.5 million', correct: false },
      { text: '26.9 million', correct: true },
      { text: '3 billion', correct: false}
    ]
  },
 {
  question: 'How many weeks have I been in coding bootcamp?',
  answers: [
    { text: '3 days', correct: false },
    { text: '1 month', correct: false },
    { text: '5 weeks', correct: true },
    { text: '3 months', correct: false }
  ]
 }
]