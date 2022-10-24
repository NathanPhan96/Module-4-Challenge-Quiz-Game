const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var currentQuestion = {}
var questionCounter = 0;
var acceptingAnswer = false
var availableQuestions = [];
var timer;
var timerCount;
var score = 0;

var questions = [
    { 
        question: "If we declare a variable, let test = 1, then later, reassign, stating test = 2, what will happen?",
            choice1: "test will equal 1",
            choice2: "test will equal 2",
            choice3: "test will return true",
            choice4: "Javascript will return an error",
            answer: 2
    },
    {
      question: "If we declare a variable, const test = 1, then later, reassign, stating test = 2, what will happen?",
      choice1: "test will equal 1",
      choice2: "test will equal 2",
      choice3: "test will return true",
      choice4: "Javascript will return an error",
        answer: 1
    },
    {
        question: "What are the main differences between let and const?",
        choice1: "let can be reassigned, const cannot be reassigned",
        choice2: "let cannot be reassigned, const can be reassigned",
        choice3: "let is functional scope, while const is block scope",
        choice4: "let is block scope, while const is functional scope",
          answer: 1
      },
      {
        question: "The != and !== symbols both work the same for inequality comparisons:",
        choice1: "true",
        choice2: "false",
        choice3: "null",
        choice4: "NaN",
          answer: 2
      },
      {
        question: "For strict equality comparisons, we should use:",
        choice1: "=",
        choice2: "==",
        choice3: "===",
        choice4: "null",
          answer: 3
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<scripting>",
        choice2: "<js>",
        choice3: "<javascript>",
        choice4: "<script>",
          answer: 4
      },

      {
        question:
          "What is the correct syntax for referring to an external script called 'hi.js'?",
        choice1: "<script href='hi.js'>",
        choice2: "<script name='hi.js'>",
        choice3: "<script src='hi.js'>",
        choice4: "<script file='hi.js'>",
        answer: 3
      },
      {
        question: " How do you write 'I am hungry' in an alert box?",
        choice1: "msgBox('I am hungry');",
        choice2: "alertBox('I am hungry');",
        choice3: "msg('I am hungry');",
        choice4: "alert('I am hungry');",
        answer: 4
      }
    ];

    
const Correct_Points = 10;
const Max_Questions = 5;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions();
  };

  getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > Max_Questions) {
        localStorage.setItem('recentScore', score);
        return window.location.assign("../results.html")
    }
    
    questionCounter ++;
    const questionOrder = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionOrder];
    question.innerText = currentQuestion.question;
  
    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionOrder, 1);

    acceptingAnswer = true; 
  };

  choices.forEach(choice => {
    choice.addEventListener("click", e => {
     if (!acceptingAnswer) return;
     acceptingAnswer = false;
     const selectedChoice = e.target;
     const selectedAnswer = selectedChoice.dataset["number"];

     var valueToApply = "incorrect";
     if ( selectedAnswer == currentQuestion.answer){
       valueToApply = "correct";
     };
   
     if (valueToApply === "correct"){
        incrementScore(Correct_Points)
      }

      setTimeout( () => {
        getNewQuestions();
        }, 1000);
     });
    
     incrementScore = num => {
        score += num;
        console.log(score);
      };
   
    startGame();
   