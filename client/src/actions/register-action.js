import { modalAlert } from './modal-action.js';
import route from '../routes/route.js';
import Routes from '../routes/index.js';

const addRegisterClick = () => {
  const element = document.querySelector('main[page=register] form');
  if (element) {
    element.addEventListener('submit', function (event) {
      event.preventDefault();
      saveAccount();
      const routes = new Routes(route.home);
      routes.render();
    });
  }
};

const saveAccount = () => {
  modalAlert(
    'Registrar',
    'Cadastro realizado com sucesso. Faça o Login em sua conta!'
  );
};

export default addRegisterClick;
