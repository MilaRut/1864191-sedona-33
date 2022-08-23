let modalContainer = document.querySelector('.modal-container');
let modalToggle = document.querySelector('.hotel-search-button');
let modalCloseButton = document.querySelector('.modal-close-button');

modalToggle.addEventListener('click', function () {
    if (modalContainer.classList.contains('modal-container--closed')) {
        modalContainer.classList.remove('modal-container--closed');
        modalContainer.classList.add('modal-container--open');
    }
});

modalCloseButton.addEventListener('click', function () {
    if (modalContainer.classList.contains('modal-container--open')) {
        modalContainer.classList.remove('modal-container--open');
        modalContainer.classList.add('modal-container--closed');
    }
});
