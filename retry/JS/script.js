
const questions = document.querySelectorAll('.qna .dl_box .question');
const answers = document.querySelectorAll('.qna .dl_box .answer');

questions.forEach(function (question) {
  question.addEventListener('click', function () {
    answers.style.display = 'block' ;
  });
});

// question.addEventListener('click', function () {
//   // answer.style.display = 'block';
//   console.log('하이');
// });

// answer.forEach(function (answer) {
//   answer.addEventListener('click', function () {
//     answer.style.display = 'none' ;
//   });
// });

