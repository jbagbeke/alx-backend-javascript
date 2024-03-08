import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
  constructor(number) {
    super(number);
  }

  evacuationWarningMessage() {
    console.log('HEllo'); /* eslint class-methods-use-this: 0 */
  }
}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}
