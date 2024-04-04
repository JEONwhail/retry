// let swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   loop : true, 
//   autoPlay : {
//     delay:300
//   },
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 50,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// })
// ;

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true, 
  autoplay: {
    delay: 3000, // 3000밀리초(3초)마다 슬라이드가 전환됩니다.
    disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생을 계속합니다.
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

