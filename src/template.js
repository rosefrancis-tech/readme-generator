// create template literal
module.exports = templateData => {
    return `
{generateBadges(templateData.licenses)}
# ${templateData.title}
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)
## Description 
${templateData.description}
## Installation
${templateData.installation}
## Usage
${templateData.usage}
## Contributing
${templateData.contributing}
## Tests
${templateData.tests}
## Questions
For questions, please visit the github profile.
Github profile : https://github.com/${templateData.github}
Please feel free to contact in email.
Email: ${templateData.email}
## License
{generateLicense(templateData.licenses)}

`
}