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
    bulletClass: "description-slider__pagination-bullet",
    bulletActiveClass: "description-slider__pagination-bullet_active",
    // type: "custom",
    bulletElement: "div",
    clickable: true,
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

// яндекс карты API

ymaps.ready(function () {
  const myMap = new ymaps.Map(
      "map",
      {
        center: [44.991341399275534, 38.93490385310366],
        zoom: 15.5,
        scrollZoom: false,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="map__icon">$[properties.iconContent]</div>'
    ),
    geo = new ymaps.Placemark(
      [44.9916779822134, 38.92784074068536],
      {
        hintContent: "ЖК “Яблоновский”",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "image/geo.svg",
        // Размеры метки.
        iconImageSize: [81, 81],
        // её "ножки" (точки привязки).
        // iconImageOffset: [-24, -24]
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      }
    );
  bankWhite = new ymaps.Placemark(
    [44.99389936195114, 38.93715690867617],
    {
      hintContent: "Банк",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/bank-white.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );
  bank = new ymaps.Placemark(
    [44.993731879838286, 38.93077325122069],
    {
      hintContent: "Банк",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/bank.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );
  mall = new ymaps.Placemark(
    [44.992666072924976, 38.93122386233519],
    {
      hintContent: "Магазин",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/mall.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );
  mallWhite = new ymaps.Placemark(
    [44.990717117214615, 38.92671775119019],
    {
      hintContent: "Магазин",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/mall-white.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );
  swimmingPool = new ymaps.Placemark(
    [44.99655258539743, 38.92485093371581],
    {
      hintContent: "Бассейн 'Ниагара'",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/swiming-pool.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );

  ambulance = new ymaps.Placemark(
    [44.99009685481702, 38.93253278033449],
    {
      hintContent: "Поликлиника",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/ambulance.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );

  ambulanceWhite = new ymaps.Placemark(
    [44.98732010079116, 38.92750095622258],
    {
      hintContent: "Поликлиника",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/ambulance-white.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );

  gas = new ymaps.Placemark(
    [44.98978688382531, 38.92348837153629],
    {
      hintContent: "Заправка",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/gas.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );
  child = new ymaps.Placemark(
    [44.990091417528966, 38.929153196975754],
    {
      hintContent: "Детский сад",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/child.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );
  cafe = new ymaps.Placemark(
    [44.98876668404919, 38.932564966842676],
    {
      hintContent: "Кафе",
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "image/cafe.svg",
      iconImageSize: [76, 76],
      iconContentLayout: MyIconContentLayout,
    }
  );
  if (document.documentElement.clientWidth < 768) {
    myMap.setCenter([44.99156, 38.931422]);
  }

  myMap.geoObjects
    .add(geo)
    .add(bankWhite)
    .add(bank)
    .add(ambulance)
    .add(ambulanceWhite)
    .add(mall)
    .add(mallWhite)
    .add(swimmingPool)
    .add(gas)
    .add(child)
    .add(cafe);
  myMap.behaviors.disable("scrollZoom");
  myMap.behaviors.disable("drag");
});
