export default function updateUniqueItems(mapObject) {
  if (!(mapObject instanceof Map)) {
    throw new Error('Cannot process');
  }

  mapObject.forEach((value, key) => {
    if (value === 1) {
      mapObject.set(key, 100);
    }
  });

  return mapObject;
}
