// show & hide menu, scroll block, compensate scrollbar-padding, esc menu if resize
const burger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  menuItems = document.querySelectorAll('.menu__link a'),
  menuSocialLinks = document.querySelectorAll('.menu__socials a'),
  closeBtn = document.querySelector('.menu__close'),
  fill = document.querySelector('.menu__fill'),
  clicMeToCloseMenu = [...menuItems, ...menuSocialLinks, closeBtn, fill];

// get scrollbar width
const getScrollbarWidth = () => {
  const outer = document.createElement('div');

  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';

  document.body.appendChild(outer);
  const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollBarWidth;
}

// hide & show scroll - func
const hideScroll = () => {
  const scrollWidth = `${getScrollbarWidth()}px`;

  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = 'hidden';
}
const showScroll = () => {
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
}
if (menu.classList.contains('active')) {
  hideScroll();
} else {
  showScroll();
}

// show menu, hide scroll
const showMenu = () => {
  menu.classList.add('active');
  hideScroll();
};
// close menu - func
const closeMenu = () => {
  menu.classList.remove('active');
  showScroll();
};

// show menu & hide scroll, if user click burger
burger.addEventListener('click', showMenu);

// close menu & show scroll, if user click close // menu // fill
clicMeToCloseMenu.forEach(item => {
  item.addEventListener('click', closeMenu);
});
// close menu & show scroll, IF USER START TO RESIZE WINDOW
window.addEventListener('resize', closeMenu);


// skills - progress bars
const skillsSkales = document.querySelectorAll('.skills__percent'),
  skillsProgressSkales = document.querySelectorAll('.skills__skale__progress');

skillsSkales.forEach((item, i) => {
  skillsProgressSkales[i].style.width = item.innerHTML;
});
