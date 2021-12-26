import Action from './components/action.js';

document.addEventListener('DOMContentLoaded', () => {
  let pageDefault = 'home';
  const hash = window.location.hash.substring(2);
  if (!!hash) {
    pageDefault = hash;
  }
  const action = new Action();
  action.updateClick(document.querySelector('main'), pageDefault);
});

window.addEventListener('popstate', function (event) {
  const page = window.location.hash.substring(2);
  const main = document.querySelector('main');
  const getAttributePage = main.getAttribute('page');
  if (page !== getAttributePage) {
    console.log('popstate diferente');
    const action = new Action();
    action.updateClick(main, page);
  }
});
