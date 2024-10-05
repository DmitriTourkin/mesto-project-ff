const getCardTemplate = () => {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.places__item').cloneNode(true);
  return card;
}

const createCard = (cardObj, deleteElement, handleLikeFn, handleImageClickFn) => {
  const card = getCardTemplate();
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

export { createCard, deleteElement, handleLike};

