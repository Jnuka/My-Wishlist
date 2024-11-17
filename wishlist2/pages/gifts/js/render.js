import { cardsJson } from "./json.cards.js";
import { shuffleArray, renderCards } from "./utils.js";
import { toUpper } from "./buttonUp.js";
import { timerToNewYear } from "./timer.js";

let shuffleCardsArray = shuffleArray(cardsJson);

renderCards(shuffleCardsArray, 'gifts');

const cardsAll = document.querySelectorAll('.card');
const tagsAll = document.querySelectorAll('.hero__tag');
document.querySelector('.hero__tags').addEventListener('click', (event) => {
  if (event.target.classList.contains('hero__tag')) {
    if (event.target.innerHTML == 'all') {
      const tag = document.querySelector(`.${event.target.innerHTML}`);      
      tagsAll.forEach(tag => tag.classList.remove('active'));
      tag.classList.add('active');
      cardsAll.forEach(card => {
        card.classList.remove('card-hidden');
      })
    } else {
      const tag = document.querySelector(`.${event.target.innerHTML.slice(4)}`);
      tagsAll.forEach(tag => tag.classList.remove('active'));
      tag.classList.add('active');

      cardsAll.forEach(card => {
        card.classList.remove('card-hidden');
        if (card.querySelector('.card__type').innerHTML.slice(4) != event.target.innerHTML.slice(4)) {
          card.classList.add('card-hidden');
        }
      })
    }
  }    
})

timerToNewYear()
setInterval(timerToNewYear, 1000);

toUpper();