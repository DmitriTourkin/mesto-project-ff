const openModal = modalElement => {
  modalElement.classList.add('popup_is-opened');
  modalElement.addEventListener('keydown', handleEscKey);
}

const closeModal = modalElement => {
  modalElement.classList.remove('popup_is-opened');
  modalElement.removeEventListener('keydown', handleEscKey);
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