import Routes from '../routes/index.js';

export const addRouteClick = () => {
  console.log('chamou o route');
  const routesClick = [].slice.call(document.querySelectorAll('.click-route'));
  routesClick.map(element => {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      const page = this.href.replace(/^.*\//g, '');
      const main = document.querySelector('main');
      const getAttributePage = main.getAttribute('page');
      if (page !== getAttributePage) {
        const routes = new Routes(page);
        routes.render();
        updateClick(main, page);
      }
    });
  });
};

export const updateClick = (main, page) => {
  main.setAttribute('page', page);
  const routes = new Routes(page);
  routes.render();
};
