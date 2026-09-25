const wrappers = ['article', '.proto-content'];

wrappers.forEach((wrapper) => {
  document.querySelectorAll(wrapper)?.forEach((el) => {
    el?.querySelectorAll('a').forEach((anchor) => {
      anchor.target = '_blank';
    });
  });
});