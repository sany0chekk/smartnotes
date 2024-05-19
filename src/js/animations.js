import ScrollReveal from 'scrollreveal';

elementAnimation('left', '.header-logo');
listAnimation('top', '50px', '.header-nav-item');
elementAnimation('right', '.header-btn');
elementAnimation('right', '.header-mobile-open');

elementAnimation('left', '.hero-title');
elementAnimation('right', '.hero-img');
elementAnimation('bottom', '.hero-descr');
elementAnimation('bottom', '.hero-form');

elementAnimation('right', '.reviews-list');

elementAnimation('left', '.benefits-title');
elementAnimation('right', '.benefits-descr');
listAnimation('bottom', '100px', '.benefits-item');

elementAnimation('bottom', '.video-container');

elementAnimation('top', '.plans-title');
elementAnimation('top', '.plans-descr');

elementAnimation('right', '.plans-version');

listAnimation('bottom', '100px', '.plans-item');

elementAnimation('left', '.questions-title');
elementAnimation('right', '.questions-descr');
listAnimation('bottom', '100px', '.questions-item');

elementAnimation('left', '.sign-content');
elementAnimation('right', '.sign-img');

elementAnimation('left', '.footer-content');

elementAnimation('top', '.footer-item-title');
listAnimation('bottom', '100px', '.footer-item-el');

elementAnimation('left', '.footer-bottom');

function elementAnimation(position, element) {
  ScrollReveal().reveal(element, {
    origin: position,
    distance: '50px',
    duration: 1000,
    delay: 100,
  });
}

function listAnimation(position, distance, element) {
  const sr = ScrollReveal({
    origin: position,
    distance,
    duration: 1000,
    delay: 100,
  });

  const elements = document.querySelectorAll(element);

  elements.forEach((item, index) => {
    const delay = index * 100;
    sr.reveal(item, { delay });
  });
}
