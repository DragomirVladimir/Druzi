$(function () {

  $('#fullpage').fullpage({
    credits: { enabled: false },
    licenseKey: 'gplv3-license',
    menu: '#navigation',
    verticalCentered: false,
    responsiveWidth: 1024,
    responsiveHeight: 710,

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


  $('.partners__box').slick({

    arrows: true,
    infinite: false,
    slidesToShow: 1,




    // responsive: [{
    //   breakpoint: 576,
    //   settings: {
    //     slidesToShow: 1,
    //     centerMode: true,
    //   }
    // }]

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

// (function () {
//   // Кэширование повторно используемых элементов
//   const $header = $('.header');
//   const $elementHide = $('.element-hide');
//   const $burgerBtn = $('.burger-btn');
//   const $navMenu = $('.nav__menu');
//   const $casesItems = $('.cases__item');

//   // Функция для обработки события onLeave
//   function handleOnLeave(origin, destination, direction) {
//     if (destination.index !== 0) {
//       $header.addClass('header--hidden');
//     } else {
//       $header.removeClass('header--hidden');
//     }
//   }

//   // Функция для обработки события onEntry
//   function handleOnEntry(entry, observer) {
//     entry.forEach(change => {
//       if (change.isIntersecting) {
//         $(change.target).addClass('element-show');
//       }
//     });
//   }

//   // Опции для IntersectionObserver
//   const intersectionOptions = {
//     threshold: [0.3]
//   };

//   // Создание IntersectionObserver и наблюдение за элементами
//   const observer = new IntersectionObserver(handleOnEntry, intersectionOptions);
//   $elementHide.each(function () {
//     observer.observe(this);
//   });

//   // Обработчик события click для кнопки бургера
//   function toggleBurgerMenu() {
//     $burgerBtn.toggleClass('burger-btn--active');
//     $navMenu.toggleClass('nav__menu--active');
//     $('body').toggleClass('disable-scroll');
//   }

//   // Обработчик события click для ссылок меню и логотипа
//   function resetBurgerMenu() {
//     $navMenu.removeClass('nav__menu--active');
//     $('body').removeClass('disable-scroll');
//     $burgerBtn.removeClass('burger-btn--active');
//   }

//   // Назначение обработчиков событий
//   $burgerBtn.on('click', toggleBurgerMenu);
//   $('.nav__menu-link, .logo').on('click', resetBurgerMenu);

//   // Обработка событий mouseover и mouseleave для элементов cases__item
//   $casesItems.hover(
//     function () {
//       $casesItems.removeClass('cases__item--active');
//       $(this).addClass('cases__item--active');
//     },
//     function () {
//       $(this).removeClass('cases__item--active');
//       $casesItems.first().addClass('cases__item--active');
//     }
//   );

//   // Инициализация fullpage.js
//   $('#fullpage').fullpage({
//     credits: { enabled: false },
//     licenseKey: 'gplv3-license',
//     menu: '#navigation',
//     verticalCentered: false,
//     responsiveWidth: 1025,
//     responsiveHeight: 769,
//     onLeave: handleOnLeave,
//   });

//   // Установка CSS-свойств для section и fp-overflow на мобильных устройствах
//   if ($(window).width() <= 1025 || $(window).height() <= 769) {
//     $('.section, .fp-overflow').css({
//       'min-height': 'auto',
//       'max-height': 'fit-content'
//     });
//   }

//   // Инициализация слайдера slick.js
//   $('.services__list').slick({
//     arrows: true,
//     infinite: false,
//     variableWidth: true,
//     responsive: [{
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         centerMode: true
//       }
//     }]
//   });

// })();

