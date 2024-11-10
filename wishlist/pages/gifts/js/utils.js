import { Cards } from "./class.Cards.js";

export const shuffleArray = (arr) => {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const renderCards = (shuffleCardsArray, page) => {
  for (let i = 0; i < shuffleCardsArray.length; i++) {
    new Cards(shuffleCardsArray[i], page);
  }
}
