
import { dictionaryInvert } from '../../utils/object';
import Dictionary from '../../types/dictionary';

export const signToLetter = (
  key: string,
  dictionary: Dictionary,
): string => (dictionary[key] || '');

export const getMorseDictionary = (
  dictionary: Dictionary,
  morseToLetter = true,
): Dictionary => (morseToLetter ? dictionaryInvert(dictionary) : dictionary);
