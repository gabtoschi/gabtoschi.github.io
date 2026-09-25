import { removeHtmlWhitespace } from '../utils/whitespace.util.js';

export default function(list) {
  const links = list.map((item) => `
    <a href="${ item.page.url }" class="game-item">
      <img alt="${ item.data.title }" src="${ item.data.cover }" />
    </a>
  `);

  const finalHtml = `
    <div class="games-list">
      ${ links.join('') }
    </div>
  `;

  return removeHtmlWhitespace(finalHtml);
}

