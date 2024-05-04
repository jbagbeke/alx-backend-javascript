const fs = require('fs');

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
            const lne = line.split(',');
            const len = lne.length - 1;
            if (lne[len] !== 'field') {
              if (lne[len] in fields) {
                fields[lne[len]].push(lne[0]);
              } else {
                fields[lne[len]] = [lne[0]];
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
