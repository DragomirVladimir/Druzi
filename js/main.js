$(function () {


  $('#fullpage').fullpage({
    credits: { enabled: false },
    licenseKey: 'gplv3-license',
    navigation: true,

    onLeave: function (origin, destination, direction) {
      console.log(origin.index);
      console.log("Leaving section" + origin.index);
      console.log(destination);

      if (destination.index !== 0) {
        $('.header').addClass('header-hidden')

      } else {
        $('.header').removeClass('header-hidden')
      }
    },

  });



  $('.services__list').slick({

    arrows: false,
    infinite: false,
    slidesToShow: 3,
    focusOnSelect: true,


    responsive: [{
      breakpoint: 1120,
      settings: {
        initialSlide: 1,
        slidesToShow: 2,
        centerMode: true,
      }
    },

    {
      breakpoint: 700,
      settings: {
        variableWidth: true,
        initialSlide: 1,
        slidesToShow: 1,
        centerMode: true,
      }
    }
    ]
  });

})