import Page from '../pages/index.js';
import Action from './action.js';

export default class Routes {
  route;

  constructor(route) {
    this.route = route;
  }

  mount() {
    const action = new Action();
    action.addEventClick();
  }

  render() {
    window.scrollTo(0, 0);
    const page = new Page(this.route);
    document.querySelector('main').innerHTML = page.start();
    this.setHash(this.route);
    this.mount();
  }

  setHash(route) {
    window.location.hash = `#/${route}`;
  }
}
