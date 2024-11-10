const btnUp = document.createElement('button');
btnUp.classList.add('btn-up', 'btn-up-hide');
document.body.append(btnUp);

export const toUpper = () => {
  if (btnUp) {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        btnUp.classList.add('btn-up-hide');
      }
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 400 && window.innerWidth <= 768) {
        btnUp.classList.remove('btn-up-hide');
      } else {
        btnUp.classList.add('btn-up-hide');
      }
    })
  
    btnUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0
      });
      btnUp.classList.add('btn-up-hide');
    })
  }
}
