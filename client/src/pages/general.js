import footer from '../shared/footer.js';
import headerBar from '../shared/header-bar.js';
import menuBar from '../shared/menu-bar.js';

const general = () => {
  return `
    ${headerBar()}
    ${menuBar()}
    <div class="bg">
      <div class="container py-5">
        <div class="alert alert-dark" role="alert">
          Os seguintes bosses estão desafiando este mundo:
        </div>
        <div class="alert alert-dark" role="alert">
          Os seguintes bosses estão desafiando este mundo:
        </div>
        <h1 class="h1-decorative mt-5 text-center">Status</h1>
        <hr/>
      </div>
    </div>
    ${footer()}
  `;
};

export default general;
