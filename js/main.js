$(function () {


  $(document).ready(function () {
    $('#fullpage').fullpage();
  });

  $('.services__list').slick({

    arrows: false,
    infinite: false,
    slidesToShow: 4,
    focusOnSelect: true,


    responsive: [{
      breakpoint: 1120,
      settings: {
        initialSlide: 1,
        slidesToShow: 3,
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