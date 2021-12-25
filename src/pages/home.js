import navBar from '../shared/nav-bar.js';
import footer from '../shared/footer.js';

const home = () => {
  return `
    ${navBar()}
    <div class="container linear">
      <h1 class="text-center">Vampiros VS Lobisomens</h1>
      <hr/>
      <h2 class="text-center mb-5">MMORPG</h2>
      <div class="row">
        <div class="col d-flex justify-content-center mb-5 animate__animated animate__fadeInLeft">
          <div class="card bg-dark text-white">
            <div class="card-body text-center">
              <h5 class="card-title text-start mb-4">Registre-se</h5>
              <a class="btn btn-primary click-route" href="/register" role="button">Registre-se</a>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center mb-5 animate__animated animate__fadeInRight">
          <div class="card bg-dark text-white">
            <div class="card-body text-center">
              <h5 class="card-title text-start mb-4">Entrar</h5>
              <form>
                <div class="mb-3">
                  <input type="email" class="form-control" id="email" placeholder="Email" required>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password" placeholder="Senha" required>
                </div>
                <button type="submit" class="btn btn-primary">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${footer()}
  `;
};

export default home;
