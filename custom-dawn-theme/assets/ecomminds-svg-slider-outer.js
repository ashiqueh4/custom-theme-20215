function initSvgSlider() {
  document.querySelectorAll('ecomminds-svg-slider-outer').forEach((sliderWrapper) => {
    const swiperContainer = sliderWrapper.querySelector('.esstSwiper');

    if (!swiperContainer || swiperContainer.dataset.initialized === 'true') return;

    const slides = swiperContainer.querySelectorAll('.swiper-slide');
    if (slides.length === 0) return;

    new Swiper(swiperContainer, {
      slidesPerView: 8, // Default for large desktop
      spaceBetween: 10,
      loop: false,
      grabCursor: true,
      freeMode: true,
      speed: 400,
      scrollbar: {
        el: swiperContainer.querySelector('.swiper-scrollbar'),
        draggable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 4.5,
        },
        1024: {
          slidesPerView: 6.5,
        },
        1280: {
          slidesPerView: 7.5,
        },
      },
      on: {
        init: () => {
          swiperContainer.dataset.initialized = 'true';
        }
      }
    });

    swiperContainer.dataset.initialized = 'true';
  });
}

// Optional: auto-init and observe DOM changes
function observeSvgSliderSection() {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('ecomminds-svg-slider-outer').forEach((sliderWrapper) => {
      const swiperContainer = sliderWrapper.querySelector('.esstSwiper');
      if (swiperContainer && !swiperContainer.dataset.initialized) {
        initSvgSlider();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initSvgSlider();
  observeSvgSliderSection();
});

document.addEventListener('shopify:section:load', () => {
  setTimeout(initSvgSlider, 100);
});
