///main slider
var swiperMainSlider = new Swiper("#mainSlider", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  a11y: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///product box one slider
var swiper = new Swiper(".prodcut-box-one-slider", {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  a11y: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    enabled: false,
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    220: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  },
});


///product box two slider
var swiper = new Swiper(".product-box-two-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  a11y: false,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    220: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
});

///product box three slider in index2
var swiper = new Swiper(".product-box-three-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  a11y: false,
  loop: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    enabled: false,
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    220: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1768: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  },
});

///product box two custom slider
var swiper = new Swiper(".product-box-two-custom", {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  a11y: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    enabled: false,
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    220: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
});

///offer
///offer gallery
var swiper = new Swiper("#offerItemLink", {
  spaceBetween: 10,
  slidesPerView: 4,
  a11y: false,
  freeMode: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
});
var swiper2 = new Swiper("#offerItem", {
  effect: "fade",
  speed: 1000,
  a11y: false,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

///run tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

///product modal
var swiperMainSlider = new Swiper(".product-modal", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  a11y: false,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///article

var swiper = new Swiper("#article", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  a11y: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    enabled: false,
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
});

///partner section

var swiper = new Swiper(".partnerSwipper", {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  a11y: false,
  loopFillGroupWithBlank: true,
  autoplay: {
    enabled: false,
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  },
});

//sugget moment in home page

var swiperSugget = new Swiper("#suggetMoment", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  a11y: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
  on: {
    init: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").eq(0).addClass("animate");
      $(".swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").eq(0).addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".swiper-progress-bar").eq(0).addClass("animate");
    }
  }
});

///home slider
var swiperMainSlider = new Swiper(".homeSlider", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  a11y: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

////cart slide

///product gallery
var proSwiper = new Swiper(".product-gallery-thumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  a11y: false,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    400: {
      slidesPerView: 4,
      spaceBetween: 10
    },
  },
});
var proThumbswiper = new Swiper(".product-gallery", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  zoom: {
    maxRatio: 3,
    minRation: 1
  },
  thumbs: {
    swiper: proSwiper,
  },
});