const headerBar = () => {
  const date = new Date();
  const dateString = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `
    <header class="logo">
      <div class="d-flex pe-4 fs-5 justify-content-end">
        <button class="btn-no-style click-language" data-language="en">🇺🇸</button>
        <button class="btn-no-style click-language" data-language="es">🇪🇸</button>
        <button class="btn-no-style click-language" data-language="pt">🇧🇷</button>
      </div>
      <nav class="navbar navbar-dark bg-transparent d-grid justify-content-end">
        <div class="container-fluid bg-dark-transparent rounded-pill">
          <span class="navbar-brand mb-0 fs-0-8">Hora do servidor:</span>
          <span class="navbar-brand mb-0 fs-0-8">${dateString}</span>
        </div>
      </nav>
    </header>
  `;
};

export default headerBar;
