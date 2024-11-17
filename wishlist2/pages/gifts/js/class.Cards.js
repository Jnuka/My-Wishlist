import { Modal } from "./class.Modal.js";

export class Cards extends Modal {
  constructor({img, type, title, description, supperPowers, score}, page) {
    super();
    this.img = img;
    this.type = type;
    this.title = title;
    this.description = description;
    this.supperPowers = supperPowers;
    this.score = score;
    this.heroCards = '';
    this.page = page;

    this.modal = '';

    this.generateTemplateCard();
  }

  generateTemplateCard() {
    if (this.page == 'gifts') {
      this.heroCards = document.querySelector('.hero__cards');
    }  else {
      this.heroCards = document.querySelector('.best-gifts__cards');
    }

    const card = document.createElement('div');
    card.classList.add('card');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card__image');
    cardImg.src = this.img;
    cardImg.alt = this.type;

    const cardText = document.createElement('div');
    cardText.classList.add('card__text');

    const cardType = document.createElement('h4');
    cardType.classList.add('card__type', `card__${this.type}`);
    cardType.innerHTML = `For ${this.type}`;

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card__title');
    cardTitle.innerHTML = this.title;

    cardText.append(cardType);
    cardText.append(cardTitle);
    card.append(cardImg);
    card.append(cardText);

    this.heroCards.append(card);

    card.addEventListener('click', (event) => {
      if (event.currentTarget.closest('.card')) {
        document.body.classList.add('no-scroll');
        this.createModal();
      }
    });
  }

  generateTemplateModal() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal__content');

    const modalImg = document.createElement('img');
    modalImg.classList.add('modal__image');
    modalImg.src = this.img;
    modalImg.alt = this.type;
    
    const modalText = document.createElement('div');
    modalText.classList.add('modal__text');

    const modalType = document.createElement('h4');
    modalType.classList.add('modal__type', `modal__${this.type}`);
    modalType.innerHTML = `For ${this.type}`;

    const modalTitle = document.createElement('h3');
    modalTitle.classList.add('modal__title');
    modalTitle.innerHTML = this.title;

    const modalDescription = document.createElement('a');
    modalDescription.classList.add('modal__description');
    modalDescription.href = this.description;
    modalDescription.innerHTML = 'Ссылка на ВБ';
    modalDescription.target = '_blank';
    
    const modalInner = document.createElement('div');
    modalInner.classList.add('modal__inner');
    
    const modalAddTitle = document.createElement('h4');
    modalAddTitle.classList.add('modal__adds-title');
    modalAddTitle.innerHTML = 'Adds superpowers to:';
    
    const modalAdds = document.createElement('div');
    modalAdds.classList.add('modal__adds');
    
    modalInner.append(modalType);
    modalInner.append(modalTitle);
    modalInner.append(modalDescription);
    modalText.append(modalInner);

    const modalButton = document.createElement('button');
    modalButton.classList.add('modal__button');

    this.modal.append(modalButton);
    this.modal.append(modalImg);
    this.modal.append(modalText);
    
  }

  createModal() {
    this.generateTemplateModal()
    super.bildModal(this.modal);
  }
}