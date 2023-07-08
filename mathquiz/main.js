const questionEl = document.querySelector("#question");
const answerEl = document.querySelector("#answer");
const submitEl = document.querySelector("#submit");
const scoreEl = document.querySelector("#score");
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const answer = num1 * num2;
let score = localStorage.getItem('score') || 0

scoreEl.textContent = score;
questionEl.textContent = `What is ${num1} multiply by ${num2}`;

answerEl.addEventListener("keypress", (e) => {
  if (isNaN(Number(e.key))) {
    e.preventDefault();
  }
});

submitEl.addEventListener("click", () => {
    console.log(answerEl.value)
  if(Number(answerEl.value) === answer) {
      score++
      localStorage.setItem('score', score)
  }else {
      score = 0
  }

  answerEl.value = ""
  scoreEl.textContent = score
});



