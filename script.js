
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-button');

let shuffledQuestions,currentQuestionIndex;
let quizScore =0;


startButton.addEventListener('click',startGame);

nextButton.addEventListener('click',() =>{
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame(){
  startButton.classList.add('hide');
  shuffledQuestions=question.sort(() =>Math.random() -0.5);
  currentQuestionIndex=0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
  quizScore=0;
}

function setNextQuestion(){
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answer.forEach((answer) => {
    const button =document.createElement('button')
    button.innerText=answer.text;
    button.classList.add('btn');
    if( answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click',selectAnswer);
    answerButtonElement.appendChild(button);
  })
}


function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while(answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }

}

function selectAnswer(e){
  const selectedButton=e.target;
  const correct =selectedButton.dataset.correct;

  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button,button.dataset.correct);

  });
  if(shuffledQuestions.lenght > currentQuestionIndex +1){
    nextButton.classList.remove("hide");
  }
  else {
    startButton.innerText ="restart";
    startButton.classList.remove("hide");
  }
  if(selectedButton.dataset = correct) {
    quizScore++;
  }
}


function setStatusClass(element,correct){
  clearStatusClass(element);
  if(currect){
    element.classList.add("correct");
  }
  else {
    element.classList.add("Wrong");
  }
}

function clearStatusClass(element){
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const question =[{
  question: "which one of these is a JavaScript framework?",
  answer:
  {
    a: "Python",
    b: "Eclipse",
    c: "React"
  },
  correctAnswer: "b"
    
},];



