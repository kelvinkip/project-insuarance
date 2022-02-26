let displayQuestion = document.querySelector('.question');
let nextQuestion = document.querySelector('.nextQuestion');
let answersBox = document.querySelector('.answers-box');
let scoreDisplay = document.querySelector('.score');
let currentQUestion = 0;
let score = 0;
let quizBox = document.querySelector('.box');
var resetBtn = document.createElement('radio');
let finalSC = document.createElement('h1');
//questions
let questions = [{
    question: 'a: What is the short form of Hypertext Markup Language',
    answers: [{
        value: 'HTML',
        correct: true
      },
      {
        value: 'HMLT',
        correct: false
      },
      {
        value: 'MLHT',
        correct: false
      },
    ]

  },
  {
    question: 'b: What is the other name of javascript?',

    answers: [{
        value: 'ECMAscript',
        correct: false
      },
      {
        value: 'I do not know',
        correct: false
      },
      {
        value: 'Js',
        correct: true
      }


    ]

    },
  {
    question: 'c: Is C++ a low level language?',

    answers: [{
        value: 'Yes',
        correct: false
      },
      {
        value: 'No',
        correct: true
      },
      

    ]

  },
    {
    question: 'd: What is the best programming language to study in 2022?',

    answers: [{
        value: `Java`,
        correct: false
      },
      {
        value: `python`,
        correct: true
      },
      {
        value: `C++`,
        correct: false
      },
      {
        value: `Pascal`,
        correct: false
      },


    ]

  },
  {
    question: 'e: Is Big Data Next big thing in the future',

    answers: [{
        value: 'Yes',
        correct: true
      },
      
      {
        value: 'No',
        correct: false
      },


    ]


  }
];




//function get Answers
function getAnswers(currentQUestion) {
  
    if (currentQUestion >= questions.length) {
      currentQUestion = 0;
      console.log(currentQUestion);
      displayQuestion.remove();
      finalSC.innerText = ` Final score:${score}`;
      finalSC.classList.add('question');
      quizBox.append(finalSC);
      nextQuestion.remove();
      answersBox.remove();
      scoreDisplay.remove();
  
      resetBtn.innerText = 'One more time?'
      resetBtn.classList.add('resetBtn');
      document.querySelector('.box').append(resetBtn)
  
  
  
  
    }
  
    removeLastQuestion();
    displayQuestion.innerText = questions[currentQUestion].question;
    questions[currentQUestion].answers.forEach((answer) => {
        const btn = document.createElement('button');
        btn.classList.add('answer')
        if (answer.correct) {
          btn.classList.add('true');
  
        }
        btn.innerText = answer.value;
        answersBox.appendChild(btn);
        btn.onclick = checkCorrectAnswer;
  
  
  
      }
  
    )
  
  }
  
  
  
  //fucntion remove Last Question
  function removeLastQuestion() {
    while (answersBox.firstChild) {
      answersBox.removeChild(answersBox.lastChild);
    }
  }
  
  //cheking corect Anaswer
  function checkCorrectAnswer(e) {
  
    let ans = document.querySelectorAll('.answer');
  
    if (e.target.matches('.answer')) {
      ans.forEach((ans) => ans.classList.remove('orange'))
      this.classList.add('orange');
  
  
    } else {
  
  
    }
    if (e.target.matches('.true')) {
      score += 20;
  
    } else {
      score -= 20;
    }
   
  }
  
  
  
  
  //nextQUestion btn
  nextQuestion.addEventListener('click', () => {
  
  
    console.log(score)
    nextQuestion.innerText = 'Next Question'
    getAnswers(currentQUestion);
    currentQUestion += 1;
  
  
  });
  
  resetBtn.addEventListener('click', () => {
  score=0;
  currentQUestion=0;
    finalSC.remove();
    resetBtn.remove();
      scoreDisplay.style.display = 'flex'
    scoreDisplay.innerText = score;
    quizBox.append(displayQuestion);
    quizBox.append(answersBox);
    quizBox.append(nextQuestion);
  
  
  
  
  
  });