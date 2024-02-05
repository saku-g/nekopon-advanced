/**
 * リサイズ中に`is-resize`クラスをつける
 */
let timerId;

window.addEventListener('resize', () => {
  document.documentElement.classList.add('is-resize');
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    document.documentElement.classList.remove('is-resize');
  }, 500);
});
