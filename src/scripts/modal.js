import { formProfileElement } from "..";

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
    handleResetUnsavedForm(evt);
    if (openModal) { 
      closeModal(openModal);
    }
  }
}

const handleResetUnsavedForm = (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close') || evt.key === 'Enter') {
    const openModal = evt.target.closest('.popup_is-opened');
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
    console.log('openModal:', openModal);
    closeModal(openModal);
  }
}

export { openModal, closeModal, handleEscKey, handleResetUnsavedForm };