import pt from '../../_data/locales/pt.js';
import en from '../../_data/locales/en.js';

export function getLocale(lang) {
  if (lang === 'en') return en;
  if (lang === 'pt') return pt;
  return {};
}