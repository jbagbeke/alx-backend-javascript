export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const endValue = weakMap.get(endpoint) + 1;

    weakMap.set(endpoint, endValue);

    if (endValue >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
