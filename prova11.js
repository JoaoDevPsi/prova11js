const questions = [
    {
        question: "Quem foi que gritou \"independencia ou morte\"",
        options: ["Dom Pedro II", "Tiririca", "Dom Pedro I", "Zacarias"],
        correctAnswer: 2
    },
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Paris", "Berlim", "Madrid"],
        correctAnswer: 1
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        options: ["Vênus", "Marte", "Júpiter", "Saturno"],
        correctAnswer: 2
    },
    {
        question: "Qual é a atual capital do Brasil?",
        options: ["Salvador", "Rio de Janeiro", "São Paulo", "Brasília"],
        correctAnswer: 3
    },
    {
        question: "Qual é o maior mamífero terrestre?",
        options: ["Elefante africano", "Girafa", "Rinoceronte", "Baleia azul"],
        correctAnswer: 0
    }
];


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    shuffleArray(questions); 
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', () => checkAnswer(index));
        li.appendChild(button);
        optionsElement.appendChild(li);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        resultElement.textContent = "Acertou!";
        score++;
    } else {
        resultElement.textContent = "Errou!";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
        nextButton.textContent = 'Reiniciar';
        nextButton.addEventListener('click', () => {
            score = 0;
            currentQuestionIndex = 0;
            showQuestion();
            nextButton.textContent = 'Próxima';
        });
    }
}

showQuestion();