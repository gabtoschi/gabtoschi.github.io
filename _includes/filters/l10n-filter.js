import { getLocale } from '../utils/l10n.util.js';

export default function(key) {
  return getLocale(this.page.lang)[key] || key;
}