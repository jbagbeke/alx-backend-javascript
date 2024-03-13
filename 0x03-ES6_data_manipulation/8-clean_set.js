export default function cleanSet(set, startString) {
  const stringArray = [];

  set.forEach((element) => {
    if (startString.length === 0) {
      return;
    }
    if (element.startsWith(startString)) {
      stringArray.push(element.slice(startString.length));
    }
  });

  return stringArray.join('-');
}
