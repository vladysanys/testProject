import questions from "./questions.js";
const question = document.querySelector(".text-question");
const answersArray = document.querySelectorAll(".text-answer");
const buttonsBox = document.querySelector(".buttons");
const finnalyBox = document.querySelector(".finaly-box");
const counter = document.querySelector(".counter");
const startButton = document.querySelector(".start-button");
const startState = document.querySelector(".start-state");
const firstSection = document.querySelector(".first-section");
const cartBox = document.querySelector(".cart-box");
const mainBox = document.querySelector(".box");
const answers = document.querySelectorAll(".answer");
const startQuestionText = document.querySelector(".start-question-text");
const trueScore = document.querySelector(".true-answers_span");
const falseScore = document.querySelector(".false-answers_span");
const valutionScore = document.querySelector(".valution-text_span");
const boxInput = document.querySelector(".box-input");
const circleRate = document.querySelector(".circle-rate");
const adminButton = document.querySelector(".admin-button");
const adminBox = document.querySelector(".admin-box");
const adminName = document.querySelector(".admin-name_input");
const adminPassword = document.querySelector(".admin-password_input");
const adminSignIn = document.querySelector(".sign-in");
const adminHref = document.querySelector(".admin-href");
const adminPng = document.querySelector(".admin-png");
const adminText = document.querySelector(".admin-text");
// const input = document.querySelector(".input");
let questionNumberArray = [];
for (let i = 0; questionNumberArray.length < questions.length; i++) {
  let number = Math.floor(Math.random() * questions.length);
  if (questionNumberArray.indexOf(number) == -1) {
    questionNumberArray.push(number);
  }
}
let sum = -1;
let inputSum = false;
let trueAnwers = 0;
let counterRate = 0;
let value = false;
let rate = Math.floor(100 / questions.length);
let input = document.createElement("input");
let adminBoxOpen = false;
let quectionsBox = false;
let startStateOpen = false;
let finnalyBoxOpen = false;
const finnaly = () => {
  value = true;
  finnalyBoxOpen = true;
  adminBoxOpen = false;
  quectionsBox = false;
  startStateOpen = false;
  finnalyBox.classList.toggle("close");
  firstSection.classList.add("close");
  answers.forEach((item, i, array) => {
    answers[i].classList.add("close");
  });
  if (rate * trueAnwers < 50) {
    valutionScore.textContent = "2";
  } else if (rate * trueAnwers >= 50 && rate * trueAnwers <= 70) {
    valutionScore.textContent = "3";
  } else if (rate * trueAnwers >= 70 && rate * trueAnwers <= 90) {
    valutionScore.textContent = "4";
  } else if (rate * trueAnwers >= 90 && rate * trueAnwers <= 100) {
    valutionScore.textContent = "5";
  }
  trueScore.textContent = `${trueAnwers}`;
  falseScore.textContent = `${questions.length - trueAnwers}`;
  if (value) {
    if (trueAnwers == questions.length) {
      rate = 100;
    } else {
      rate = trueAnwers *= rate;
    }
    setInterval(() => {
      counter.textContent = 0 + counterRate + "%";
      if (counterRate !== rate && trueAnwers !== 0) {
        counterRate++;
      }
    }, 10);
    let sumRate = rate * 1.8;
    setTimeout(() => {
      circleRate.style.transform = `rotate(${sumRate}deg)`;
    }, 10);
  }
};
function questionGen() {
  sum++;
  console.log(questions[questionNumberArray[sum]].trueAnswer);
  finnalyBoxOpen = false;
  adminBoxOpen = false;
  quectionsBox = true;
  startStateOpen = false;
  if (questions[questionNumberArray[sum]].answer[0] == undefined) {
    question.textContent = questions[questionNumberArray[sum]].name;
    input.className = "input";
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Введите ответ");
    input.value = "";
    boxInput.append(input);
    console.log(input);
    buttonsBox.classList.add("close");
    boxInput.classList.remove("close");
    firstSection.style.height = "190px";
  } else {
    buttonsBox.classList.remove("close");
    boxInput.classList.add("close");
    question.textContent = questions[questionNumberArray[sum]].name;
    answersArray.forEach((item, index, array) => {
      answersArray[index].textContent =
        questions[questionNumberArray[sum]].answer[index];
    });
  }
}

startButton.addEventListener("click", (event) => {
  const { target } = event;
  if (target.className == "start-text") {
    questionGen();
    firstSection.classList.remove("close");
    cartBox.classList.add("scale-down-ver-top");
    startQuestionText.classList.add("animation-text");
    setTimeout(() => {
      cartBox.classList.add("close");
      startState.classList.add("close");
    }, 800);
  }
});
buttonsBox.addEventListener("click", (event) => {
  const { target } = event;
  if (event.clientX > 100) {
    if (target.textContent == questions[questionNumberArray[sum]].trueAnswer) {
      trueAnwers++;
    } else {
    }
    if (sum == questions.length - 1) {
      finnaly();
    } else {
      questionGen();
    }
  }
});
input.addEventListener("keydown", ({ keyCode }) => {
  let valueInput = input.value.toLowerCase().trim();
  if (Boolean(valueInput) == true && keyCode == 13) {
    console.log(valueInput);
    if (valueInput == questions[questionNumberArray[sum]].trueAnswer) {
      trueAnwers++;
    }
  }
  if (
    Boolean(valueInput) == true &&
    keyCode == 13 &&
    sum == questions.length - 1
  ) {
    finnaly();
  } else if (keyCode == 13 && Boolean(valueInput) == true) {
    questionGen();
  }
  if (Boolean(valueInput) == false && keyCode == 13) {
    input.style.border = "2px solid #db5858";
  }
  if (Boolean(valueInput) == true) {
    input.style.border = "2px solid #9797bd";
  }
});
adminButton.addEventListener("click", (event) => {
  adminBox.classList.toggle("close");
  adminPng.classList.toggle("close");
  adminButton.classList.toggle("animation-admin");
  adminText.classList.toggle("close");
});
adminPng.addEventListener("click", (event) => {
  adminBox.classList.toggle("close");
  adminPng.classList.toggle("close");
  adminButton.classList.toggle("animation-admin");
  adminText.classList.toggle("close");
});
adminSignIn.addEventListener("click", (event) => {
  if (adminName.value == "admin" && adminPassword.value == "oralcumshot") {
    window.location.href = "http://127.0.0.1:5500/pages/admin.html";
  }
});
