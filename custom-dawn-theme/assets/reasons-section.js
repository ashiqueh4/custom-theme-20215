document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ecomminds-reasons-section-slider').forEach((sliderWrapper, index) => {
    const swiperContainer = sliderWrapper.querySelector('.wrssSwiper');
    if (!swiperContainer || swiperContainer.dataset.initialized === 'true') return;

    // Mark as initialized
    swiperContainer.dataset.initialized = 'true';

    // Scope navigation and pagination buttons
    const nextEl = sliderWrapper.querySelector('.slider-next');
    const prevEl = sliderWrapper.querySelector('.slider-prev');
    const paginationEl = sliderWrapper.querySelector('.swiper-pagination');

    new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: nextEl,
        prevEl: prevEl,
      },
      pagination: {
        el: paginationEl,
        clickable: true,
      },
      breakpoints: {
        600: {
          slidesPerView: 2
        },
        900: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }
    });
  });
});
