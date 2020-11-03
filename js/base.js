// Owl Carousel Script
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      480: {
        items: 2,
        nav: false
      },
      1200: {
        items: 3,
        nav: false,
        loop: true
      }
    }
  }, function() {
    $('.loop').owlCarousel({
      center: true,
      items: 2
    });
  });
});

/* affix the navbar after scroll below header */
$("nav").affix({
  offset:{
    top: $('body').offset().top
  }
});
