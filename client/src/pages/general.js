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
      <div class="container py-5 text-center">
        <div class="alert alert-dark" role="alert">
          Os seguintes bosses estão desafiando este mundo:
        </div>
        <h1 class="h1-decorative mt-5">Status</h1>
        <hr/>
        <h2 class="h2-decorative">Amaldiçoado Premium</h2>
        <div class="mt-3 fs-0-8">Transformou-se em vampiro em 25 de Dezembro de 2021 às 14:25</div>
        <button class="btn-no-style fs-0-8">Solteiro(a) <i class="fa-solid fa-magnifying-glass"></i></button>
        <div class="row mt-5">
          <div class="col-12 col-lg-7">
            <div class="row">
              <div class="col-12 col-sm-3 mb-5 inventory d-grid justify-content-center">
                ${item}
              </div>
              <div class="col-12 col-sm-6 mb-5">
                <div class="profile-bg mx-auto">
                  <img src="assets/images/avatars/vampire/male/12.jpg" alt="Profile Avatar">
                  <div class="breed-vampire"></div>
                  <div class="level">1</div>
                  <div class="name ms-5 text-start">Charles</div>
                  <div class="position mt-2">Assistente de Coveiro</div>
                  <div class="age">26 anos | masculino</div>
                </div>
              </div>
              <div class="col-12 col-sm-3 mb-5 inventory">
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
          </div>
          <div class="col-12 col-lg-5">Status</div>
        </div>
      </div>
    </div>
    ${footer()}
    ${modalLarge()}
  `;
};

export default general;
