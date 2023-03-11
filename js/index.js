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
let questionNumberArray = [];
for (let i = 0; questionNumberArray.length < questions.length; i++) {
  let number = Math.floor(Math.random() * questions.length);
  if (questionNumberArray.indexOf(number) == -1) {
    questionNumberArray.push(number);
  }
}
console.log(questionNumberArray);
let sum = -1;
let trueAnwers = 0;
let counterRate = 0;
let value = false;
let rate = Math.floor(100 / questions.length);
const finnaly = () => {
  finnalyBox.classList.toggle("close");
  firstSection.classList.add("close");
  answers.forEach((item, i, array) => {
    answers[i].classList.add("close");
  });
  value = true;
};
function questionGen() {
  sum++;
  question.textContent = questions[questionNumberArray[sum]].name;
  answersArray.forEach((item, index, array) => {
    // question.textContent = questions[questionNumberArray[index]].name
    answersArray[index].textContent =
      questions[questionNumberArray[sum]].answer[index];
  });
}
startButton.addEventListener("click", (event) => {
  const { target } = event;
  if (target.className == "start-text") {
    firstSection.classList.remove("close");
    cartBox.classList.add("scale-down-ver-top");
    startQuestionText.classList.add("animation-text");
    setTimeout(() => {
      cartBox.classList.add("close");
      startState.classList.add("close");
    }, 800);
  }
  questionGen();
});
buttonsBox.addEventListener("click", (event) => {
  const { target } = event;
  if (target.textContent == questions[questionNumberArray[sum]].trueAnswer) {
    trueAnwers++;
  } else {
  }
  if (sum == questions.length - 1) {
    finnaly();
  } else {
    questionGen();
  }
  if (value) {
    if(trueAnwers == questions.length){
      rate = 100
    } else {
      rate = trueAnwers *= rate;
    }
    setInterval(() => {
      counter.textContent = 0 + counterRate + "%";
      if (counterRate !== rate && trueAnwers !== 0) {
        counterRate++;
      }
    }, 10);
  }
});
