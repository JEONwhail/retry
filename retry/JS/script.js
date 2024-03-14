// const question = document.querySelectorAll('.qna .dl_box .question');
// question.forEach(function (question) {
//   question.addEventListener('click', function () {
//     display : block;
//   });
// });

// console.log(question);


// const answer = document.querySelectorAll('.qna .dl_box .answer');
// answer.forEach(function (answer) {
//   answer.addEventListener('click', function () {
//     display : none;
//   });
// });

// console.log(answer);


var dropdown = document.querySelector(".dropdown_bar");
var dropdownContent = document.querySelector(".dropdown_content");
var drop_icon1 = document.querySelector(".drop_icon1");
var drop_icon2 = document.querySelector(".drop_icon2");

dropdown.addEventListener("click", function() {
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      drop_icon1.style.display = "inline-flex";
      drop_icon2.style.display = "none";
  } else {
      dropdownContent.style.display = "block";
      drop_icon1.style.display = "none";
      drop_icon2.style.display = "inline-flex";
  }
});