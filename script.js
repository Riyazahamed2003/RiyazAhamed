$(document).ready(function () {
  $(window).scroll(function () {
    // Sticky navbar on scroll
    if ($(this).scrollTop() > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-up button show/hide
    if ($(this).scrollTop() > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slide-up script
  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    // Disable smooth scroll temporarily
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth scroll on menu items click
  $(".navbar .menu li a").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500);
    return false; // Prevent default anchor behavior
  });

  // Toggle Navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing Text Animation
  var typed = new Typed(".typing", {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Owl Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
