import { removeHtmlWhitespace } from '../utils/whitespace.util.js';

export default function(id, start = '') {
  const finalHtml = `
    <div class="youtube">
      <iframe
        width="840"
        height="472"
        src="https://www.youtube.com/embed/${id}?start=${start}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  `;

  return removeHtmlWhitespace(finalHtml);
}

