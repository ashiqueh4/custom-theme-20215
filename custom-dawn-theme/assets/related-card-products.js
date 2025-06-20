function initRelatedProductsSlider() {
  document.querySelectorAll('.related-slider-wrapper').forEach((sliderWrapper) => {
    const swiperContainer = sliderWrapper.querySelector('.reltSwiper');
    
     const parent = sliderWrapper.closest('[data-product-dcl]');

    // if (!swiperContainer || swiperContainer.dataset.initialized === 'true') return;
     if (!swiperContainer || swiperContainer.dataset.initialized === 'true' || !parent) return;
    
    const slides = swiperContainer.querySelectorAll('.swiper-slide');
    if (slides.length === 0) return;

    const enableLoop = slides.length > 3;

    // Read values from data attributes
    const slidesDesktop = parseInt(parent.dataset.productDcl) || 3;
    const slidesMobile = parseInt(parent.dataset.productMcl) || 2;

    new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: false,
      loopedSlides: slides.length,
      loopAdditionalSlides: slides.length,
      autoplay: false,
      breakpoints: {
        0: { slidesPerView: slidesMobile },
        768: { slidesPerView: slidesDesktop },
        1024: { slidesPerView: slidesDesktop }
      },
      on: {
        init: function () {
          swiperContainer.dataset.initialized = 'true';
        }
      }
    });

    // Safety in case init event fails
    swiperContainer.dataset.initialized = 'true';
  });
}

function watchDrawerAndInitSlider() {
  const drawer = document.querySelector('cart-drawer');
  if (!drawer) return;

  const observer = new MutationObserver(() => {
    const sliderWrapper = drawer.querySelector('.related-slider-wrapper');
    const slides = sliderWrapper?.querySelectorAll('.swiper-slide');

    if (sliderWrapper && slides?.length > 0) {
      initRelatedProductsSlider();
    }
  });

  observer.observe(drawer, { childList: true, subtree: true });
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  initRelatedProductsSlider();
  watchDrawerAndInitSlider();
});

// Optional safety re-inits
document.addEventListener('cart:drawer:open', () => {
  setTimeout(() => {
    initRelatedProductsSlider();
  }, 500);
});

document.addEventListener('cart:updated', () => {
  setTimeout(() => {
    initRelatedProductsSlider();
  }, 500);
});
