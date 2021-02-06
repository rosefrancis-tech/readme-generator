// create email if user confirms to add
const generateEmail = email => {
     if (!email) {
         return '';
     }
     return `
Please feel free to write to me at ${email}
`
};
// create license badges
const generateBadges = licenseArr => {
    if (licenseArr === 'undefined') {
        return '';
    }
    return `
${licenseArr.map(({licensename}) => {
        return `
[![License](https://img.shields.io/badge/License-${licensename}-red)](https://choosealicense.com/licenses/mit/)
        `;

})
.join(' ')}
    `;
}
// create licenses list
const generateLicense = licenseArr => {
    if (licenseArr === 'undefined') {
        return '';
    }
    return `
${licenseArr.join(', ')}
    `
}
// create template literal
module.exports = templateData => {
    return `
${generateBadges(templateData.licenses)}
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
${generateEmail(templateData.email)}
## License
${generateLicense(templateData.licenses)}

`
}