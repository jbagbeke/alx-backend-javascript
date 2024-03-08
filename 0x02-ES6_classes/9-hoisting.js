export class HolbertonClass {
  constructor(year, location) {
    this._verifyNumber(year);
    this._verifyString(location);
  }

  get year() {
    return this._year;
  }

  set year(year) {
    this._verifyNumber(year);
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._verifyString(location);
  }

  _verifyString(string) {
    if (typeof string === 'string') {
      this._name = string; /* eslint no-underscore-dangle: 0 */
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  _verifyNumber(number) {
    if (typeof number === 'number') {
      this._length = number;
    } else {
      throw new TypeError('Length must be a number');
    }
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, classObject) {
    this._verifyString(firstName, 'first'); /* eslint no-underscore-dangle: 0 */
    this._verifyString(lastName, 'last');
    this._verifyClass(classObject);
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`; /* eslint max-classes-per-file: 0 */
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._verifyString(firstName, 'first');
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    this._verifyString(lastName, 'last');
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  _verifyString(string, desc) {
    if (typeof string === 'string') {
      if (desc === 'first') {
        this._firstName = string;
      } else {
        this._lastname = string; /* eslint no-underscore-dangle: 0 */
      }
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  _verifyClass(currentClass) {
    if (currentClass instanceof HolbertonClass) {
      this._holbertonClass = currentClass; /* eslint no-underscore-dangle: 0 */
    } else {
      throw new TypeError('Invalid Currency Object Passed');
    }
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
