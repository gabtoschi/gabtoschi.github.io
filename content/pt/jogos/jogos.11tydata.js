import LOCALE from '../../../_data/locales/pt.js'

export default {
  "tags": ["games-pt"],
  "header": "games",
  "layout": "layouts/game.njk",
  eleventyComputed: {
    description: (data) => LOCALE['computed.description.game'](data.title),
  }
}