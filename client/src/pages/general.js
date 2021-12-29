import footer from '../shared/footer.js';
import headerBar from '../shared/header-bar.js';
import menuBar from '../shared/menu-bar.js';
import modalLarge from '../shared/modal-large.js';

const general = () => {
  let item = `
    <div class="swiper mySwiper">
    <div class="swiper-wrapper">
  `;
  [0, 1, 2, 3, 4, 5, 6].map(it => {
    item += `
      <button class='btn-no-style swiper-slide'>
        <div class='inventory-empty-slot p-3'>
          <div class='item-level'>1</div>
          <div class='item' style='background-image:url("assets/images/items/1.png")'></div>
        </div>
      </button>
    `;
  });
  item += `
    </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>`;
  return `
    ${headerBar()}
    <div class="bg position-relative z-0">
      ${menuBar()}
      <div class="container pt-5 text-center">
        <div class="alert alert-dark" role="alert">
          Os seguintes bosses estão desafiando este mundo:
        </div>
        <h1 class="h1-decorative mt-5">Status</h1>
        <hr/>
        <h2 class="h2-decorative">Amaldiçoado Premium</h2>
        <div class="mt-3 fs-0-8">Transformou-se em vampiro em 25 de Dezembro de 2021 às 14:25</div>
        <button class="btn-no-style fs-0-8">Solteiro(a) <i class="fa-solid fa-magnifying-glass"></i></button>
        <div class="row mt-5">
          <div class="col-12 col-lg-7 mb-5">
            <div class="row">
              <div class="col-12 col-sm-3 mb-3 inventory d-grid justify-content-center">
                ${item}
              </div>
              <div class="col-12 col-sm-6 mb-3">
                <div class="profile-bg mx-auto">
                  <img src="assets/images/avatars/vampire/male/12.jpg" alt="Profile Avatar">
                  <div class="breed-vampire"></div>
                  <div class="level">1</div>
                  <div class="name ms-5 text-start">Charles</div>
                  <div class="position mt-2">Assistente de Coveiro</div>
                  <div class="age">26 anos | masculino</div>
                </div>
              </div>
              <div class="col-12 col-sm-3 mb-3 inventory">
                <button class='btn-no-style pb-3'>
                  <div class="empty-head-slot"></div>
                </button>
                <button class='btn-no-style pb-3'>
                  <div class="empty-neck-slot"></div>
                </button>
                <button class='btn-no-style pb-3'>
                  <div class="empty-torso-slot"></div>
                </button>
                <button class='btn-no-style pb-3'>
                  <div class="empty-hand-slot"></div>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-3 col-sm-2 offset-sm-2 cursor-help" data-bs-toggle="tooltip" title="Seu Ouro">
                <div class="icon-gold icon-status text-gold">3.000</div>
              </div>
              <div class="col-3 col-sm-2 vertical-divider cursor-help" data-bs-toggle="tooltip" title="Poder de Luta: Baseado em suas habilidades desconsiderando equipamentos.">
                <div class="icon-power icon-status">12</div>
              </div>
              <div class="col-3 col-sm-2 vertical-divider cursor-help" data-bs-toggle="tooltip" title="Combatividade: Número de vitórias contra a raça inimiga nas últimas 24 horas. Ajuda seu clã a reduzir o custo no treino de atributos. Limit: 30">
                <div class="icon-combat icon-status">0</div>
              </div>
              <div class="col-3 col-sm-2 vertical-divider cursor-help" data-bs-toggle="tooltip" title="Vitórias do Grimório: Usado para aprender magias após o nível 10.">
                <div class="icon-grimoire icon-status">0</div>
              </div>
              <div class="offset-sm-2"></div>
            </div>
          </div>
          <div class="col-12 col-lg-5 mb-5">
            <h6 class="text-start mb-0">Experiência</h6>
            <div class="progress position-relative mb-4">
              <div class="progress-bar bg-blue" role="progressbar" style="width: 10%;" aria-valuemin="0" aria-valuemax="100">
                <small class="justify-content-center d-flex position-absolute w-100">1/5</small>
              </div>
            </div>
            <h6 class="text-start mb-0">Vida</h6>
            <div class="progress position-relative mb-4">
              <div class="progress-bar bg-red" role="progressbar" style="width: 100%;" aria-valuemin="0" aria-valuemax="100">
                <small class="justify-content-center d-flex position-absolute w-100">100/100</small>
              </div>
            </div>
            <h6 class="text-start mb-0">Força</h6>
            <div class="progress position-relative mb-4">
              <div class="progress-bar bg-orange" role="progressbar" style="width: 20%;" aria-valuemin="0" aria-valuemax="100">
                <small class="justify-content-center d-flex position-absolute w-100">5</small>
              </div>
            </div>
            <h6 class="text-start mb-0">Defesa</h6>
            <div class="progress position-relative mb-4">
              <div class="progress-bar bg-orange" role="progressbar" style="width: 20%;" aria-valuemin="0" aria-valuemax="100">
                <small class="justify-content-center d-flex position-absolute w-100">5</small>
              </div>
            </div>
            <h6 class="text-start mb-0">Agilidade</h6>
            <div class="progress position-relative mb-4">
              <div class="progress-bar bg-orange" role="progressbar" style="width: 20%;" aria-valuemin="0" aria-valuemax="100">
                <small class="justify-content-center d-flex position-absolute w-100">5</small>
              </div>
            </div>
            <h6 class="text-start mb-0">Inteligência</h6>
            <div class="progress position-relative mb-4">
              <div class="progress-bar bg-orange" role="progressbar" style="width: 20%;" aria-valuemin="0" aria-valuemax="100">
                <small class="justify-content-center d-flex position-absolute w-100">5</small>
              </div>
            </div>
            <h6 class="text-start mb-0">Resistência</h6>
            <div class="progress position-relative mb-4">
              <div class="progress-bar bg-orange" role="progressbar" style="width: 20%;" aria-valuemin="0" aria-valuemax="100">
                <small class="justify-content-center d-flex position-absolute w-100">5</small>
              </div>
            </div>
            <button class="btn-no-style" id="btn-train"><h1 class="h1-decorative mt-2 pt-2">Treinar</h1></button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-2 mt-2 py-5">
      <div class="container">
        <h1 class="h1-decorative text-start">Descrição</h1>
        <hr />
        <div>Esse personagem não possuí uma história. Escreva algo aqui, conte-nos quem és, de onde veio, quais são seus objetivos... Ou talvez você queira falar sobre seus medos *sic</div>
        <button class="btn btn-primary mt-3">Editar</button>
        <h1 class="h1-decorative text-start mt-5">Estatísticas</h1>
        <hr />
        <div class="table-responsive">
          <table class="table table-borderless table-dark text-center">
            <thead class="align-top">
              <tr>
                <td scope="col">Vitórias de honra</td>
                <td scope="col">Total de Batalhas</td>
                <td scope="col">Batalhas Vencidas</td>
                <td scope="col">Batalhas Perdidas</td>
                <td scope="col">Empates</td>
                <td scope="col">Danos Feitos</td>
                <td scope="col">Danos Sofridos</td>
                <td scope="col">Ouro Ganho</td>
                <td scope="col">Ouro Perdido</td>
                <td scope="col">Pontos Torneio</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
                <td class="py-3">0</td>
              </tr>
              <tr>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
                <td>10.000º Ranking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    ${footer()}
    ${modalLarge()}
  `;
};

export default general;
