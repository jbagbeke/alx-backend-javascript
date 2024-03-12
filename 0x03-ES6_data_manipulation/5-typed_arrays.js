export default function createInt8TypedArray(length, position, value) {
  const ArrayBuffer = new Int8Array(length);

  try {
    ArrayBuffer[position] = value;
  } catch (error) {
    throw new RangeError('Position outside range');
  }
}
