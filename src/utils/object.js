/* eslint-disable import/prefer-default-export */

/**
 * Replace key-value pairs
 * @param {Object} object
 * @return {Object}
 */
export const objectInvert = object => Object.keys(object)
  .reduce((obj, key) => Object.assign(
    {},
    obj,
    { [object[key]]: key },
  ), {});
