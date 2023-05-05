import questions from "./questions.js";
const boxQuestions = document.querySelector(".box-questions");

const cardGen = (question, answer, trueAnswer) => {
  let card = document.createElement("div");
  let questionBox = document.createElement("div");
  let answersBox = document.createElement("div");
  let questionText = document.createElement("h1");
  let textNameAnswers = document.createElement("p");
  let trueAnswers = document.createElement("div");
  let trueAnswersTrue = document.createElement("p");
  boxQuestions.append(card);
  card.classList.add("card-item");
  card.append(questionBox);
  questionBox.classList.add("question-box");
  questionBox.append(questionText);
  questionText.classList.add("question-text");
  questionText.textContent = question;
  card.append(answersBox);
  card.append(textNameAnswers);
  textNameAnswers.classList.add("text-name-answers");
  textNameAnswers.textContent = "Ответы:";
  answersBox.classList.add("answers-box");
  card.append(trueAnswers)
  trueAnswers.classList.add("true-answers")
  trueAnswers.append(trueAnswersTrue)
  trueAnswersTrue.classList.add("true-answers_text")
  trueAnswersTrue.classList.add("answer-text")
  trueAnswersTrue.textContent = trueAnswer
  let i = -1;
  while (i < 3) {
    let answerItem = document.createElement("div");
    let answerText = document.createElement("p");
    i++;
    answersBox.append(answerItem);
    answerItem.classList.add("answer-item");
    answerItem.append(answerText);
    answerText.classList.add("answer-text");
    answerText.textContent = answer[i];
  }
};
questions.map((question) => {
  cardGen(question.name,question.answer,question.trueAnswer)
  console.log(question.trueAnswer)
});
