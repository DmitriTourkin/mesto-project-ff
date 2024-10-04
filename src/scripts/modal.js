function openModal(modalElement) {
  modalElement.classList.add('popup_is-opened');
  modalElement.addEventListener('keydown', handleEscKey);
  const closeButton = modalElement.querySelector('.popup__close');
  closeButton.focus();
}

function closeModal(modalElement) {
  modalElement.classList.remove('popup_is-opened');
  modalElement.removeEventListener('keydown', handleEscKey);
}

function handleEscKey(evt) {
    if (evt.key === 'Escape') {
      const openModal = document.querySelector('.popup_is-opened');
      if (openModal) { 
        closeModal(openModal);
      }
    }
}

export { openModal, closeModal }