import navBar from '../shared/nav-bar.js';

const notFound = () => {
  return `
    ${navBar()}
    <div class="container text-center">
      <h1 class="mb-5" id="titleNotFound">Página não encontrada</h1>
      <a class="btn btn-primary click-route" href="/home" role="button" id="btnNotFound">Ir para a Home</a>
    </div>
  `;
};

export default notFound;
