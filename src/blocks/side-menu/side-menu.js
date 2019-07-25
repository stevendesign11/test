import $ from 'jquery';

$(() => {
  $('.side-menu-toggle').on('click', (e) => {
    e.stopPropagation();
    $('body').toggleClass('side-visible');
  });
});
