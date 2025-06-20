function initCartTopSlider() {
  document.querySelectorAll('ecomminds-cart-top-slider').forEach((sliderWrapper) => {
    const swiperContainer = sliderWrapper.querySelector('.ctstSwiper');

    if (!swiperContainer || swiperContainer.dataset.initialized === 'true') return;

    const slides = swiperContainer.querySelectorAll('.swiper-slide');
    if (slides.length === 0) return;

    new Swiper(swiperContainer, {
      slidesPerView: 1,
      loop: slides.length > 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      speed: 500,
      allowTouchMove: true,
      on: {
        init: () => {
          swiperContainer.dataset.initialized = 'true';
        }
      }
    });

    swiperContainer.dataset.initialized = 'true';
  });
}

function observeCartDrawerForSlider() {
  const cartDrawer = document.querySelector('cart-drawer');
  if (!cartDrawer) return;

  const observer = new MutationObserver(() => {
    const slider = cartDrawer.querySelector('ecomminds-cart-top-slider .ctstSwiper');
    if (slider && !slider.dataset.initialized) {
      initCartTopSlider();
    }
  });

  observer.observe(cartDrawer, { childList: true, subtree: true });
}

// Init everything
document.addEventListener('DOMContentLoaded', () => {
  initCartTopSlider();
  observeCartDrawerForSlider();
});

// Also recheck on drawer open or cart update
document.addEventListener('cart:drawer:open', () => {
  setTimeout(initCartTopSlider, 100);
});
document.addEventListener('cart:updated', () => {
  setTimeout(initCartTopSlider, 100);
});
