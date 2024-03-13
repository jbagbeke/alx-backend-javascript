export default function cleanSet(set, startString) {
  const stringArray = [];

  if (startString.length <= 0) {
    return '';
  }

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      stringArray.push(element.slice(startString.length));
    }
  });

  return stringArray.join('-');
}
