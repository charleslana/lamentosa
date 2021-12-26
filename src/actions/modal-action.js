export const modalAlert = (title, description) => {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  const myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
  myModal.show();
};

export const listenerModal = () => {
  const element = document.getElementById('myModal');
  if (element) {
    element.addEventListener('hidden.bs.modal', function () {
      element.remove();
    });
  }
};
