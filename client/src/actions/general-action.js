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
        `
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
