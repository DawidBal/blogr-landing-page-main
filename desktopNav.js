
const product = document.querySelector('.js-product');
const company = document.querySelector('.js-company');
const connect = document.querySelector('.js-connect');

const productMenu = document.querySelector('.product__menu');
const companyMenu = document.querySelector('.company__menu');
const connectMenu = document.querySelector('.connect__menu');

const menus = [productMenu, companyMenu, connectMenu];
const eventList = [product, company, connect];

  const hideOtherMenus = (menuToSkip, eventTarget) => {
    menus.forEach(menu => {
      if (menu !== menuToSkip) {
        const icon = menu.parentElement.querySelector('.icon');
        menu.classList.add('hidden');
        icon.classList.remove('icon--active');
      }
    });

    eventList.forEach(item => {
      if (item !== eventTarget) {
        item.setAttribute('aria-expanded', false);
      }
    })
  }

  const toggleMenu = (menu, eventTarget) => {
    const icon = eventTarget.parentElement.querySelector('.icon');
    eventTarget.setAttribute('aria-expanded', menu.classList.contains('hidden'));
    toggleIcon(icon);
    menu.classList.toggle('hidden');
  }

  const toggleIcon = (icon) => {
    icon.classList.toggle('icon--active')
  }

  export { hideOtherMenus, toggleMenu }