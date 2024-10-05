const setProfileData = () => {
  const formProfileElement = document.forms["edit-profile"];

  const profileTitle = document.querySelector('.profile__title').textContent;
  const profileDescription = document.querySelector('.profile__description').textContent;

  const nameInput = formProfileElement.elements.name;
  const jobInput = formProfileElement.elements.description;
  
  nameInput.value = profileTitle;
  jobInput.value = profileDescription;
}

const openModal = modalElement => {
  modalElement.classList.add('popup_is-opened');
  if (modalElement.classList.contains('popup_type_edit')) {
    setProfileData();  
  }
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
    if (openModal.classList.contains('popup_type_edit')) {
      setProfileData();
    }
    closeModal(openModal);
  }
}

const handleCloseButtonClick = evt => {
  if (evt.target.classList.contains('popup__close')) {
    const openModal = evt.target.closest('.popup_is-opened');
    setProfileData();
    closeModal(openModal);
  }
}

const handleEscKey = evt => {
  if (evt.key === 'Escape') {
    const openModal = document.querySelector('.popup_is-opened');
    if (openModal) {
      if (openModal.classList.contains('popup_type_edit')) {
        setProfileData();
      }
      closeModal(openModal);
    }
  }
}

export { openModal, closeModal, handleEscKey };