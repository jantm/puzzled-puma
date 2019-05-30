/* eslint-disable import/prefer-default-export */


// Sort array elements using an order defining array
export const sortArrayByOrderList = <T extends {}>(
  array: Array<T>,
  order: Array<any>,
): Array<T> => {
  const sorter = (a: any, b: any) => (order.indexOf(a) - order.indexOf(b));

  return array.sort(sorter);
};


export const getArrayWithoutItem = <T>(array: Array<T>, item: T) => {
  const index = array.indexOf(item);

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};
