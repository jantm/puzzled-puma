import { objectInvert } from '../../utils/object';
import { sortArrayByOrderList } from '../../utils/array';
import { INDEX_TO_CODE } from './semaphore.constants';


export const patternToLetter = (key, dictionary) => dictionary[key] || null;

// create a string-key from array of "coordinates"
export const getPatternString = pattern => pattern.join('-');

export const getCodeKeyFromPattern = (srcPattern) => {
  // sort the indexes to keep the "coordinates" order consistent:
  let pattern = srcPattern.sort((a, b) => (a - b));
  // convert indexes to string "coordinates":
  pattern = pattern.map(idx => INDEX_TO_CODE[idx]);

  return getPatternString(pattern);
};


export const getSemaphoreDictionary = (dictionary, semaphoreToLetter = true) => {
  let patternList;

  // create a new dictionary with flattened semaphore codes:
  const flatDictionary = Object.keys(dictionary).reduce((newDictionary, letterKey) => {
    // get an ordered list of positions in a pattern:
    patternList = sortArrayByOrderList(dictionary[letterKey], INDEX_TO_CODE);
    newDictionary[letterKey] = getPatternString(patternList);

    return newDictionary;
  }, {});

  return semaphoreToLetter ? objectInvert(flatDictionary) : flatDictionary;
};
