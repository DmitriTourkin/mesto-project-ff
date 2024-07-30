const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');

const createCard = (cardObj, deleteFunction) => {
  const card = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');

  const deleteCardButton = card.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', () => deleteFunction(card));

  cardTitle.textContent = cardObj.name;
  cardImage.src = cardObj.link;
  cardImage.alt = `На фотографии ${cardObj.name}`;

  return card;
}

const deleteCard = cardElement => {
  cardElement.remove();
}

const renderCards = cardsArray => {
  cardsArray.forEach(cardItem => {
    const cardElement = createCard(cardItem, deleteCard);
    placesContainer.append(cardElement);
  }
)};

renderCards(initialCards);
