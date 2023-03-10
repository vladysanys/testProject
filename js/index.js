import questions from "/js/questions.js";
const question = document.querySelector(".text-question");
const answersArray = document.querySelectorAll(".text-answer");
const buttonsBox = document.querySelector(".buttons");
const finnalyBox = document.querySelector(".finaly-box");
const counter = document.querySelector(".counter");
const startButton = document.querySelector(".start-button");
const startState = document.querySelector(".start-state");
const firstSection = document.querySelector(".first-section");
let questionNumberArray = [];
for (let i = 0; questionNumberArray.length < questions.length; i++) {
  let number = Math.floor(Math.random() * questions.length);
  if (questionNumberArray.indexOf(number) == -1) {
    questionNumberArray.push(number);
  }
}
firstSection.classList.add("close");
let sum = 0;
let trueAnwers = 0;
let counterRate = 0;
let rate = Math.floor(100 / questions.length);
const finnaly = () => {
  finnalyBox.classList.toggle("close");
};
startButton.addEventListener("click", (event) => {
  const { target } = event;
  if (target.className == "start-text") {
    startState.classList.add("close");
    firstSection.classList.remove("close");
  }
  question.textContent = questions[questionNumberArray[sum]].name;
  answersArray.forEach((item, index, array) => {
    answersArray[index].textContent =
      questions[questionNumberArray[sum]].answer[index];
    if (target.textContent == questions[questionNumberArray[sum]].trueAnswer) {
      trueAnwers++;
    }
  });
});
buttonsBox.addEventListener("click", (event) => {
  const { target } = event;
  if (sum == questions.length - 1) {
    finnaly();
    rate = trueAnwers *= rate;
    setInterval(() => {
      counter.textContent = 0 + counterRate + "%";
      if (counterRate !== rate && trueAnwers !== 0) {
      counterRate++;
      }
    }, 50);
  } else {
    sum++;
    question.textContent = questions[questionNumberArray[sum]].name;
    answersArray.forEach((item, index, array) => {
      // question.textContent = questions[questionNumberArray[index]].name
      answersArray[index].textContent =
        questions[questionNumberArray[sum]].answer[index];
    });
  }
  if (target.textContent == questions[questionNumberArray[sum]].trueAnswer) {
    trueAnwers++;
    console.log(true)
    console.log(target)
  } else {
    console.log(false)
    console.log(target.textContent)
  }
  // if(target.textName == questions[questionNumberArray[sum]]){
  //   console.log(1)
  // }
});