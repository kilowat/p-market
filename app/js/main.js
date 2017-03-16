
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

  $('.brands .brands-list').slick({
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
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
    });

    $('.reviews .reviews-list').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ]
  });
  //set input number
  $('input[type=number]').iLightInputNumber();

  //run checkbox
  $('input').iCheck({
    checkboxClass: 'icheckbox_flat',
    radioClass: 'iradio_flat'
  });

  //customize select
  $('select').selectize();

  //dorp down btn
  $('.drop-down-btn').click(function () {
    var self = $(this);
    $(self.next()).slideToggle('fast', function () {
      self.toggleClass('selected');
    });
  });
});
