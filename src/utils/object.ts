import Dictionary from '../types/dictionary';

/* eslint-disable import/prefer-default-export */

/**
 * Replace key-value pairs
 * @param {Object} object
 * @return {Object}
 */
export const dictionaryInvert = (dict: Dictionary): Dictionary => Object.keys(dict)
  .reduce((obj, key) => Object.assign(
    {},
    obj,
    { [dict[key]]: key },
  ), {});
