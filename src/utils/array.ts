/* eslint-disable import/prefer-default-export */

/**
 * Sort array elements using an array
 * @param {Array} array Given array of elements
 * @param {Array} order Array contaning order numbers, e.g. [2, 1, 3, 0]
 * @returns {Array} Sorted array
 */
export const sortArrayByOrderList = <T extends {}>(
  array: Array<T>,
  order: Array<number>,
): Array<T> => {
  const sorter = (a: any, b: any) => (order.indexOf(a) - order.indexOf(b));

  return array.sort(sorter);
};

export const getArrayWithoutItem = (array, item) => {
  const index = array.indexOf(item);

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};
