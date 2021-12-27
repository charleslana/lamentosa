export const modalAlert = (title, description) => {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerHTML = description;
  const myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
  myModal.show();
  listenerModal();
};

export const modalLargeAlert = (title, description) => {
  document.getElementById('modalLargeTitle').innerText = title;
  document.getElementById('modalLargeDescription').innerHTML = description;
  const myModal = new bootstrap.Modal(
    document.getElementById('myModalLarge'),
    {}
  );
  myModal.show();
  listenerLargeModal();
};

const listenerModal = () => {
  const myModal = document.getElementById('myModal');
  myModal.addEventListener('hidden.bs.modal', function () {
    bootstrap.Modal.getOrCreateInstance(myModal).dispose();
    document.getElementById('modalTitle').innerText = '';
    document.getElementById('modalDescription').innerText = '';
  });
};

const listenerLargeModal = () => {
  const myModal = document.getElementById('myModalLarge');
  myModal.addEventListener('hidden.bs.modal', function () {
    bootstrap.Modal.getOrCreateInstance(myModal).dispose();
    document.getElementById('modalLargeTitle').innerText = '';
    document.getElementById('modalLargeDescription').innerText = '';
  });
};
