import navBar from '../shared/nav-bar.js';

const notFound = () => {
  return `
    ${navBar()}
    <div class="container text-center">
      <h1 class="mb-5">Página não encontrada</h1>
      <a class="btn btn-primary click-action" href="/home" role="button">Ir para a Home</a>
    </div>
  `;
};

export default notFound;
