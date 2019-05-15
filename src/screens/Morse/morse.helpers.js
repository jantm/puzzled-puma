
import { objectInvert } from '../../utils/object';

export const signToLetter = (key, dictionary) => dictionary[key] || '';

export const getMorseDictionary = (
  dictionary: Object,
  morseToLetter: Boolean = true,
) => (morseToLetter ? objectInvert(dictionary) : dictionary);
