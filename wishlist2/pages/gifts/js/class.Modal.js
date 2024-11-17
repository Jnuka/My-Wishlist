export class Modal { 
  constructor() {
    this.overlay = '';
    this.modal = '';
    this.modalWrapper = '';
  }

  bildModal(content) {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('overlay');

    this.modal = document.createElement('div');
    this.modal.classList.add('modal');

    this.modalWrapper = document.createElement('div');
    this.modalWrapper.classList.add('modal__wrapper');
    
    this.setContent(content);
    this.appendModalElements();
    this.buildEvents();
  }

  setContent(content) {
    this.modalWrapper.append(content);
  }

  appendModalElements() {
    this.modal.append(this.modalWrapper);
    this.overlay.append(this.modal);
    document.body.append(this.overlay);
  }

  buildEvents() {
    const modalButton = document.querySelector('.modal__button');
    modalButton.addEventListener('click', (event) => {
      this.closeModal(event);
    })
    this.overlay.addEventListener('click', (event) => {
      this.closeModal(event);
    })
  }

  closeModal(event) {
    if (event.target.classList.contains('overlay') || event.target.classList.contains('modal__button')) {
      if (this.overlay) {
        this.overlay.remove();
      }
      document.body.classList.remove('no-scroll');
    }
  }
}
