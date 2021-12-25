import Action from './components/action.js';

document.addEventListener('DOMContentLoaded', () => {
  let pageDefault = 'home';
  const hash = window.location.hash.substring(2);
  if (!!hash) {
    pageDefault = hash;
  }
  const action = new Action();
  action.addEventClick();
  action.updateClick(document.querySelector('main'), pageDefault);
});
