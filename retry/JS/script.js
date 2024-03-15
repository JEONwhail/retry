
const question = document.querySelectorAll('.qna .dl_box .question');
const answer = document.querySelectorAll('.qna .dl_box .answer');

question.forEach(function (question) {
  question.addEventListener('click', function () {
    answer.forEach(answer => {
      answer
      answer.style.display = 'block' ;
    });
  });
});

answer.forEach(function (answer) {
  answer.addEventListener('click', function () {
    answer.style.display = 'none' ;
  });
});

