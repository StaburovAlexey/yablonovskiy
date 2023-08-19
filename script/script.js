const mainSlider = new Swiper(".main-slider", {
  // Optional parameters
  direction: "horizontal",
  // Slide class
  slideClass: "main-slider__slide",
  //Wrapper class
  wrapperClass: "main-slider__wrapper",
  // If we need pagination
  pagination: {
    el: ".reviews-slider__pagination",
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__btn-next",
    prevEl: ".main-slider__btn-prev",
  },
  // centeredSlides: true,
  // slidesPerGroup: 1,
  // freeMode: {
  //   enabled: true,
  // },
  slidesPerView: "auto",
  spaceBetween: 24,
  breakpoints: {
    320: {},
    426: {},
    768: {},
    1024: {},
  },
});

const complexSlider = new Swiper(".complex-slider", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",
  // spaceBetween: 10,
  // Slide class
  slideClass: "complex-slider__slide",
  //Wrapper class
  wrapperClass: "complex-slider__wrapper",
  // If we need pagination
  pagination: {
    el: ".complex-slider__pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".complex-slider__btn-next",
    prevEl: ".complex-slider__btn-prev",
  },
  breakpoints: {
    320: { centeredSlides: true },
    426: {},
    768: { centeredSlides: false, spaceBetween: 10 },
    1024: {},
  },
});
