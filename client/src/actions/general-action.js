import { hideOverlay, showOverlay } from '../utils/index.js';
import { modalLargeAlert } from './modal-action.js';

export const showDialogMarry = () => {
  const element = document.querySelector(
    'main[page=general] .container > button'
  );
  if (element) {
    element.addEventListener('click', function () {
      modalLargeAlert(
        'Procure alguém para casar-se',
        `
        <p>Aqui você pode encontrar alguém para se casar. Para fazer uma proposta você precisa gastar 1000 vitórias de grimório.</p>
        <p>Você não pode enviar mais de 1 proposta para a mesma pessoa, se ela o rejeitar apenas siga com sua vida, não insista.</p>
        <p>O casamento é para sempre, depois de feito não será possível se separar ou encontrar outro cônjuge! Ao se casar com alguém, você e seu cônjuge vão receber a conquista "Soulmate" e também +100 pontos de vida total!</p>
        <br/>
        <form>
          <div class="mb-3">
            <label for="marryName" class="form-label">Nome:</label>
            <input type="text" class="form-control" id="marryName" required>
          </div>
          <button type="submit" class="btn btn-primary">Procurar</button>
        </form>
        <div class="alert alert-danger mt-3 d-none" role="alert">
          Ninguém foi encontrado. Parece que você ficará para sempre sem ninguém.
        </div>
        `,
        { keyboard: false }
      );
      addMarryClick();
    });
  }
};

export const addMarryClick = () => {
  const element = document.querySelector(
    'main[page=general] .modal-dialog form'
  );
  if (element) {
    element.addEventListener('submit', function (event) {
      event.preventDefault();
      searchMarry();
    });
  }
};

const searchMarry = () => {
  showOverlay();
  const element = document.querySelector(
    'main[page=general] .modal-dialog .alert'
  );
  element.classList.add('d-none');
  setTimeout(function () {
    element.classList.remove('d-none');
    hideOverlay();
  }, 1000);
};

export const showDialogTrain = () => {
  const element = document.getElementById('btn-train');
  if (element) {
    element.addEventListener('click', function () {
      modalLargeAlert(
        'Você possui <div class="icon-gold icon-status l-h-0 text-gold">3.000</div>',
        `
        <small class="fs-0-8">Após o nível 10 você precisa criar ou participar de um clã para receber os 30 por cento de desconto</small>
        <br/>
        <div class="icon-combat icon-status my-3 fs-0-8">Desconto atual nos atributos:&nbsp;
          <span class="text-discount">30%<span>
        </div>
        <div class="table-responsive">
          <table class="table table-borderless table-striped table-dark text-center align-middle">
            <thead class="align-top">
              <tr>
                <th scope="col">Skill</th>
                <th scope="col">Valor atual</th>
                <th scope="col">Preço para melhorar</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" class="py-3">Força</td>
                <td class="py-3">5</td>
                <td class="py-3"><div class="icon-gold icon-status">1</div></td>
                <td class="py-3"><button class="btn btn-primary" id="btn-train-strength">Melhorar</button></td>
              </tr>
              <tr>
                <td scope="row" class="py-3">Defesa</td>
                <td class="py-3">5</td>
                <td class="py-3"><div class="icon-gold icon-status">1</div></td>
                <td class="py-3"><button class="btn btn-primary">Melhorar</button></td>
              </tr>
              <tr>
                <td scope="row" class="py-3">Agilidade</td>
                <td class="py-3">5</td>
                <td class="py-3"><div class="icon-gold icon-status">1</div></td>
                <td class="py-3"><button class="btn btn-primary">Melhorar</button></td>
              </tr>
              <tr>
                <td scope="row" class="py-3">Inteligência</td>
                <td class="py-3">5</td>
                <td class="py-3"><div class="icon-gold icon-status">1</div></td>
                <td class="py-3"><button class="btn btn-primary">Melhorar</button></td>
              </tr>
              <tr>
                <td scope="row" class="py-3">Resistência</td>
                <td class="py-3">5</td>
                <td class="py-3"><div class="icon-gold icon-status">1</div></td>
                <td class="py-3"><button class="btn btn-primary" disabled>Melhorar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        `,
        { keyboard: false }
      );
      addTrainClick();
    });
  }
};

export const addTrainClick = () => {
  const element = document.getElementById('btn-train-strength');
  if (element) {
    element.addEventListener('click', function () {
      trainStrength();
    });
  }
};

const trainStrength = () => {
  showOverlay();
  setTimeout(function () {
    hideOverlay();
  }, 1000);
};
