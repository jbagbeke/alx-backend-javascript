export default function groceriesList() {
  const numArray = [10, 10, 1, 1, 5];
  const mapArray = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'].map((element, index) => [element, numArray[index]]);
  const newMap = new Map(mapArray);

  return newMap;
}
