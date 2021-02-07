const fs = require('fs');

const generateMarkdown = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok:true,
        message: 'Readme created!'
      });
    });
  });
}

module.exports = generateMarkdown;

