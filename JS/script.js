window.onload = function () {
  document.querySelector('.loading').style.visibility = 'hidden'
  document.querySelector('.loading').style.opacity = 0
}


// BOARD
const defalts = document.querySelectorAll('.board .board-line .defalt_board');
const hiddens = document.querySelectorAll('.board .board-line .hidden_board');
console.log(defalts);
console.log(hiddens[1]);

defalts.forEach(function (defalt, dIndex) {
  defalt.addEventListener('click', function () {
    console.log(dIndex);
    console.log(hiddens[dIndex]);
    hiddens[dIndex].style.display = 'block';
  });
});

hiddens.forEach(function (hidden) {
  hidden.addEventListener('click', function () {
    console.log(hidden);
    hidden.style.display = 'none' ;
  });
});


// Q&A

//하나 열리고 하나열리고 다 열림
// const questions = document.querySelectorAll('.qna .dl_box .question');
// const answers = document.querySelectorAll('.qna .dl_box .answer');
// console.log(questions);
// console.log(answers[1]);

// questions.forEach(function (question, qIndex) {
//   question.addEventListener('click', function () {

//     console.log(qIndex);
//     console.log(answers[qIndex]);
//     answers[qIndex].style.display = 'block';

//     // answers.forEach(answer => {
//     //   answer
//     //   answer.style.display = 'block' ;
//     // });
//   });
// });

// answers.forEach(function (answer) {
//   answer.addEventListener('click', function () {
//     console.log(answer);
//     answer.style.display = 'none' ;
//   });
// });

const questions = document.querySelectorAll('.qna .dl_box .question');
const answers = document.querySelectorAll('.qna .dl_box .answer');

questions.forEach(function (question, qIndex) {
  question.addEventListener('click', function () {

    answers.forEach(function (answer, aIndex) {
      if (qIndex === aIndex) {

        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      } else {

        answer.style.display = 'none';
      }
    });
  });
});

answers.forEach(function (answer) {
  answer.addEventListener('click', function () {
    answer.style.display = 'none';
  });
});

