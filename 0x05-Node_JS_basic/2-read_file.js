const fs = require('fs');

function countStudents(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const CS = [];
    const SWE = [];

    process.stdout.write(`Number of students: ${lines.length - 1}\n`);
    lines.forEach((line) => {
      if (line.endsWith('CS')) {
        CS.push(line.split(',')[0]);
      } else if (line.endsWith('SWE')) {
        SWE.push(line.split(',')[0]);
      }
    });

    process.stdout.write(`Number of CS: ${CS.length}. List: ${CS.join(', ')}\n`);
    process.stdout.write(`Number of SWE: ${SWE.length}. List ${SWE.join(', ')}\n`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
