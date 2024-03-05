function taskFirst() {
  const myVar = 'I prefer const when I can.';

  return (myVar);
}

function taskNext() {
  let myVar = 'But sometimes ley is okay';

  return (myVar);
}

module.exports = {
  taskFirst,
  taskNext
};