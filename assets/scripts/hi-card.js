(function () {
  const delay = 600;

  const hoverTrigger = document.querySelector('.hi-right');
  const backs = document.querySelectorAll('.back-item');

  let currentBack = -1;
  let changeTimeout = null;

  const changeBack = () => {
    const len = backs.length;
    let randomIndex = Math.floor(Math.random() * len);
    if (randomIndex === currentBack) randomIndex = (randomIndex + 1) % len;

    for (let i = 0; i < len; i++) {
      if (i == randomIndex) {
        backs[i].classList.remove('hidden');
      } else {
        backs[i].classList.add('hidden');
      }
    }

    currentBack = randomIndex;
    changeTimeout = null;
  }

  changeBack();

  hoverTrigger.addEventListener('mouseenter', () => {
    changeTimeout = setTimeout(() => {
      changeBack();
      changeTimeout = null;
    }, delay);
  });

  hoverTrigger.addEventListener('mouseleave', () => {
    if (changeTimeout) {
      clearTimeout(changeTimeout);
      changeTimeout = null;
    }
  });
})();