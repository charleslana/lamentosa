import Routes from '../routes/index.js';
import route from '../routes/route.js';
import { showOverlay, hideOverlay } from '../utils/index.js';
import { modalAlert } from './modal-action.js';

const addLoginClick = () => {
  const element = document.querySelector('main[page=home] form');
  if (element) {
    element.addEventListener('submit', function (event) {
      event.preventDefault();
      login();
    });
  }
};

const login = () => {
  if (!fetchLogin()) {
    modalAlert('Login', 'Credenciais invalidas');
    return;
  }
  setTimeout(function () {
    const routes = new Routes(route.general);
    routes.render();
    hideOverlay();
  }, 1000);
};

const fetchLogin = () => {
  showOverlay();
  return true;
};

export default addLoginClick;
