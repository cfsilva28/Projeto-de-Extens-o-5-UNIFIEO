/* eslint-disable no-undef */
$(document).ready(function () {
  $('.carousel').owlCarousel({
    margin: 40,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsiveClass: true,
    responsive: {
      300: {
        items: 1,
        nav: false,
      },
      700: {
        items: 2,
        nav: false
      },
      1180: {
        items: 3,
        nav: false
      }
    }
  });
});