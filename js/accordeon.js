const accordeon = document.querySelector('.accordeon');

const array = accordeon.querySelectorAll('.accordeon__btn')


array.forEach(e => {
  e.addEventListener('click', () => {
    const text = e.nextElementSibling;

    if (text.style.maxHeight) {
      accordeon.querySelectorAll('.accordeon__text').forEach(e => e.style.maxHeight = null);
      array.forEach(e => e.classList.remove('accordeon__btn--active'));
    }
    else {
      array.forEach(e => e.classList.remove('accordeon__btn--active'));
      e.classList.add('accordeon__btn--active');
      accordeon.querySelectorAll('.accordeon__text').forEach(e => e.style.maxHeight = null);
      text.style.maxHeight = text.scrollHeight + 'px';

    }
  })
})

array[0].click();