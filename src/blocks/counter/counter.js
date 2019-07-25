import $ from 'jquery';

$(() => {
  $('.counter').on('click', '.counter__btn', (e) => {
    const btn = $(e.target);
    const counter = $(e.target).closest('.counter');
    const counterInput = $('.counter__input', counter);
    if (btn.hasClass('counter__btn--dec')) {
      counterInput.val(Number(counterInput.val()) - 1);
    }
    if (btn.hasClass('counter__btn--inc')) {
      counterInput.val(Number(counterInput.val()) + 1);
    }
  });
});
