import './pages/index.css';
import { initialCards } from './scripts/cards';
import { handleEscKey, handleResetUnsavedForm, openModal } from './scripts/modal.js';
import { setProfileData, handleFormSubmit, handleCardSubmit } from './scripts/forms.js';
import { renderCards } from './scripts/card.js';

const modals = document.querySelectorAll('.popup')
const modalElementCard = document.querySelector('.popup_type_new-card');
const modalElementProfile = document.querySelector('.popup_type_edit');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');

const formProfileElement = document.forms["edit-profile"];

const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');

document.addEventListener('keydown', handleEscKey);

buttonAddCard.addEventListener('click', () => {
  openModal(modalElementCard);
});

buttonEditProfile.addEventListener('click', () => {
  openModal(modalElementProfile);
});

modals.forEach(modal => {
  modal.addEventListener('mousedown', handleResetUnsavedForm);
});

formProfileElement.addEventListener('submit', handleFormSubmit); 
modalElementCard.addEventListener('submit', handleCardSubmit);

setProfileData();
renderCards(initialCards);

export {cardTemplate, placesContainer, formProfileElement, modalElementCard, modalElementProfile };