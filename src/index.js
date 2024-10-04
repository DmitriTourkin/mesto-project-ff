import './pages/index.css';
import { initialCards } from './scripts/cards';
import { closeModal, handleEscKey, openModal } from './scripts/modal.js';
import { setProfileData, resetProfileForm, handleFormSubmit, handleCardSubmit } from './scripts/forms.js';
import { renderCards } from './scripts/card.js';

const modals = document.querySelectorAll('.popup')
const modalsCloseButtons = document.querySelectorAll('.popup__close');
const modalElementCard = document.querySelector('.popup_type_new-card');
const modalElementProfile = document.querySelector('.popup_type_edit');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');

let shouldSave = true;

const formProfileElement = document.forms["edit-profile"];

const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');

buttonAddCard.addEventListener('click', () => {
  openModal(modalElementCard);
});

buttonEditProfile.addEventListener('click', () => {
  openModal(modalElementProfile);
});

modalsCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalElement = button.closest('.popup');
    closeModal(modalElement);
    resetProfileForm(); 
  });
});

modals.forEach(modal => {
  modal.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closeModal(modal);
    }
  })
});

formProfileElement.addEventListener('submit', handleFormSubmit); 

setProfileData();

modalElementCard.addEventListener('submit', handleCardSubmit);

document.addEventListener('keydown', handleEscKey);

renderCards(initialCards);

export {cardTemplate, placesContainer, formProfileElement, modalElementCard, modalElementProfile,shouldSave};