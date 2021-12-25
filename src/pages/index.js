import notFound from '../pages/not-found.js';
import home from '../pages/home.js';
import register from '../pages/register.js';

export default class Page {
  page;

  constructor(page) {
    this.page = page;
  }

  start() {
    switch (this.page) {
      case 'home':
        return home();
      case 'register':
        return register();
      default:
        return notFound();
    }
  }
}
