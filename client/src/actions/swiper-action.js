const initSwiper = () => {
  const width = document.documentElement.clientWidth;
  if (width < 576) {
    showSwiper('horizontal', 50, 3);
    return;
  }
  showSwiper();
};

const showSwiper = (
  direction = 'vertical',
  spaceBetween = 0,
  slidesPerView = 4
) => {
  const swiper = new Swiper('.mySwiper', {
    spaceBetween: spaceBetween,
    slidesPerView: slidesPerView,
    direction: direction,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export default initSwiper;
