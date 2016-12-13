

// Slider configuration
// ====================
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });


// code for animation
// ==================

window.sr = ScrollReveal();
sr.reveal('.inner-solutions-wrapper, .solutions-list , .home-culture-content', {
  duration: 800,
  origin: 'bottom',
  distance: '60px',
  mobile: false,
  reset: true,
  opacity: .5,
  scale: 1,
  easing: 'ease-in',
  viewOffset: { top: 140 },
});


// Shrink Navigation
// =================

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.main-navigation').addClass('shrink');
  } else {
    $('.main-navigation').removeClass('shrink');
  }
});


// smooth scrolling on hash link click
// ==================================
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



