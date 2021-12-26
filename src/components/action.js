import { changeLanguage, renderLanguage } from '../languages/index.js';
import route from './route.js';
import Routes from './routes.js';

export default class Action {
  addEventClick() {
    this.addRouteClick();
    this.addLanguageClick();
    this.addLoginClick();
    this.addRegisterClick();
    this.addLogoutClick();
    this.listenerModal();
  }

  addLanguageClick() {
    renderLanguage();
    const languagesClick = [].slice.call(
      document.querySelectorAll('.click-language')
    );
    languagesClick.map(element => {
      element.addEventListener('click', changeLanguage);
    });
  }

  addLoginClick() {
    const self = this;
    const element = document.querySelector('main[page=home] form');
    if (element) {
      element.addEventListener('submit', function (event) {
        event.preventDefault();
        const routes = new Routes(route.general);
        routes.render();
      });
    }
  }

  addLogoutClick() {
    const self = this;
    const element = document.getElementById('logout');
    if (element) {
      element.addEventListener('click', function () {
        const routes = new Routes(route.home);
        routes.render();
      });
    }
  }

  addRegisterClick() {
    const self = this;
    const element = document.querySelector('main[page=register] form');
    if (element) {
      element.addEventListener('submit', function (event) {
        event.preventDefault();
        self.saveAccount();
        const routes = new Routes(route.home);
        routes.render();
      });
    }
  }

  addRouteClick() {
    console.log('chamou o route');
    const self = this;
    this.routeSelectorAll().map(element => {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        const page = this.href.replace(/^.*\//g, '');
        const main = document.querySelector('main');
        const getAttributePage = main.getAttribute('page');
        if (page !== getAttributePage) {
          const routes = new Routes(page);
          routes.render();
          self.updateClick(main, page);
        }
      });
    });
  }

  listenerModal() {
    const element = document.getElementById('myModal');
    if (element) {
      element.addEventListener('hidden.bs.modal', function () {
        element.remove();
      });
    }
  }

  routeSelectorAll() {
    const routesClick = [].slice.call(
      document.querySelectorAll('.click-route')
    );
    return routesClick;
  }

  saveAccount() {
    document.getElementById('modalTitle').innerText = 'Registrar';
    document.getElementById('modalDescription').innerText =
      'Cadastro realizado com sucesso. Faça o Login em sua conta!';
    const myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
    myModal.show();
  }

  updateClick(main, page) {
    main.setAttribute('page', page);
    const routes = new Routes(page);
    routes.render();
  }
}
