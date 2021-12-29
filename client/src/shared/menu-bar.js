const menuBar = () => {
  return `
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark bg top animate__animated animate__fadeIn">
      <div class="container-fluid justify-content-around">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="nav-link text-uppercase text-white d-lg-none click-route" href="#"><i class="messenger animate__animated animate__infinite infinite animate__flash">1</i></a>
        <a class="d-lg-none click-route" href="/hunt"><div class="hunt-icon"></div></a>
        <a class="d-lg-none click-route" href="/battle"><div class="battle-icon"></div></a>
        <div class="collapse navbar-collapse px-5 justify-content-around" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown pe-4">
              <a class="nav-link dropdown-toggle fs-6 fw-bold text-uppercase text-white" href="#" id="navbarDarkDropdownState" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estado
              </a>
              <ul class="dropdown-menu dropdown-menu-dark p-3 lh-lg" aria-labelledby="navbarDarkDropdownState">
                <li><a class="dropdown-item click-route" href="/general">Meu personagem</a></li>
                <li><a class="dropdown-item click-route" href="/my-grimoire">Meu Grimório</a></li>
                <li><a class="dropdown-item" href="#">Minhas Sentinelas</a></li>
                <li><a class="dropdown-item" href="#">Tarefas Diárias</a></li>
                <li><a class="dropdown-item" href="#">Conquistas</a></li>
                <li><a class="dropdown-item" href="#">Troca de Soul Stones</a></li>
                <li><a class="dropdown-item" href="#">Pontos de Honra</a></li>
                <li><a class="dropdown-item" href="#">Transformados</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown pe-4">
              <a class="nav-link dropdown-toggle fs-6 fw-bold text-uppercase text-white" href="#" id="navbarDarkDropdownCity" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cidade
              </a>
              <ul class="dropdown-menu dropdown-menu-dark p-3 lh-lg" aria-labelledby="navbarDarkDropdownCity">
                <li><a class="dropdown-item" href="#">O Mercado</a></li>
                <li><a class="dropdown-item" href="#">Mercado Premium</a></li>
                <li><a class="dropdown-item" href="#">O Ferreiro</a></li>
                <li><a class="dropdown-item" href="#">A Feiticeira</a></li>
                <li><a class="dropdown-item" href="#">Cemitério</a></li>
                <li><a class="dropdown-item" href="#">Templo</a></li>
                <li><a class="dropdown-item" href="#">Meu Mestre</a></li>
                <li><a class="dropdown-item" href="#">As 7 Regiões</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown pe-4">
              <a class="nav-link dropdown-toggle fs-6 fw-bold text-uppercase text-white" href="#" id="navbarDarkDropdownBattlefield" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Campo de Batalha
              </a>
              <ul class="dropdown-menu dropdown-menu-dark p-3 lh-lg" aria-labelledby="navbarDarkDropdownBattlefield">
                <li><a class="dropdown-item" href="#">Caçar Criaturas</a></li>
                <li><a class="dropdown-item" href="#">Caçar Lobisomens</a></li>
                <li><a class="dropdown-item" href="#">Caçar Renegados</a></li>
                <li><a class="dropdown-item" href="#">Torneio de Guerra</a></li>
                <li><a class="dropdown-item" href="#">Khepri Arena</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown pe-4">
              <a class="nav-link dropdown-toggle fs-6 fw-bold text-uppercase text-white" href="#" id="navbarDarkDropdownClans" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Clãs
              </a>
              <ul class="dropdown-menu dropdown-menu-dark p-3 lh-lg" aria-labelledby="navbarDarkDropdownClans">
                <li><a class="dropdown-item" href="#">Meu Clã</a></li>
                <li><a class="dropdown-item" href="#">Todos os Clãs</a></li>
                <li><a class="dropdown-item" href="#">Criar um Clã</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown pe-4">
              <a class="nav-link dropdown-toggle fs-6 fw-bold text-uppercase text-white" href="#" id="navbarDarkDropdownNewspaper" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Jornal
              </a>
              <ul class="dropdown-menu dropdown-menu-dark p-3 lh-lg" aria-labelledby="navbarDarkDropdownNewspaper">
                <li><a class="dropdown-item" href="#">Classificação</a></li>
                <li><a class="dropdown-item" href="#">Placar do Torneio</a></li>
                <li><a class="dropdown-item" href="#">Liderança</a></li>
                <li><a class="dropdown-item" href="#">Itens Únicos</a></li>
                <li><a class="dropdown-item" href="#">Chefes</a></li>
                <li><a class="dropdown-item" href="#">Heróis</a></li>
                <li><a class="dropdown-item" href="#">Renegados</a></li>
                <li><a class="dropdown-item" href="#">Mundos</a></li>
                <li><a class="dropdown-item" href="#">Procurar Personagem</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown pe-4">
              <a class="nav-link fs-6 fw-bold text-uppercase text-white" href="#">Mensageiro <i class="messenger animate__animated animate__infinite infinite animate__flash">1</i></a>
            </li>
            <li class="nav-item dropdown pe-4">
              <a class="nav-link dropdown-toggle fs-6 fw-bold text-uppercase text-white" href="#" id="navbarDarkDropdownHelp" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ajuda
              </a>
              <ul class="dropdown-menu dropdown-menu-dark p-3 lh-lg" aria-labelledby="navbarDarkDropdownHelp">
                <li><a class="dropdown-item" href="#">O Manual dos Amaldiçoados</a></li>
                <li><a class="dropdown-item" href="#">Regras e Termos de Uso</a></li>
                <li><a class="dropdown-item" href="#">Contato</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle fs-6 fw-bold text-uppercase text-white" href="#" id="navbarDarkDropdownAccount" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Conta
              </a>
              <ul class="dropdown-menu dropdown-menu-dark p-3 lh-lg" aria-labelledby="navbarDarkDropdownAccount">
                <li><a class="dropdown-item" href="#">Cristais de Sangue</a></li>
                <li><a class="dropdown-item" href="#">Mudar seu Nome</a></li>
                <li><a class="dropdown-item" href="#">Editar seu perfil</a></li>
                <li><a class="dropdown-item" href="#">Mudar de Raça</a></li>
                <li><a class="dropdown-item" href="#">Mudar Email</a></li>
                <li><a class="dropdown-item" href="#">Apagar conta</a></li>
                <li>
                  <button class="dropdown-item btn-no-style" id="logout">Sair</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
};

export default menuBar;
