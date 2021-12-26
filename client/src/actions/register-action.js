import { modalAlert } from './modal-action.js';
import route from '../routes/route.js';
import Routes from '../routes/index.js';
import { hideOverlay, showOverlay } from '../utils/index.js';

const addRegisterClick = () => {
  const element = document.querySelector('main[page=register] form');
  if (element) {
    element.addEventListener('submit', function (event) {
      event.preventDefault();
      saveAccount();
    });
  }
};

const saveAccount = () => {
  if (!fetchCreateAccount()) {
    modalAlert('Registrar', 'Já existe o nome criado, tente outro nome.');
    return;
  }
  setTimeout(function () {
    modalAlert(
      'Registrar',
      'Cadastro realizado com sucesso. Faça o Login em sua conta!'
    );
    redirectPage();
    hideOverlay();
  }, 1000);
};

const redirectPage = () => {
  const myModal = document.getElementById('myModal');
  myModal.addEventListener('hidden.bs.modal', function () {
    const routes = new Routes(route.home);
    routes.render();
  });
};

const fetchCreateAccount = () => {
  showOverlay();
  return true;
};

export default addRegisterClick;
