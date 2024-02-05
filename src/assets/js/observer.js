import { SetObserver } from './libs/setObserver';

/**
 * ヒーローセクションが画面に表示されているかどうかを監視し、クラスを切り替えるコールバック関数
 * @param {IntersectionObserverEntry[]} entries IntersectionObserverからのエントリー配列
 */
const toggleHeroOverClass = (entries) => {
  if (!entries[0].isIntersecting) {
    document.documentElement.classList.add('is-heroOver');
  } else {
    document.documentElement.classList.remove('is-heroOver');
  }
};

new SetObserver('#js-hero', toggleHeroOverClass);

/**
 * ヒーローセクションが画面に表示されているかどうかを監視し、ヘッダーのスクロールクラスを切り替えるコールバック関数
 * @param {IntersectionObserverEntry[]} entries IntersectionObserverからのエントリー配列
 */
const toggleHeaderScrollClass = (entries) => {
  const header = document.getElementById('js-header');
  if (!entries[0].isIntersecting) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
};

new SetObserver('#js-hero', toggleHeaderScrollClass, { threshold: 0.4 });
