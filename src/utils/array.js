/* eslint-disable import/prefer-default-export */

/**
 * Sort array elements using an array
 * @param {Array} array Given array of elements
 * @param {Array} order Array contaning order numbers, e.g. [2, 1, 3, 0]
 * @returns {Array} Sorted array
 */
export const sortArrayByOrderList = (array, order) => {
  const sorter = (a, b) => (order.indexOf(a) > order.indexOf(b));

  return array.sort(sorter);
};
