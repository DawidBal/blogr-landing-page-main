const productMobile = document.querySelector('.js-product-mobile');
const companyMobile = document.querySelector('.js-company-mobile');
const connectMobile = document.querySelector('.js-connect-mobile');

const productMenuMobile = document.querySelector('.js-prod-mobile');
const companyMenuMobile = document.querySelector('.js-comp-mobile');
const connectMenuMobile = document.querySelector('.js-conn-mobile');

const menus = [productMenuMobile, companyMenuMobile, connectMenuMobile];
const eventList = [productMobile, companyMobile, connectMobile];

const hideOtherMobileMenus = (menuToSkip, eventTarget) => {
  menus.forEach(menu => {
    if (menu !== menuToSkip) {
      const icon = menu.parentElement.querySelector('.icon');
      menu.classList.add('hidden--mobile');
      menu.classList.remove('menu__col--active');
      icon.classList.remove('icon--active');
    }
  });

  eventList.forEach(item => {
    if (item !== eventTarget) {
      item.setAttribute('aria-expanded', false);
    }
  })
}

const toggleMobileMenu = (menu, eventTarget) => {
  const icon = eventTarget.parentElement.querySelector('.icon');
  eventTarget.setAttribute('aria-expanded', menu.classList.contains('hidden--mobile'));
  toggleIcon(icon);
  menu.classList.toggle('hidden--mobile');
  menu.classList.toggle('menu__col--active');
}

const toggleIcon = (icon) => {
  icon.classList.toggle('icon--active')
}

export { hideOtherMobileMenus, toggleMobileMenu }