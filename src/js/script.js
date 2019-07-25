import $ from 'jquery';
import 'bootstrap';

$(() => {
  const menuToggle = $('.page-header__menu-toggle');
  const mainNav = $('.main-nav');
  menuToggle.on('click', () => {
    mainNav.toggleClass('main-nav--visible');
  });

  $('.select').niceSelect();

  $('.side-menu .dropdown-menu').on('click', (e) => {
    e.stopPropagation();
  });
});
