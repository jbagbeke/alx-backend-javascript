const fs = require('fs');

function countStudents(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content) {
      process.exit();
    }
    const lines = content.split('\n');
    const studentFields = {};
    let studentCount = 0;

    lines.forEach((line) => {
      if (line.length > 0) {
        const lne = line.split(',');
        const fld = lne[lne.length - 1];

        if (fld && fld !== 'field') {
          studentCount += 1;
          if (fld in studentFields) {
            studentFields[fld].push(lne[0]);
          } else {
            studentFields[fld] = [lne[0]];
          }
        }
      }
    });

    console.log(`Number of students: ${studentCount}`);
    for (const [key, val] of Object.entries(studentFields)) {
      console.log(`Number of ${key}: ${val.length}. List: ${val.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
