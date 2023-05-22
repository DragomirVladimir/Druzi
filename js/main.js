$(function () {

  $('#fullpage').fullpage({
    credits: { enabled: false },
    licenseKey: 'gplv3-license',
    menu: '#navigation',
    verticalCentered: false,
    responsiveWidth: 1025,
    responsiveHeight: 769,

    onLeave: function (origin, destination, direction) {

      if (destination.index !== 0) {
        $('.header').addClass('header--hidden');

      } else {
        $('.header').removeClass('header--hidden');
      }
    },

  });

  if ($(window).width() <= 1025 || $(window).height() <= 769) {
    $('.section, .fp-overflow').css({
      'min-height': 'auto',
      'max-height': 'fit-content',
    });
  };



  $('.services__list').slick({

    arrows: true,
    infinite: false,
    variableWidth: true,

    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    }]

  });


  function onEntry(entry, observer) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        $(change.target).addClass('element-show');
      }
    });
  }

  let options = { threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('.element-hide');
  elements.each(function () {
    observer.observe(this);
  });




  $('.burger-btn').on('click', function () {

    $('.burger-btn').toggleClass('burger-btn--active');

    $('.nav__menu').toggleClass('nav__menu--active');

    $('body').toggleClass('disable-scroll');

  })

  $('.nav__menu-link, .logo').on('click', function () {

    $('.nav__menu').removeClass('nav__menu--active');

    $('body').removeClass('disable-scroll');

    $('.burger-btn').removeClass('burger-btn--active');

  });




  $('.cases__item').on('mouseover', function () {

    $('.cases__item').removeClass('cases__item--active');
    $(this).addClass('cases__item--active');

  })

  $('.cases__item').on('mouseleave', function () {
    $(this).removeClass('cases__item--active');
    $('.cases__item').first().addClass('cases__item--active');
  });


})

