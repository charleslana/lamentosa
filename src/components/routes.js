import Page from '../pages/index.js';
import { renderLanguage } from '../languages/index.js';

export default class Routes {
  route;

  constructor(route) {
    this.route = route;
  }

  render() {
    window.scrollTo(0, 0);
    const page = new Page(this.route);
    document.querySelector('main').innerHTML = page.start();
    renderLanguage();
    this.setHash(this.route);
  }

  setHash(route) {
    window.location.hash = `#/${route}`;
  }
}
