const fs = require('fs');

function countStudents(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content) {
      process.exit();
    }
    const lines = content.split('\n');
    const CS = [];
    const SWE = [];
    let studentCount = 0;

    lines.forEach((line) => {
      if (line) {
        if (line.endsWith('CS')) {
          CS.push(line.split(',')[0]);
          studentCount += 1;
        } else if (line.endsWith('SWE')) {
          SWE.push(line.split(',')[0]);
          studentCount += 1;
        }
      }
    });

    process.stdout.write(`Number of students: ${studentCount}\n`);
    process.stdout.write(`Number of CS: ${CS.length}. List: ${CS.join(', ')}\n`);
    process.stdout.write(`Number of SWE: ${SWE.length}. List ${SWE.join(', ')}\n`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
