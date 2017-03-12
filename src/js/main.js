
$(document).ready(function(){

  $('#slider').bxSlider({pager:false, controls:false, adaptiveHeight:false, responsive:false});

  $('.promo .product-list').slick({
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 4,
        slidesToScroll:4
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      },
    }
  ]
  });

});
