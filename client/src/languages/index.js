import portuguese from './portuguese.js';
import english from './english.js';
import spanish from './spanish.js';

export const addLanguageClick = () => {
  const languagesClick = [].slice.call(
    document.querySelectorAll('.click-language')
  );
  languagesClick.map(element => {
    element.addEventListener('click', changeLanguage);
  });
};

export const getLanguage = () => {
  const getStorage = localStorage.getItem('language');
  if (getStorage == null) {
    const language = navigator.language;
    let array = [];
    array = language.split('-');
    return array[0] === 'pt'
      ? portuguese
      : getStorage === 'es'
      ? spanish
      : english;
  }
  return getStorage === 'pt'
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
  element = document.querySelectorAll('a.nav-link.click-route')[0];
  if (element) {
    element.innerHTML = getLanguage().navBarLogin;
  }
  element = document.querySelectorAll('a.nav-link.click-route')[1];
  if (element) {
    element.innerHTML = getLanguage().navBarRegister;
  }
  element = document.querySelector('footer p.d-inline.mb-1');
  if (element) {
    element.innerHTML = getLanguage().footerAuthorDescription;
  }
  element = document.querySelectorAll('footer p.d-inline')[2];
  if (element) {
    element.innerHTML = getLanguage().footerAllRightsReserved;
  }
  element = document.querySelector('footer a.d-inline');
  if (element) {
    element.innerHTML = getLanguage().footerDeveloperPage;
  }
  element = document.querySelector('footer a p');
  if (element) {
    element.innerHTML = getLanguage().footerAccessDiscord;
  }
  element = document.querySelector('footer button.btn-no-style');
  if (element) {
    element.innerHTML = getLanguage().footerBackToTop;
  }
  element = document.querySelector('main[page=home] h1.text-center');
  if (element) {
    element.innerHTML = getLanguage().homeTitle;
  }
  element = document.querySelectorAll(
    'main[page=home] h5.card-title.text-start.mb-4'
  )[0];
  if (element) {
    element.innerHTML = getLanguage().homeLogin;
  }
  element = document.querySelector('main[page=home] button.btn.btn-primary');
  if (element) {
    element.innerHTML = getLanguage().homeLogin;
  }
  element = document.querySelector('main[page=home] #email');
  if (element) {
    element.placeholder = getLanguage().homeLoginEmail;
  }
  element = document.querySelector('main[page=home] #password');
  if (element) {
    element.placeholder = getLanguage().homeLoginPassword;
  }
  element = document.querySelectorAll(
    'main[page=home] h5.card-title.text-start.mb-4'
  )[1];
  if (element) {
    element.innerHTML = getLanguage().homeRegister;
  }
  element = document.querySelector(
    'main[page=home] a.btn.btn-primary.click-route'
  );
  if (element) {
    element.innerHTML = getLanguage().homeRegister;
  }
  element = document.querySelector(
    'main[page=home] a.btn.btn-primary.click-route'
  );
  if (element) {
    element.innerHTML = getLanguage().homeRegister;
  }
  element = document.querySelector('main[page=register] h1.text-center.mb-5');
  if (element) {
    element.innerHTML = getLanguage().registerTitle;
  }
  element = document.querySelectorAll(
    'main[page=register] label.form-label'
  )[0];
  if (element) {
    element.innerHTML = getLanguage().registerEmail;
  }
  element = document.querySelectorAll(
    'main[page=register] label.form-label'
  )[1];
  if (element) {
    element.innerHTML = getLanguage().registerName;
  }
  element = document.querySelectorAll(
    'main[page=register] label.form-label'
  )[2];
  if (element) {
    element.innerHTML = getLanguage().registerBreed;
  }
  element = document.querySelector('main[page=register] #breed');
  if (element) {
    element.options[0].innerHTML = getLanguage().registerSelectBreed;
  }
  element = document.querySelector('main[page=register] #breed');
  if (element) {
    element.options[1].innerHTML = getLanguage().registerSelectBreedVampire;
  }
  element = document.querySelector('main[page=register] #breed');
  if (element) {
    element.options[2].innerHTML = getLanguage().registerSelectBreedWerewolf;
  }
  element = document.querySelectorAll(
    'main[page=register] label.form-label'
  )[3];
  if (element) {
    element.innerHTML = getLanguage().registerGender;
  }
  element = document.querySelector('main[page=register] #gender');
  if (element) {
    element.options[0].innerHTML = getLanguage().registerSelectGender;
  }
  element = document.querySelector('main[page=register] #gender');
  if (element) {
    element.options[1].innerHTML = getLanguage().registerSelectGenderMasculine;
  }
  element = document.querySelector('main[page=register] #gender');
  if (element) {
    element.options[2].innerHTML = getLanguage().registerSelectGenderFeminine;
  }
  element = document.querySelectorAll(
    'main[page=register] label.form-label'
  )[4];
  if (element) {
    element.innerHTML = getLanguage().registerPassword;
  }
  element = document.querySelectorAll(
    'main[page=register] label.form-label'
  )[5];
  if (element) {
    element.innerHTML = getLanguage().registerConfirmPassword;
  }
  element = document.querySelectorAll('main[page=register] small')[0];
  if (element) {
    element.innerHTML = getLanguage().registerRulesDescription;
  }
  element = document.querySelector('main[page=register] small a.click-route');
  if (element) {
    element.innerHTML = getLanguage().registerRulesLink;
  }
  element = document.querySelector(
    'main[page=register] button.btn.btn-primary'
  );
  if (element) {
    element.innerHTML = getLanguage().registerTransform;
  }
  element = document.getElementById('titleNotFound');
  if (element) {
    element.innerHTML = getLanguage().notFoundTitle;
  }
  element = document.getElementById('btnNotFound');
  if (element) {
    element.innerHTML = getLanguage().notFoundButton;
  }
};
