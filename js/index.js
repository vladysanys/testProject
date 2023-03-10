import questions from "/js/questions.js";
const question = document.querySelector(".text-question");
const answersArray = document.querySelectorAll(".text-answer");
const buttonsBox = document.querySelector('.buttons')
let questionNumberArray = []
for(let i = 0; questionNumberArray.length < questions.length;i++){
  let number = Math.floor(Math.random() * questions.length)
  if(questionNumberArray.indexOf(number) == -1){
    questionNumberArray.push(number)
  }
}
answersArray.forEach((item,index,array)=>{
  question.textContent = questions[questionNumberArray[index]].name
  answersArray[index].textContent = questions[questionNumberArray[index]].answer[questionNumberArray[index]]
})
buttonsBox.addEventListener("click", (event) => {
  question.textContent = questions[questionNumberArray[1]].name
  const { target } = event;
});
