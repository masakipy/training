$(function () {
  $(".slider").slick({
    autoplay: false,
    fade: true,
    arrows: false,
    asNavFor: ".thumbnail",
  });
  $(".thumbnail").slick({
    slidesToShow: 3,
    asNavFor: ".slider",
    focusOnSelect: true,
  });
});