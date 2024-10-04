import { openModal } from "./modal";
import { placesContainer, cardTemplate } from "..";

const createCard = (cardObj, deleteElement, handleLikeFn, handleImageClickFn) => {
  const card = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');
  
  const deleteCardButton = card.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', () => deleteElement(card));
  likeButton.addEventListener('click', handleLikeFn);
  card.addEventListener('click', handleImageClickFn);

  cardTitle.textContent = cardObj.name;
  cardImage.src = cardObj.link;
  cardImage.alt = `На фотографии ${cardObj.name}`;

  return card;
}

const deleteElement = element => {
  element.remove();
}

const handleLike = evt => {
  const card = evt.target.closest('.card');
  if (card) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
}

const handleImageClick = evt => {
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

const renderCards = cardsArray => {
  cardsArray.forEach(cardItem => {
    const cardElement = createCard(cardItem, deleteElement, handleLike, handleImageClick);
    placesContainer.append(cardElement);
  }
)};

export { renderCards, createCard, deleteElement, handleLike, handleImageClick};

