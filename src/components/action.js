import { changeLanguage } from '../languages/index.js';
import Routes from './routes.js';

export default class Action {
  addRouteClick() {
    const self = this;
    this.routeSelectorAll().map(element => {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        const page = this.href.replace(/^.*\//g, '');
        const main = document.querySelector('main');
        const getAttributePage = main.getAttribute('page');
        if (page !== getAttributePage) {
          self.updateClick(main, page);
        }
      });
    });
  }

  addEventClick() {
    this.addRouteClick();
    this.addLanguageClick();
  }

  addLanguageClick() {
    const languagesClick = [].slice.call(
      document.querySelectorAll('.click-language')
    );
    languagesClick.map(element => {
      element.addEventListener('click', changeLanguage);
    });
  }

  removeRouteActiveClick() {
    this.routeSelectorAll().map(element => {
      element.classList.remove('active');
    });
  }

  routeSelectorAll() {
    const routesClick = [].slice.call(
      document.querySelectorAll('.click-route')
    );
    return routesClick;
  }

  updateClick(main, page) {
    main.setAttribute('page', page);
    const routes = new Routes(page);
    routes.render();
    const element = document.getElementById(page);
    if (element) {
      this.removeRouteActiveClick();
      element.classList.add('active');
    }
    this.addEventClick();
  }
}
