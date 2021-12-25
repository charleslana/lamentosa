import notFound from '../pages/not-found.js';
import home from '../pages/home.js';
import register from '../pages/register.js';
import general from '../pages/general.js';
import route from '../components/route.js';

export default class Page {
  page;

  constructor(page) {
    this.page = page;
  }

  start() {
    switch (this.page) {
      case route.home:
        return home();
      case route.register:
        return register();
      case route.general:
        return general();
      default:
        return notFound();
    }
  }
}
