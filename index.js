// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fillTemplate = require('./src/template');

// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of project? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter project title!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter description of project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation details (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter installation details!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage details (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter usage details!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributung details (Required)',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please enter contributing details!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter tests (Required)',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter tests!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmEmail',
        message: 'Would you like to provide email on README?',
        default: true
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email address (Required)',
        when: ({ confirmEmail }) => {
            if (confirmEmail) {
                return true;
            } else {
                return false;
            }
        },
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license?',
        default: true
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'Choose licenses (Check all that apply)',
        choices: ['Apache License 2.0', 
                  'GNU General Public License v3.0', 
                  'MIT License', 
                  'BSD 2-Clause "Simplified" License', 
                  'BSD 3-Clause "New" or "Revised" License', 
                  'Boost Software License 1.0', 
                  'Creative Commons Zero v1.0 Universal',
                  'Eclipse Public Licence 2.0',
                  'GNU Affero General Public License v3.0',
                  'GNU General Public License v2.0',
                  'GNU Lesser General Public License v2.1',
                  'Mozilla Public License 2.0',
                  'The Unlicense'
                 ],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
              return true;
            } else {
              return false;
            }
        },
        validate: licensesInput => {
            if (licensesInput) {
              return true;
            } else {
              console.log('Please enter license!');
              return false;
            }
        }
      }
    ]);
  };
questions().then(answers => console.log(answers));
questions()
.then(readmeData => {
  return fillTemplate(readmeData);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
