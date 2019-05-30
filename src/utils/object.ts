/* eslint-disable import/prefer-default-export */
import Dictionary from '../types/dictionary';

// Replace key-value pairs
export const dictionaryInvert = (dict: Dictionary): Dictionary => Object.keys(dict)
  .reduce((obj, key) => Object.assign(
    {},
    obj,
    { [dict[key]]: key },
  ), {});
