import './pages/index.css';
import { initialCards } from './scripts/cards';
import { closeModal, openModal } from './scripts/modal.js';

const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');

const deleteElement = element => {
  element.remove();
}

const renderCards = cardsArray => {
  cardsArray.forEach(cardItem => {
    const cardElement = createCard(cardItem, deleteElement, handleLike);
    placesContainer.append(cardElement);
  }
)};

function handleLike(evt) {
  const card = evt.target.closest('.card');
  if (card) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
}

const createCard = (cardObj, deleteElement, handleLikeFunction) => {
  const card = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');

  const deleteCardButton = card.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', () => deleteElement(card));
  likeButton.addEventListener('click', handleLikeFunction);

  cardTitle.textContent = cardObj.name;
  cardImage.src = cardObj.link;
  cardImage.alt = `На фотографии ${cardObj.name}`;

  return card;
}

// Новая фнукциональность 
const modals = document.querySelectorAll('.popup')
const modalsCloseButtons = document.querySelectorAll('.popup__close');

const modalElementCard = document.querySelector('.popup_type_new-card');
const modalElementProfile = document.querySelector('.popup_type_edit');

const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');

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
  })
});


function setProfileData() {
  const profileTitle = document.querySelector('.profile__title').textContent;
  const profileDescription = document.querySelector('.profile__description').textContent;
  
  const formElement = document.forms["edit-profile"];
  const nameInput = formElement.elements.name;
  const jobInput = formElement.elements.description;

  nameInput.value = profileTitle;
  jobInput.value = profileDescription;
}

// Работа с формами
const formElement = document.forms["edit-profile"];
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;

function handleFormSubmit(evt) {
  evt.preventDefault();    

  const name = nameInput.value;
  const job = jobInput.value;

  const profileTitle = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');

  profileTitle.textContent = name;
  profileDescription.textContent = job;

  closeModal(modalElementProfile);
}

function resetProfileForm() {
  const profileTitle = document.querySelector('.profile__title').textContent;
  const profileDescription = document.querySelector('.profile__description').textContent;

  nameInput.value = profileTitle;
  jobInput.value = profileDescription;
}

modalsCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalElement = button.closest('.popup');
    closeModal(modalElement);
    resetProfileForm(); 
  });
});

formElement.addEventListener('submit', handleFormSubmit); 

// нажатие на overlay 
modals.forEach(modal => {
  modal.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closeModal(modal);
    }
  })
});

setProfileData();

// Новая карточка 
function handleCardSubmit(evt) {
  evt.preventDefault();

  const cardFormElement = document.forms['new-place'];
  const cardName = cardFormElement.elements['place-name'];
  const imageURL =  cardFormElement.elements.link;

  const cardObj = {
    name: cardName.value,
    link: imageURL.value
  }

  const newCard = createCard(cardObj, deleteElement, handleLike);
  cardName.value = '';
  imageURL.value = '';

  placesContainer.prepend(newCard);
  closeModal(modalElementCard);
}

modalElementCard.addEventListener('submit', handleCardSubmit);

// Добавление лайка
function handleImageClick(evt) {
  if (evt.target.classList.contains('card__image')) {
    const card = evt.target.closest('.card');

    const cardPopUpElement = document.querySelector('.popup_type_image');
    const titleElement = cardPopUpElement.querySelector('.popup__caption');
    const imageElement = cardPopUpElement.querySelector('.popup__image'); 

    const cardTitle = card.querySelector('.card__title').textContent;
    const cardImageUrl = card.querySelector('.card__image').src;
    const cardImageAlt = card.querySelector('.card__image').alt;

    titleElement.textContent = cardTitle;
    imageElement.src = cardImageUrl;
    imageElement.alt = cardImageAlt;

    openModal(cardPopUpElement);
  }
}

placesContainer.addEventListener('click', handleImageClick);

// Открытие попапа карточки

renderCards(initialCards);