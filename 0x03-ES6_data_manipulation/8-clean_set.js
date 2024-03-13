export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const setArray = Array.from(set);

  const stringArray = setArray.filter((element) => (element !== undefined) ? element.startsWith(startString) : '')
    .map((element) => element !== undefined ? element.slice(startString.length) : '').join('-'); /* eslint no-confusing-arrow: 0 */

  return stringArray;
}
