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

        let output = `Number of students: ${count}\n`;
        for (const [key, val] of Object.entries(studentFields)) {
          output += `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}\n`;
        }
        resolve(output.slice(0, -1));
      }
    });
  });
}

const http = require('http');

const app = http.createServer((request, response) => {
  const { url } = request;

  if (url === '/') {
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    if (process.argv[2]) {
      countStudents(process.argv[2]).then((res) => {
        response.end(`This is the list of our students\n${res}`);
      }).catch(() => {
        response.statusCode = 404;
        response.end('Cannot load the database');
      });
    }
  }
});

app.listen(1245);
