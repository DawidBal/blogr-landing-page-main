export const toggleHamburger = () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.js-mobile-nav');
  if (hamburger.classList.contains('hamburger--active')) {
    hamburger.classList.remove('hamburger--active');
    mobileNav.classList.remove('fade-top-in');
    mobileNav.classList.add('fade-top-out');
  } else {
    hamburger.classList.add('hamburger--active');
    mobileNav.classList.add('fade-top-in');
    mobileNav.classList.remove('fade-top-out');
  }
  
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
};