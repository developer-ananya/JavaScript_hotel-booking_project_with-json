var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{                                 
    delay: 3000,
}
});

var swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
  }
}); 