import { removeHtmlWhitespace } from '../utils/whitespace.util.js';

export default async function(ctx, cfg, content, icon) {
  const rendered = await cfg.getFilter('renderContent').bind(ctx)(content, 'md');

  return removeHtmlWhitespace(`
    <div class="icon-text">
      <span class="icon">${icon}</span>
      ${rendered}
    </div>
  `);
}