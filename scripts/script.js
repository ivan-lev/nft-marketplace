// template of a new card and where to put it
const artCategoryCardTemplate = document.querySelector('#art-category-template');
const artCategoryCardContent = artCategoryCardTemplate.content;
const cardsSection = document.querySelector('.browse-categories__list');

function createCard(card) {
  const newCard = artCategoryCardContent.cloneNode(true);
  const newCardBackground = newCard.querySelector('.browse-categories__link');
  const newCardIcon = newCard.querySelector('.browse-categories__placeholder');
  const newCardName = newCard.querySelector('.browse-categories__category-name');

  newCardIcon.style.backgroundImage = `url(${card.icon})`;
  newCardBackground.style.backgroundImage = `url(${card.background})`;
  newCardName.textContent = card.name;

  return newCard;
}

// generating new cards from constants.js
categories.forEach(function (item) {
  const newItem = createCard(item);
  cardsSection.append(newItem);
});
