// include packages required
const fs = require('fs');

// ceate promise to write and create readme file in 'dist' folder
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

