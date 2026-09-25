import LOCALE from '../../_data/locales/en.js';

export default {
  "tags": ["games-en"],
  "header": "games",
  "layout": "layouts/game.njk",
  eleventyComputed: {
    description: (data) => LOCALE['computed.description.game'](data.title),
  }
}