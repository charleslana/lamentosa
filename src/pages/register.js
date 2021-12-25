import navBar from '../shared/nav-bar.js';
import footer from '../shared/footer.js';

const register = () => {
  return `
    ${navBar()}
    <div class="container">
      <h1 class="text-center mb-5">Registrar</h1>
      <form class="bg p-5 animate__animated animate__fadeInUp">
        <div class="mb-3">
          <label for="email" class="form-label">Seu Email</label>
          <input type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Nome do personagem</label>
          <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="breed" class="form-label">Raça</label>
          <select class="form-select" aria-label="breed" id="breed" required>
            <option selected disabled value="">Selecione uma raça</option>
            <option value="1">Vampiro</option>
            <option value="2">Lobisomem</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gênero</label>
          <select class="form-select" aria-label="gender" id="gender" required>
            <option selected disabled value="">Selecione um gênero</option>
            <option value="1">Masculino</option>
            <option value="2">Feminino</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Senha</label>
          <input type="password" class="form-control" id="password" required>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirme a Senha</label>
          <input type="password" class="form-control" id="confirmPassword" required>
        </div>
        <div class="mb-3">
          <small>Ao criar meu personagem, afirmo que LI e CONCORDO com todos</small>
          <small> <a class="click-route" href="/rules">Termos de Serviço e Regras</a>.</small>
        </div>
        <button type="submit" class="btn btn-primary">Transformar</button>
      </form>
    </div>
    ${footer()}
  `;
};

export default register;
