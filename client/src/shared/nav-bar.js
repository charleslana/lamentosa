const navBar = () => {
  return `
    <header class="logo">
      <div class="d-flex pe-4 fs-5 justify-content-end">
        <button class="btn-no-style click-language" data-language="en">🇺🇸</button>
        <button class="btn-no-style click-language" data-language="es">🇪🇸</button>
        <button class="btn-no-style click-language" data-language="pt">🇧🇷</button>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent d-grid justify-content-end">
        <div class="container-fluid justify-content-end">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div class="collapse navbar-collapse text-end bg-dark p-3" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link click-route" href="/home" id="home">Entrar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link click-route" href="/register" id="register">Cadastro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;
};

export default navBar;
