export const showOverlay = () => {
  const element = document.querySelector('.overlay');
  animateCSS(element, 'fadeIn');
  element.style.setProperty('display', 'flex', 'important');
};

export const hideOverlay = () => {
  const element = document.querySelector('.overlay');
  animateCSS(element, 'fadeOut').then(message => {
    element.style.setProperty('display', 'none', 'important');
  });
};

export const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = element;
    node.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });

export const initSwiper = () => {
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
  window.addEventListener('resize', function (event) {
    swiper.destroy(true, true);
    const width = document.documentElement.clientWidth;
    if (width < 576) {
      initSwiper('horizontal', 50, 3);
      return;
    }
    initSwiper();
  });
};
