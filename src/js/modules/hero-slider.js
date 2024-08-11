function heroSlider() { 
  const heroBgImages = document.querySelectorAll('.hero-bg__image');
  const heroItems = document.querySelectorAll('.hero__item');

  let activeSlide;

  heroItems.forEach(element => {
    element.addEventListener('mouseenter', function(e) {
      let target = e.target;
      activeSlide = target.getAttribute('data-bg-image');
      setImage(activeSlide);
    });
  });

  function setImage(activeSlide) {
    heroBgImages.forEach(element => {
      let elementTarget = element.getAttribute('data-bg-target');

      if(elementTarget == activeSlide) {
        element.classList.add('hero-bg__image--active');
      } else {
        element.classList.remove('hero-bg__image--active');
      }
    });
  }
}

export default heroSlider;