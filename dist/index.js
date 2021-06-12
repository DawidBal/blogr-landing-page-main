import { toggleHamburger } from "./hamburger.js";
import { toggleMenu, hideOtherMenus } from "./desktopNav.js";
import { toggleMobileMenu, hideOtherMobileMenus} from './mobileNav.js';


// Desktop navigation refs
const product = document.querySelector('.js-product');
const company = document.querySelector('.js-company');
const connect = document.querySelector('.js-connect');

const productMenu = document.querySelector('.product__menu');
const companyMenu = document.querySelector('.company__menu');
const connectMenu = document.querySelector('.connect__menu');

const dekstopNav = [product, company, connect];

// Mobile navigation refs
const productMobile = document.querySelector('.js-product-mobile');
const companyMobile = document.querySelector('.js-company-mobile');
const connectMobile = document.querySelector('.js-connect-mobile');

const productMenuMobile = document.querySelector('.js-prod-mobile');
const companyMenuMobile = document.querySelector('.js-comp-mobile');
const connectMenuMobile = document.querySelector('.js-conn-mobile');

const mobileNav = [productMobile, companyMobile, connectMobile];
const hamburger = document.querySelector('.hamburger');


// Desktop navigation events
dekstopNav.forEach(item => {
  item.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case "Product":
        toggleMenu(productMenu, e.target);
        hideOtherMenus(productMenu, e.target);
        break;
      case "Company":
        toggleMenu(companyMenu, e.target);
        hideOtherMenus(companyMenu, e.target);
        break;
      case "Connect":
        toggleMenu(connectMenu, e.target);
        hideOtherMenus(connectMenu, e.target);
        break;
      default:
        break;
    }
  })
})

// Mobile navigation events

mobileNav.forEach(item => {
  item.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case "Product":
        toggleMobileMenu(productMenuMobile, e.target);
        hideOtherMobileMenus(productMenuMobile, e.target);
        break;
      case "Company":
        toggleMobileMenu(companyMenuMobile, e.target);
        hideOtherMobileMenus(companyMenuMobile, e.target);
        break;
      case "Connect":
        toggleMobileMenu(connectMenuMobile, e.target);
        hideOtherMobileMenus(connectMenuMobile, e.target);
        break;
      default:
        break;
    }
  })
})

hamburger.addEventListener('click', () => {
  toggleHamburger();
})



const allEmptyLinks = document.querySelectorAll('a[href="#"]');
allEmptyLinks.forEach(link => link.addEventListener('click', (e) => e.preventDefault()));