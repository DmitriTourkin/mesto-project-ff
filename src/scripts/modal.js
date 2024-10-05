const openModal = modalElement => {
  modalElement.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscKey);
  modalElement.addEventListener('click', handleCloseButtonClick);
  modalElement.addEventListener('click', handleOverlayClick);
}

const closeModal = modalElement => {
  modalElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscKey);
  modalElement.removeEventListener('click', handleCloseButtonClick);
  modalElement.removeEventListener('click', handleOverlayClick); 
}

const handleOverlayClick = (evt) => {
  if (evt.target.classList.contains('popup')) {
    const openModal = evt.target;
    closeModal(openModal);
  }
}

const handleCloseButtonClick = evt => {
  if (evt.target.classList.contains('popup__close')) {
    const openModal = evt.target.closest('.popup_is-opened');
    closeModal(openModal);
  }
}

const handleEscKey = evt => {
  if (evt.key === 'Escape') {
    const openModal = document.querySelector('.popup_is-opened');
    if (openModal) {
      closeModal(openModal);
    }
  }
}

export { openModal, closeModal, handleEscKey };