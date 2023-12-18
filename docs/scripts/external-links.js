const postContent = document.getElementById('post-content');

const allParagraphs = [...postContent.childNodes].filter(node => node.nodeName === 'P');

const allUnorderedList = [...postContent.childNodes].filter(node => node.nodeName === 'UL');
const allListChildren = allUnorderedList.map(ul => [...ul.childNodes].filter(node => node.nodeName === 'LI')).flat();

const allLinkWrappers = [...allParagraphs, ...allListChildren];
const allLinks = allLinkWrappers.map(wrapper => [...wrapper.childNodes].filter(node => node.nodeName === 'A')).flat();
const allExternalLinks = allLinks.filter(link => link.href.includes('http'));

allExternalLinks.forEach(link => {
  link.target = '_blank';
});