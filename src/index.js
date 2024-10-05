import './pages/index.css';
import { initialCards } from './scripts/cards';
import { openModal, closeModal} from './scripts/modal.js';
import { createCard, deleteElement, handleLike} from './scripts/card.js';

const modals = document.querySelectorAll('.popup');
const modalElementCard = document.querySelector('.popup_type_new-card');
const modalElementProfile = document.querySelector('.popup_type_edit');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');

const placesContainer = document.querySelector('.places__list');

const cardPopUpElement = document.querySelector('.popup_type_image');
const titleElement = cardPopUpElement.querySelector('.popup__caption');
const imageElement = cardPopUpElement.querySelector('.popup__image'); 

const formProfileElement = document.forms["edit-profile"];

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const nameInput = formProfileElement.elements.name;
const jobInput = formProfileElement.elements.description;

const cardFormElement = document.forms['new-place'];
const cardName = cardFormElement.elements['place-name'];
const imageURL =  cardFormElement.elements.link;

const renderCards = cardsArray => {
  cardsArray.forEach(cardItem => {
    const cardElement = createCard(cardItem, deleteElement, handleLike, handleImageClick);
    placesContainer.append(cardElement);
  }
)};

const handleImageClick = evt => {
  if (evt.target.classList.contains('card__image')) {
    const card = evt.target.closest('.card');
    const cardTitle = card.querySelector('.card__title').textContent;
    const cardImageUrl = card.querySelector('.card__image').src;
    const cardImageAlt = card.querySelector('.card__image').alt;

    titleElement.textContent = cardTitle;
    imageElement.src = cardImageUrl;
    imageElement.alt = cardImageAlt;

    openModal(cardPopUpElement);
  }
}

const submitEditProfileForm = evt => {
  evt.preventDefault();   

  const modalElementProfile = document.querySelector('.popup_type_edit');

  const name = nameInput.value;
  const job = jobInput.value;

  profileTitle.textContent = name;
  profileDescription.textContent = job;

  closeModal(modalElementProfile);
}

const handleCardSubmit = evt => {
  evt.preventDefault();

  const cardObj = {
    name: cardName.value,
    link: imageURL.value
  }

  const newCard = createCard(cardObj, deleteElement, handleLike, handleImageClick);
  
  cardFormElement.reset();

  placesContainer.prepend(newCard);
  closeModal(modalElementCard);
}

buttonAddCard.addEventListener('click', () => {
  openModal(modalElementCard);
});

buttonEditProfile.addEventListener('click', () => {
  openModal(modalElementProfile);
});

formProfileElement.addEventListener('submit', submitEditProfileForm); 
modalElementCard.addEventListener('submit', handleCardSubmit);

renderCards(initialCards);