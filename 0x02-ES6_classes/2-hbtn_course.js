export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name; /* eslint no-underscore-dangle: 0 */
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (typeof students === 'object') {
      students.forEach((element) => {
        if (typeof element !== 'string') {
          throw new TypeError('Element must be a string');
        }
      });
    }

    this._students = students;
  }

  get students() {
    return this._students;
  }
}
