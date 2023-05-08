import questions from "./questions.js";
import check from "./signIn.js";
const boxQuestions = document.querySelector(".box-questions");
const changeDataBtn = document.querySelector(".change-data-btn");
const addCardButton = document.querySelector(".add-card");
const exitButton = document.querySelector(".fa-arrow-left");
const exitButtonHref = document.querySelector(".exit-button_a");
const body = document.querySelector("body");
let buttonsDelete = document.querySelectorAll(".delete-button");
let iconsDelete = document.querySelectorAll(".anim");
const arrowExitButton = document.querySelector(".fa-solid")
let idButtons = -1;
if (check) {
  const cardGen = (question, answer, trueAnswer) => {
    idButtons++;
    let card = document.createElement("div");
    let questionBox = document.createElement("div");
    let answersBox = document.createElement("div");
    let questionText = document.createElement("textarea");
    let textNameAnswers = document.createElement("p");
    let trueAnswers = document.createElement("div");
    let trueAnswersTrue = document.createElement("input");
    let textTrueAnswers = document.createElement("p");
    let deleteButton = document.createElement("button");
    let deleteIcon = document.createElement("i");
    boxQuestions.append(card);
    card.id = idButtons;
    card.classList.add("card-item");
    card.append(questionBox);
    questionBox.classList.add("question-box");
    questionBox.append(questionText);
    questionText.classList.add("question-text");
    questionText.value = question;
    questionText.placeholder = "нет вопроса";
    card.append(textNameAnswers);
    textNameAnswers.classList.add("text-name-answers");
    textNameAnswers.textContent = "Ответы:";
    card.append(answersBox);
    answersBox.classList.add("answers-box");
    card.append(trueAnswers);
    trueAnswers.classList.add("true-answers");
    trueAnswers.append(trueAnswersTrue);
    trueAnswersTrue.classList.add("true-answers_text");
    // trueAnswersTrue.classList.add("answer-text");
    trueAnswersTrue.value = trueAnswer;
    trueAnswersTrue.placeholder = "нет правильного ответа";
    card.append(textTrueAnswers);
    textTrueAnswers.classList.add("text-name-answers");
    textTrueAnswers.classList.add("text-true-answer");
    textTrueAnswers.textContent = "Правильный ответ:";
    card.append(deleteButton);
    deleteButton.classList.add("delete-button");
    deleteButton.title;
    deleteButton.id = idButtons;
    deleteButton.append(deleteIcon);
    deleteIcon.classList.add("fa-regular");
    deleteIcon.classList.add("anim");
    deleteIcon.classList.add("fa-trash-can");
    deleteIcon.classList.add("fa-xl");
    deleteIcon.id = idButtons;
    let i = -1;
    while (i < 3) {
      let answerItem = document.createElement("div");
      let answerText = document.createElement("input");
      i++;
      answersBox.append(answerItem);
      answerItem.classList.add("answer-item");
      answerItem.append(answerText);
      answerText.classList.add("answer-text");
      if (answer[i] == undefined) {
        answerText.value = "";
        answerText.placeholder = "нет ответа";
      } else {
        answerText.value = answer[i];
        answerText.placeholder = "нет ответа";
      }
    }
    buttonsDelete = document.querySelectorAll(".delete-button");
    iconsDelete = document.querySelectorAll(".anim");
  };
  let newQuestions = [];
  const questionGenObject = (data, answer, trueAnswer) => {
    let value = {
      name: data,
      answer: answer,
      trueAnswer: trueAnswer,
    };
    return value;
  };
  const answersGenArr = (one, two, tree, four) => {
    if (two == "") {
      let value = [];
      return value;
    } else {
      let value = [one, two, tree, four];
      return value;
    }
  };
  const questionGen = () => {
    const questionTextsArr = document.querySelectorAll(".question-text");
    const answersTextsArr = document.querySelectorAll(".answer-text");
    const trueAnswersTextsArr = document.querySelectorAll(".true-answers_text");
    let answersValuesArr = [];
    let answersValuesFullArr = [];
    answersTextsArr.forEach((item, i) => {
      // if (Boolean(item.value) == true) {
      // if ((i + 1) % 4 === 0) {
      answersValuesArr.push(item.value);
      // }
      // }
    });
    answersValuesArr.forEach((item, i) => {
      if ((i + 1) % 4 === 0) {
        answersValuesFullArr.push(
          answersGenArr(
            answersValuesArr[i - 3],
            answersValuesArr[i - 2],
            answersValuesArr[i - 1],
            answersValuesArr[i]
          )
        );
      }
    });
    let trueAnswersValuesArr = [];
    trueAnswersTextsArr.forEach((item, i) => {
      trueAnswersValuesArr.push(item.value);
    });
    questionTextsArr.forEach((item, i, arr) => {
      if (Boolean(item.value) == true) {
        newQuestions.push(
          questionGenObject(
            item.value,
            answersValuesFullArr[i],
            trueAnswersValuesArr[i]
          )
        );
      }
    });
    console.log(newQuestions);
  };
  questions.map((question) => {
    cardGen(question.name, question.answer, question.trueAnswer);
  });
  const sendingData = () => {
    fetch(`https://giving-oriole-32739.kv.vercel-storage.com/set/questions`, {
      headers: {
        Authorization: `Bearer AX_jASQgNWUwNGY4N2ItZDNhZS00OTAzLTkxOTQtNGYzNWRhZTMyM2Y0ZDY0MjBkZDdmMDBiNDRlOTlkMWVjNjM1MTkzM2Q2YWI=`,
      },
      body: JSON.stringify({
        questions: newQuestions,
      }),
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  changeDataBtn.onclick = () => {
    questionGen();
    sendingData();
    newQuestions = [];
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  addCardButton.onclick = () => {
    cardGen("", "", "");
    buttonsDelete = document.querySelectorAll(".delete-button");
    iconsDelete = document.querySelectorAll(".anim");
  };
  document.addEventListener("click", (e) => {
    const { target } = e;
    if (
      (Boolean(target.id) && target.classList.value == "delete-button") ||
      target.classList[0] == "fa-regular"
    ) {
      let deleteCard = document.getElementById(target.id);
      deleteCard.remove();
    }
  });
  exitButton.onclick = () => {
    checkingData();
    // console.log(e)
    let adminUrlWindow = window.location.href.slice(0, -10) + "main-main.html";
    setTimeout(() => {
      window.location.replace(adminUrlWindow);
    }, 100);
  };
  // arrowExitButton.onclick = () => {
  //   checkingData();
  //   let adminUrlWindow = window.location.href.slice(0, -10) + "main-main.html";
  //   setTimeout(() => {
  //     window.location.replace(adminUrlWindow);
  //   }, 100);
  // };
  const checkingData = () => {
    fetch(`https://giving-oriole-32739.kv.vercel-storage.com/set/check`, {
      headers: {
        Authorization: `Bearer AX_jASQgNWUwNGY4N2ItZDNhZS00OTAzLTkxOTQtNGYzNWRhZTMyM2Y0ZDY0MjBkZDdmMDBiNDRlOTlkMWVjNjM1MTkzM2Q2YWI=`,
      },
      body: JSON.stringify(false),
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  document.addEventListener("mouseover", (e) => {
    const { target } = e;
    buttonsDelete.forEach((item, i) => {
      if (item.id == target.id && target.classList[0] !== "card-item") {
        iconsDelete[i].classList.add("fa-bounce")
      } else {
        iconsDelete[i].classList.remove("fa-bounce")
      }
    });
  });
} else {
  body.style.filter = "blur(3px)";
  setTimeout(() => {
    setInterval(() => {
      alert("ошибка авторизации");
    }, 10);
  }, 100);
}
