let modalContainer = document.querySelector('.modal-container');
let modalOpenBtn = document.querySelector('.hotel-search-button');
let modalCloseBtn = document.querySelector('.modal-close-button');

const toggleModal = () => modalContainer.classList.toggle('modal-container--closed');

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modalContainer.classList.toggle('modal-container--closed');
  }
});
