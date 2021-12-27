import { updateClick } from './actions/route-action.js';
import route from './routes/route.js';

document.addEventListener('DOMContentLoaded', () => {
  let pageDefault = route.home;
  const hash = window.location.hash.substring(2);
  if (!!hash) {
    pageDefault = hash;
  }
  updateClick(document.querySelector('main'), pageDefault);
});

window.addEventListener('popstate', function (event) {
  const page = window.location.hash.substring(2);
  const main = document.querySelector('main');
  const getAttributePage = main.getAttribute('page');
  if (page !== getAttributePage) {
    console.log('popstate diferente');
    updateClick(main, page);
  }
});
