import Routes from '../routes/index.js';
import route from '../routes/route.js';

const addLogoutClick = () => {
  const element = document.getElementById('logout');
  if (element) {
    element.addEventListener('click', function () {
      const routes = new Routes(route.home);
      routes.render();
    });
  }
};

export default addLogoutClick;
