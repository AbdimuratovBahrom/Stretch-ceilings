  
  
   $(document).ready(function () {
    $(".image-slider").slick({
      slidesToShow: 3.5,
      slidesToScroll:1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'> <img src="./css/images/arrow__prev.png" alt=""> <ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'> <img src="./css/images/arrow__next.png" alt=""> <ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: false,
          },
        },
      ],
      // autoplay: true,
      // autoplaySpeed: 1000,
    });
  });
