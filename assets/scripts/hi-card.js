(function () {
  const delay = 600;

  const hoverTrigger = document.querySelector('.hi-right');
  const backs = document.querySelectorAll('.back-item');

  const shuffle = (old) => {
    const array = [...old];

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const backLen = backs.length;
  let randomIndexes = shuffle([...Array(backs.length).keys()]);
  let currentRandomIndex = 0;

  let changeTimeout = null;

  const changeBack = () => {
    const oldBack = randomIndexes[currentRandomIndex];
    currentRandomIndex = (currentRandomIndex + 1) % backLen;
    const newBack = randomIndexes[currentRandomIndex];

    backs[oldBack].classList.add('hidden');
    backs[newBack].classList.remove('hidden');

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