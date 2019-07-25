import $ from 'jquery';

$(() => {
  $('.js-show-modal').on('click', (e) => {
    const modal = $($(e.target).attr('href'));
    modal.addClass('modal--visible');
    $('body').addClass('page__body--modal-visible');
    return false;
  });

  $('.modal__btn-close').on('click', (e) => {
    const modal = $(e.target).closest('.modal');
    modal.removeClass('modal--visible');
    $('body').removeClass('page__body--modal-visible');
    return false;
  });
});
