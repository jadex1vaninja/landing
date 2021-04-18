$(document).ready(function () {
  // $('.carousel__carousel-wrapper').slick({
  //   infinite: true,
  //   speed: 500,
  //   cssEase: 'linear',
  //   useTransform: false,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });

  $('.card__card-wrapper').slick({
    speed: 500,
    cssEase: 'linear',
    useTransform: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
});
