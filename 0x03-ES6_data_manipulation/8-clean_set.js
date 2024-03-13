export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length < 1) {
    return '';
  }

  const setArray = Array.from(set);

  const stringArray = setArray.filter((element) => (element !== undefined) ? element.startsWith(startString) : '')
    .map((element) => (element.length > 0) ? element.slice(startString.length) : '').join('-'); /* eslint no-confusing-arrow: 0 */

  return stringArray;
}
