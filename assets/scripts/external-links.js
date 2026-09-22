const article = document.querySelector('article');
const anchors = article?.querySelectorAll('a');

anchors.forEach((anchor) => {
  if (anchor.href.includes('http')) anchor.target = '_blank';
})