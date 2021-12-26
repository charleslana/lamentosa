import footer from '../shared/footer.js';
import headerBar from '../shared/header-bar.js';
import menuBar from '../shared/menu-bar.js';
import modalLarge from '../shared/modal-large.js';

const general = () => {
  return `
    ${headerBar()}
    ${menuBar()}
    <div class="bg">
      <div class="container py-5 text-center">
        <div class="alert alert-dark" role="alert">
          Os seguintes bosses estão desafiando este mundo:
        </div>
        <div class="alert alert-dark" role="alert">
          Os seguintes bosses estão desafiando este mundo:
        </div>
        <h1 class="h1-decorative mt-5">Status</h1>
        <hr/>
        <h2 class="h2-decorative">Amaldiçoado Premium</h2>
        <div class="mt-3 fs-0-8">Transformou-se em vampiro em 25 de Dezembro de 2021 às 14:25</div>
        <button class="btn-no-style fs-0-8">Solteiro(a) <i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
    ${footer()}
    ${modalLarge()}
  `;
};

export default general;
