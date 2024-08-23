//========= start home slider =========///
var swiper = new Swiper("#homeSlider", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
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

///=============end home slider ============/

/// ============= start sugget ============ /

var swiper = new Swiper(".sugget-slider", {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

/// ============= end sugget ============ /

//===========feature in home page ===========//
var swiper = new Swiper("#feature", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
//===========end feature in home page ===========//

//=========== amazing slider ===========//
var swiper = new Swiper("#amazing", {
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//===========end amazing slider ===========//

//========= start product box ==============/
var swiper = new Swiper("#product-box", {
  slidesPerView: "auto",
  spaceBetween: 10,
  // loop: true,
  // speed: 1000,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//========= end product box ==============/

//=========== swiper box ===========//
var swiper = new Swiper("#swiper-box", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
//=========== end swiper-box ===========//

//=========== swiper box ===========//
var swiper = new Swiper("#swiper-box-two", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  speed: 1000,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },
});
//=========== end swiper-box ===========//

//=========== swiper-small-slider ===========//
var swiper = new Swiper(".swiper-small-slider", {
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  speed: 2500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
//=========== end swiper-small-slider ===========//

//=========== product gallery ===================//

var proSwiper = new Swiper(".product-gallery-thumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
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

//=========== end product gallery ===================//

//=========== modal product ===========//
var swiper = new Swiper(".sw-modal-product", {
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//=========== end modal product ===========//

//========= start new category ==============/
var swiper = new Swiper(".free-mode", {
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
});
//========= end new category ==============/

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

///offer
///offer gallery
var swiper = new Swiper("#offerItemLink", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
});
var swiper2 = new Swiper("#offerItem", {
  effect: "fade",
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
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