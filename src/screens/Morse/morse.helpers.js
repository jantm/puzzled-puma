
import { objectInvert } from '../../utils/object';
import { sortArrayByOrderList } from '../../utils/array';


export const signToLetter = (key, dictionary) => {
  return dictionary[key] || '';
};

export const getMorseDictionary = (
  dictionary: Object,
  morseToLetter: Boolean = true,
) => (morseToLetter ? objectInvert(dictionary) : dictionary);
