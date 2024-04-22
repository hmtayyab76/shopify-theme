"use strict";

function slider() {
  var el = document.querySelector('.c-slider__products');
  if (!el) {
    return;
  }
  var swiper = new Swiper(el, {
    autoplay: true,
    effect: 'fade',
    // If we need pagination
    pagination: {
      el: ".c-slider__pagination",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        var color = '#F1B434';
        if (this.slides[index].dataset.color) {
          color = this.slides[index].dataset.color;
        }
        var umf = 'Manuka Honey';
        if (this.slides[index].dataset.paginationText) {
          umf = 'UMF™ ' + this.slides[index].dataset.paginationText;
        } else {
          umf = this.slides[index].dataset.name;
        }
        return '<span style="--product-color:' + color + ';" class="c-slider__pagination__bullet ' + className + '">' + umf + '</span>';
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  swiper.slideTo(2, false, false);
  swiper.autoplay.start();
}
slider();