import portuguese from './portuguese.js';
import english from './english.js';
import spanish from './spanish.js';

export const getLanguage = () => {
  const getStorage = localStorage.getItem('language');
  return getStorage === 'pt' || !getStorage
    ? portuguese
    : getStorage === 'es'
    ? spanish
    : english;
};

export const changeLanguage = event => {
  localStorage.setItem(
    'language',
    event.currentTarget.getAttribute('data-language')
  );
  renderLanguage();
};

export const renderLanguage = () => {
  let element;
  element = document.querySelector('main[page=home] h1.text-center');
  if (element != null) {
    element.innerHTML = getLanguage().homeTitle;
  }
  element = document.querySelectorAll('a.nav-link.click-route')[0];
  if (element != null) {
    element.innerHTML = getLanguage().navBarLogin;
  }
  element = document.querySelectorAll('a.nav-link.click-route')[1];
  if (element != null) {
    element.innerHTML = getLanguage().navBarRegister;
  }
  element = document.querySelector('footer p.d-inline.mb-1');
  if (element != null) {
    element.innerHTML = getLanguage().footerAuthorDescription;
  }
  element = document.querySelectorAll('footer p.d-inline')[2];
  if (element != null) {
    element.innerHTML = getLanguage().footerAllRightsReserved;
  }
  element = document.querySelector('footer a.d-inline');
  if (element != null) {
    element.innerHTML = getLanguage().footerDeveloperPage;
  }
  element = document.querySelector('footer a p');
  if (element != null) {
    element.innerHTML = getLanguage().footerAccessDiscord;
  }
  element = document.querySelector('footer button.btn-no-style');
  if (element != null) {
    element.innerHTML = getLanguage().footerBackToTop;
  }
  element = document.querySelectorAll(
    'main[page=home] h5.card-title.text-start.mb-4'
  )[0];
  if (element != null) {
    element.innerHTML = getLanguage().homeRegister;
  }
  element = document.querySelector(
    'main[page=home] a.btn.btn-primary.click-route'
  );
  if (element != null) {
    element.innerHTML = getLanguage().homeRegister;
  }
  element = document.querySelector(
    'main[page=home] a.btn.btn-primary.click-route'
  );
  if (element != null) {
    element.innerHTML = getLanguage().homeRegister;
  }
  element = document.querySelectorAll(
    'main[page=home] h5.card-title.text-start.mb-4'
  )[1];
  if (element != null) {
    element.innerHTML = getLanguage().homeLogin;
  }
  element = document.querySelector('main[page=home] button.btn.btn-primary');
  if (element != null) {
    element.innerHTML = getLanguage().homeLogin;
  }
  element = document.getElementById('email');
  if (element != null) {
    element.placeholder = getLanguage().homeLoginEmail;
  }
  element = document.getElementById('password');
  if (element != null) {
    element.placeholder = getLanguage().homeLoginPassword;
  }
};
