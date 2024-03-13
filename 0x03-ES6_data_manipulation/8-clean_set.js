export default function cleanSet(set, startString) {
  const stringArray = [];

  set.forEach((element) => {
    if (element.startsWith(startString) && startString.length > 0) {
      stringArray.push(element.slice(startString.length));
    }
  });

  return stringArray.join('-');
}
