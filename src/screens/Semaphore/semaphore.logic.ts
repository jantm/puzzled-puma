import { dictionaryInvert } from '../../utils/object';
import { sortArrayByOrderList } from '../../utils/array';
import { INDEX_TO_CODE } from './semaphore.constants';
import Dictionary from '../../types/dictionary';


export const patternToLetter = (key: string, dict: Dictionary) => dict[key] || null;

// create a string-key from array of "coordinates"
export const getPatternString = (pattern: Array<any>) => pattern.join('-');

export const getCodeKeyFromPattern = (srcPattern: Array<string>) => {
  // sort the indexes to keep the "coordinates" order consistent:
  let pattern = srcPattern.sort((a: any, b: any) => (a - b));
  // convert indexes to string "coordinates":
  pattern = pattern.map((idx: any) => INDEX_TO_CODE[idx]);

  return getPatternString(pattern);
};


export const getSemaphoreDictionary = (dictionary: Dictionary, semaphoreToLetter = true) => {
  let patternList;

  // create a new dictionary with flattened semaphore codes:
  const flatDictionary = Object.keys(dictionary).reduce((
    newDictionary: Dictionary,
    letterKey: string,
  ) => {
    // get an ordered list of positions in a pattern:
    patternList = sortArrayByOrderList(dictionary[letterKey], INDEX_TO_CODE);
    newDictionary[letterKey] = getPatternString(patternList);

    return newDictionary;
  }, <Dictionary>{});

  return semaphoreToLetter ? dictionaryInvert(flatDictionary) : flatDictionary;
};
