import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

const worksSlider = new Splide('#js-worksSlider', {
  // https://splidejs.com/guides/options/
  type: 'fade',
  rewind: true,
  classes: {
    arrows: 'splide__arrows your-class-arrows',
    arrow: 'splide__arrow your-class-arrow',
    prev: 'splide__arrow--prev your-class-prev',
    next: 'splide__arrow--next your-class-next',
  },
});
worksSlider.mount();
