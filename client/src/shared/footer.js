import { urlDiscord, urlDeveloper } from '../utils/config.js';

const footer = () => {
  return `
  <footer class="text-muted py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12 mb-2">
          <p class="d-inline">${new Date().getFullYear()}</p>
          <p class="d-inline mb-1"> © Lamentosa Privado por Charles Lana</p>
          <br/>
          <p class="d-inline">Todos os direitos reservados.</p>
          <a href="${urlDeveloper}" target="_blank" class="d-inline">Visite a página do desenvolvedor.</a>
        </div>
        <div class="col-md-3 col-12 mb-2 text-center">
          <a href="${urlDiscord}" target="_blank">
            <div>
              <p>Acesse o nosso Discord!</p>
              <i class="fa-brands fa-discord h1"></i>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-12 mb-2 text-center">
          <button class="btn-no-style" onclick="window.scrollTo(0, 0)">Voltar para cima</button>
        </div>
      </div>
    </div>
  </footer>
  `;
};

export default footer;
