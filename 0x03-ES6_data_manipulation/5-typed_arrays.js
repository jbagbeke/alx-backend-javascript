export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuffer);

  try {
    dataView.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }

  return arrayBuffer;
}
