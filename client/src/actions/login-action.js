import Routes from '../routes/index.js';
import route from '../routes/route.js';

const addLoginClick = () => {
  const element = document.querySelector('main[page=home] form');
  if (element) {
    element.addEventListener('submit', function (event) {
      event.preventDefault();
      const routes = new Routes(route.general);
      routes.render();
    });
  }
};

export default addLoginClick;
