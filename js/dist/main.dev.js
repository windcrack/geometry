"use strict";

var footerBlock = $('#footer').offset().top;
var footerBlockHeight = $('#footer').height();
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 10610) {
    $('.aside-lang__call').addClass('aside-lang__call_active');
    $('.aside-social__img').addClass('aside-social__img_active');
  } else {
    $('.aside-lang__call').removeClass('aside-lang__call_active');
    $('.aside-social__img').removeClass('aside-social__img_active');
  }
});
$(".consultation-form__input").mask("+7(999)999-99-99");