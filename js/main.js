$(function () {


  $('#fullpage').fullpage({
    credits: { enabled: false },
    licenseKey: 'gplv3-license',
    menu: '#navigation',

    onLeave: function (origin, destination, direction) {

      if (destination.index !== 0) {
        $('.header').addClass('header--hidden')

      } else {
        $('.header').removeClass('header--hidden')
      }
    },

  });


  $('.services__list').slick({

    arrows: true,
    infinite: false,
    variableWidth: true,

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

})