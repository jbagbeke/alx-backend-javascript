const fs = require('fs')

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.split('\n');
        const fields = {};

        lines.forEach((line) => {
          if (line) {
            line = line.split(',');
            const len = line.length - 1;
            if (line[len] !== 'field') {
              if (line[len] in fields) {
                fields[line[len]].push(line[0]);
              } else {
                fields[line[len]] = [line[0]];
              }
            }
          }
        });
        resolve(fields);
      }
    });
  });
}

module.exports = readDatabase;
