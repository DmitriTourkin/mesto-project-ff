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

const handleOverlayClick = evt => {
  if (evt.target.classList.contains('popup')) {
    const openModal = evt.target;
    handleResetUnsavedForm(evt, openModal);
  }
}

const handleCloseButtonClick = evt => {
  if (evt.target.classList.contains('popup__close')) {
    const openModal = evt.target.closest('.popup_is-opened');
    handleResetUnsavedForm(evt, openModal);
  }
}

const handleResetUnsavedForm = (evt, openModal) => {
  if (openModal && (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup') || evt.key === 'Escape')) {
    const inputs = Array.from(openModal.querySelectorAll('.popup__input'));

    if (openModal.classList.contains('popup_type_edit')) {
      const formProfileElement = document.forms["edit-profile"];
      const profileTitle = document.querySelector('.profile__title').textContent;
      const profileDescription = document.querySelector('.profile__description').textContent;

      const nameInput = formProfileElement.elements.name;
      const jobInput = formProfileElement.elements.description;

      nameInput.value = profileTitle;
      jobInput.value = profileDescription;
    } else {
      inputs.forEach(inputField => inputField.value = "");
    }
    closeModal(openModal);
  }
}

const handleEscKey = evt => {
  if (evt.key === 'Escape') {
    const openModal = document.querySelector('.popup_is-opened');
    if (openModal) {
      handleResetUnsavedForm(evt, openModal);
    }
  }
}

export { openModal, closeModal, handleEscKey, handleResetUnsavedForm };