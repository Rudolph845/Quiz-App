const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let countRightAnswers = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    countRightAnswers = 0
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
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(answer) {
    const selectedButton = answer.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    if (selectedButton.dataset = correct) {
        countRightAnswers++;
        }
    }   else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
}
    document.getElementById('score').innerHTML = countRightAnswers
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

const questions = [
    {
        question: 'Who would be the best candidate for this position?',
        answers: [
            {text: 'Rudolph', correct: true },
            {text: 'A puppy', correct: false },
            {text: 'Someone else', correct: false },
            {text: 'Not Rudolph', correct: false }
        ]
    },
    {
        question: 'What is Rudolph\'s favorite sport? ',
        answers: [
            {text: 'Tennis', correct: false },
            {text: 'Sumo Wrestling', correct: false },
            {text: 'Curling', correct: false },
            {text: 'MMA', correct: true }
        ]
    },
    {
        question: 'Does Rudolph love the outdoors?',
        answers: [
            {text: 'Yes', correct: true },
            {text: 'No', correct: false }
        ]
    },
    {
        question: 'Does Rudolph like snow?',
        answers: [
            {text: 'Yes', correct: false },
            {text: 'No', correct: true }
        ]
    },
    {
        question: 'What is Rudolph\s favorite color?',
        answers: [
            {text: 'Blue', correct: false },
            {text: 'Purple', correct: true },
            {text: 'Orange', correct: false },
            {text: 'Red', correct: false }
        ]
    }
]