const button = document.getElementById('js-menuButton');

button.addEventListener('click', (e) => {
  const isExpanded = e.currentTarget.getAttribute('aria-expanded') !== 'true';
  e.currentTarget.setAttribute('aria-expanded', isExpanded);

  document.documentElement.classList.toggle('is-drawerActive');
});
