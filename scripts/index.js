const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list')

const createCard = (cardObj) => {
  const cardContainer = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDescriptionContainer = cardContainer.querySelector('.card__description');
  const cardTitle = cardContainer.querySelector('.card__title');
  const cardImage = cardContainer.querySelector('.card__image');

  const deleteCardButton = cardContainer.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', deleteCard);

  cardTitle.textContent = cardObj.name;
  cardImage.src = cardObj.link;

  cardContainer.append(cardImage);
  cardDescriptionContainer.append(cardTitle);
  cardContainer.append(cardDescriptionContainer);

  return cardContainer;
}

const deleteCard = (e) => {
  let deleteCardButtonItem = e.target;
  const listItem  = deleteCardButtonItem.closest('.places__item');
  listItem.remove();
}

const renderCards = cardsArray => {
  cardsArray.forEach(cardItem => {
    let cardElement = createCard(cardItem);
    placesContainer.appendChild(cardElement);
  }
)};

renderCards(initialCards);
