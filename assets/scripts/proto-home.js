(function () {
  const images = [...document.querySelectorAll('.image-loader.prototypes')].map((el) => el.src);
  const dest = document.querySelector('.proto-right');

  const shuffle = (old) => {
    const array = [...old];

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const len = images.length;
  let indexes = shuffle([...Array(images.length).keys()]);
  let counter = -1;

  const changeImage = () => {
    counter = (counter + 1) % len;
    dest.style.backgroundImage = `url(${images[indexes[counter]]})`;
  }
  changeImage();

  setInterval(changeImage, 3000);
})();