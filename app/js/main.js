$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      ' <img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="" />',
    nextArrow:
      ' <img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="" />',
    asNavFor: ".slider-dotshead",
  });
  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 961,
        settings: "unslick",
      },
    ],
  });
  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    prevArrow:
      ' <img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="" />',
    nextArrow:
      ' <img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="" />',
    asNavFor: ".slider-map, .travel .holder__slider, .sleep .holder__slider",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider, .travel .holder__slider, .sleep .holder__slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      // {
      //   breakpoint: 375,
      //   settings: {
      //     slidesToShow: 1,
      //     centerMode: false,
      //   },
      // },
    ],
  });
  $(".travel .holder__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      ' <img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="" />',
    nextArrow:
      ' <img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="" />',
    asNavFor: ".surf-slider, .slider-map, .sleep .holder__slider",
  });
  $(".sleep .holder__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      ' <img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="" />',
    nextArrow:
      ' <img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="" />',
    asNavFor: ".surf-slider, .slider-map, .travel .holder__slider",
  });
  $(".shop__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      ' <img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="" />',
    nextArrow:
      ' <img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="" />',
  });

  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="" /></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="" /></div></div>'
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  function calcSumm() {
    let parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".summ", parents).data("nights") *
      $(".nights", parents).val() *
      $(".guests", parents).val();
    $(".summ", parents).html("$" + Math.ceil(summ));
  }

  $(".quantity").each(calcSumm);
  $(".quantity-button").on("click", calcSumm);

  $(".surfboard-box__circle").on("click", function () {
    if (this !== document.querySelector(".surfboard-box__circle.active")) {
      $(".surfboard-box__circle.active").toggleClass("active");
    }
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });
});
