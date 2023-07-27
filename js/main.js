const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper__button-next'
  },
  keyboard: {
    enabled: true,
    onlyInVewport: true,
    pageUpDown: true
  },
  pagination: {
    el: '.swiper-pagination',
  },
  effect: 'cards',
  cardsEffect: {
    rotate: false,
    perSlideOffset: 12,
    slideShadows: false,
  },
  loop: true,
  grabCursor: true,
})