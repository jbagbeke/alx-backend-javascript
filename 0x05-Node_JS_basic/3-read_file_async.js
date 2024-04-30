const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentFields = {};
        let count = 0;
        const lines = data.split('\n');
        lines.forEach((line) => {
          const lne = line.split(',');
          const field = lne[lne.length - 1];
          
          if (lne.length > 0 && field.length > 0 && field !== 'field') {
            count += 1;
            if (field in studentFields) {
              studentFields[field].push(lne[0]);
            } else {
              studentFields[field] = [lne[0]];
            }
          }
        });

        console.log(`Number of students: ${count}`);
        for (const [key, val] of Object.entries(studentFields)) {
          console.log(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
