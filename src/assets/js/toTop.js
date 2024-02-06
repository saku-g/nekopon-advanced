const button = document.getElementById('js-toTopButton');

button.addEventListener('click', () => {
  window.scroll({ top: 0, behavior: 'smooth' });
});
