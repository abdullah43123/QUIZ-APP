function chooseLang() {
    window.location.href = "./questions.html"
}

function openTest(){
    window.location.href = "./allquestions.html"
}

function result(){
    window.location.href = "./result.html"
}

function exit(){
    window.location.href = "./index.html"
}

function home(){
    window.location.href = "./dashboard.html"
}

function signup(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var password = document.getElementById('password');

  localStorage.setItem("name",name.value);
  localStorage.setItem("email",email.value);
  localStorage.setItem("password",password.value);

  window.location.href = "./login.html"
}

function dashboard() {
  var getEmail = localStorage.getItem("email")
  var getPassword = localStorage.getItem("password")
  
  var emailIn = document.getElementById('email_in').value.trim()
  var passIn = document.getElementById('pass_In').value.trim()
  
  if(getEmail === emailIn && getPassword === passIn){
    window.location.href = "./dashboard.html"
  }else{
    console.log("Enter Correct Password");
    alert("Enter Correct Password")      
  }

}

var htmlQuiz = [
    {
      question: "HTML Stands for ?",
      option1: "Hypertext",
      option2: "Markup",
      option3: "HyperSuperText",
      option4: "HyperText Markup Language",
      answer: "HyperText Markup Language",
    },
    {
      question: "Which Element used to bold text in HTML?",
      option1: "img",
      option2: "h1",
      option3: "strong",
      option4: "p",
      answer: "strong",
    },
    {
      question: "Which Element used for Image in HTML?",
      option1: "span",
      option2: "div",
      option3: "image",
      option4: "img",
      answer: "img",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      option1: "link",
      option2: "a",
      option3: "hyperlink",
      option4: "url",
      answer: "a",
    },
    {
      question: "Which attribute is used to define the background color of a webpage in HTML?",
      option1: "bgcolor",
      option2: "color",
      option3: "background",
      option4: "style",
      answer: "bgcolor",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      option1: "break",
      option2: "br",
      option3: "hr",
      option4: "line",
      answer: "br",
    },
    // {
    //   question: "Which tag is used for creating an ordered list in HTML?",
    //   option1: "ul",
    //   option2: "li",
    //   option3: "ol",
    //   option4: "dl",
    //   answer: "ol",
    // },
    // {
    //   question: "Which tag is used to define a table in HTML?",
    //   option1: "table",
    //   option2: "tr",
    //   option3: "td",
    //   option4: "thead",
    //   answer: "table",
    // },
    // {
    //   question: "Which HTML tag is used to display a form in a webpage?",
    //   option1: "input",
    //   option2: "form",
    //   option3: "button",
    //   option4: "textarea",
    //   answer: "form",
    // },
    // {
    //   question:
    //     "What is the default value of the type attribute for an <input> tag in HTML?",
    //   option1: "text",
    //   option2: "password",
    //   option3: "checkbox",
    //   option4: "radio",
    //   answer: "text",
    // },
];


var question = document.getElementById("question");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var label4 = document.getElementById("label4");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var quizOptions = document.getElementsByName("quizOption");

// localStorage.setItem('question', question)
// localStorage.setItem('label1', label1)
// localStorage.setItem('label2', label2)
// localStorage.setItem('label3', label3)
// localStorage.setItem('label4', label4)
// localStorage.setItem('option1', option1)
// localStorage.setItem('option2', option2)
// localStorage.setItem('option3', option3)
// localStorage.setItem('option4', option4)

// var quizWindow = document.getElementById('quizWindow')
// var resultWindow = document.getElementById('resultWindow')
// console.log(resultWindow)
// console.log(quizWindow)

var totalQuestions = document.getElementById('totalQue');
var correctQueuestions = document.getElementById('correctQue');
var percentageSpace = document.getElementById('percentage');

var questionCount = 0;
var score = 0;

function renderQuestion(){
  // var getQuestions = localStorage.getItem('question')
  // var getLabel1 = localStorage.getItem('label1')
  // var getLabel2 = localStorage.getItem('label2')
  // var getLabel3 = localStorage.getItem('label3')
  // var getLabel4 = localStorage.getItem('label4')
  // var getOption1 = localStorage.getItem('option1')
  // var getOption2 = localStorage.getItem('option2')
  // var getOption3 = localStorage.getItem('option3')
  // var getOption4 = localStorage.getItem('option4')

  question.innerHTML = htmlQuiz[questionCount].question

  label1.innerHTML = htmlQuiz[questionCount].option1
  label2.innerHTML = htmlQuiz[questionCount].option2
  label3.innerHTML = htmlQuiz[questionCount].option3
  label4.innerHTML = htmlQuiz[questionCount].option4

  option1.value = htmlQuiz[questionCount].option1
  option2.value = htmlQuiz[questionCount].option2
  option3.value = htmlQuiz[questionCount].option3
  option4.value = htmlQuiz[questionCount].option4

}



function deSelect(){
  for(var i=0;i < quizOptions.length;i++){
    quizOptions[i].checked = false;
  }
}

function next() {
  var radioChecked = false;
  for (var i = 0; i < quizOptions.length; i++) {
    if (quizOptions[i].checked) {
      radioChecked = true;

      if (quizOptions[i].value === htmlQuiz[questionCount].answer) {
       
        
        score++;
        // console.log(score)
        localStorage.setItem('score', score);
      }
      // localStorage.setItem('totalQues', totalQuestions)
    }
  }

  if (!radioChecked) {
    // Swal.fire({
    //   title: "No Option Selected",
    //   text: "Please Select Any Option",
    //   icon: "error",
    // });
    alert("Hello")
  } else {

    if (questionCount < htmlQuiz.length - 1) {
      questionCount++;
      deSelect();
      renderQuestion();
    } else {

       showResult()
    }
  }
}

function showResult(){
  // quizWindow.style.display = 'none'


  // resultWindow.style.display = 'block'
  
  console.log(score);
  window.location.href = './result.html'
  console.log(score);
  var getScore = localStorage.getItem('score');
  console.log(getScore);
  
  // var getQues = localStorage.getItem('totalQues');

  var percentage = Math.round(score / htmlQuiz.length * 100)
  var resultStatus = ''
  if(percentage < 70) {
      resultStatus = ' You are Failed ! Better Luck Next Time'
      percentageSpace.className = 'circle_red'
  } else {
      resultStatus = 'Congratulations ! You are Passed'
      // announcement.className = 'greenText'
      percentageSpace.className = 'circle_green'

  }

  // announcement.innerHTML = resultStatus
  totalQuestions.innerHTML = htmlQuiz.length
  correctQueuestions.innerHTML = score 
  percentageSpace.innerHTML = `${percentage} %`
}

window.onload = renderQuestion();