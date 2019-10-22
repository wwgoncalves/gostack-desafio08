/* Using library https://github.com/andyearnshaw/Intl.js
   due to lack of support from Android's JavaScriptCore */

/* Locale and currency fixed to Brazil */
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'BRL',
});
