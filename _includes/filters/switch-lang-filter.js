import LOCALE_EN from '../../_data/locales/en.js';
import LOCALE_PT from '../../_data/locales/pt.js';

export default function(translate) {
  if (translate) return translate;

  if (this.page.lang == 'en') return LOCALE_PT['url.home'];
  if (this.page.lang == 'pt') return LOCALE_EN['url.home'];
}