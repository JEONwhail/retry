var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop : true, 
  autoPlay : true,
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