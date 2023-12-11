const trailerContainerEl = document.querySelector('.trailer-container');
const btnEl = document.querySelector('.btn');
const btnCloseEl = document.querySelector('.btn-close');
const videoEl = document.querySelector('video');

btnEl.addEventListener('click', () => {
  trailerContainerEl.classList.remove('active');
});

btnCloseEl.addEventListener('click', () => {
  trailerContainerEl.classList.add('active');
  videoEl.pause();
  videoEl.currentTime = 0;
});
