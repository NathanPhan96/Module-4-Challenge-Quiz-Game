var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var highScores = document.querySelector(".High-Score");

var timer;
var timerCount;
var highScores;

const quizContainer = document.getElementsByClassName("Quiz-Area");
const highScoresContainer = document.getElementsByClassName("High-Score");

const myQuestions = [
    { 
        question: "If we declare a variable, let test = 1, then later, reassign, stating test = 2, what will happen?",
        answers: {
            a: "test will equal 1",
            b: "test will equal 2",
            c: "test will return true",
            d: "Javascript will return an error"
        },
        correctAnswer: "b"
    },
    {
      question: "If we declare a variable, const test = 1, then later, reassign, stating test = 2, what will happen?",
      answers: {
        a: "test will equal 1",
        b: "test will equal 2",
        c: "test will return true",
        d: "Javascript will return an error"
    },
    correctAnswer: "a"
    },
    {
        question: "What are the main differences between let and const?",
        answers: {
          a: "let can be reassigned, const cannot be reassigned",
          b: "let cannot be reassigned, const can be reassigned",
          c: "let is functional scope, while const is block scope",
          d: "let is block scope, while const is functional scope"
      },
      correctAnswer: "a"
      },
      {
        question: "The != and !== symbols both work the same for inequality comparisons:",
        answers: {
          a: "true",
          b: "false",
    
      },
      correctAnswer: "b"
      },
      {
        question: "For strict equality comparisons, we should use:",
        answers: {
          a: "=",
          b: "==",
          c: "===",
      },
      correctAnswer: "c"
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
          a: "<scripting>",
          b: "<js>",
          c: "<javascript>",
          d: "<script>"
      },
      correctAnswer: "d"
      },
    ];