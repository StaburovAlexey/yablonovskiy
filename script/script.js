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

const descriptionSlider = new Swiper(".description-slider", {
  // Optional parameters
  direction: "horizontal",
  // Slide class
  slideClass: "description-slider__slide",
  //Wrapper class
  wrapperClass: "description-slider__wrapper",

  // If we need pagination
  pagination: {
    el: ".description-slider__pagination",
   
    bulletElement: "div",
    clickable: true,
    bulletClass: "description-slider__pagination-bullet",
    bulletActiveClass: "description-slider__pagination-bullet_active",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".description-slider__btn-next",
    prevEl: ".description-slider__btn-prev",
  },
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    320: {},
    426: {},
    768: {},
    1024: {},
  },
});
