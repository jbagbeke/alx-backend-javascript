const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents (request, response) {
    readDatabase(process.argv[2]).then((res) => {
      let output = 'This is the list of our students\n';

      for (const [key, val] of Object.entries(res)) {
        output += `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}\n`;
      }
      response.send(output.slice(0, -1));
    }).catch(() => {
      response.statusCode = 500;
      response.send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor (request, response) {
    const major = request.params.major;

    if (['CS', 'SWE'].includes(major)) {
      readDatabase(process.argv[2]).then((res) => {
        const output = `List: ${res[major].join(', ')}`;
        response.send(output);
      }).catch(() => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      })
    } else {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
