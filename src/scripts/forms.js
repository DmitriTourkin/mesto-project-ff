import { formProfileElement } from '..';
import { createCard, deleteElement, handleLike, handleImageClick } from './card';
import { placesContainer } from '..';
import { closeModal } from './modal';
import { modalElementCard, modalElementProfile } from '..';

const handleFormSubmit = evt => {
  evt.preventDefault();   
  
  const nameInput = formProfileElement.elements.name;
  const jobInput = formProfileElement.elements.description;

  const name = nameInput.value;
  const job = jobInput.value;

  const profileTitle = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');

  profileTitle.textContent = name;
  profileDescription.textContent = job;

  closeModal(modalElementProfile);
}

const setProfileData = () => {
  const profileTitle = document.querySelector('.profile__title').textContent;
  const profileDescription = document.querySelector('.profile__description').textContent;

  const nameInput = formProfileElement.elements.name;
  const jobInput = formProfileElement.elements.description;

  nameInput.value = profileTitle;
  jobInput.value = profileDescription;
}

const resetProfileForm = () => {
  const profileTitle = document.querySelector('.profile__title').textContent;
  const profileDescription = document.querySelector('.profile__description').textContent;

  const nameInput = formProfileElement.elements.name;
  const jobInput = formProfileElement.elements.description;

  nameInput.value = profileTitle;
  jobInput.value = profileDescription;
}

const handleCardSubmit = evt => {
  evt.preventDefault();

  const cardFormElement = document.forms['new-place'];
  const cardName = cardFormElement.elements['place-name'];
  const imageURL =  cardFormElement.elements.link;

  const cardObj = {
    name: cardName.value,
    link: imageURL.value
  }

  const newCard = createCard(cardObj, deleteElement, handleLike, handleImageClick);
  cardName.value = '';
  imageURL.value = '';

  placesContainer.prepend(newCard);
  closeModal(modalElementCard);
}

export { setProfileData, resetProfileForm, handleFormSubmit, handleCardSubmit}

