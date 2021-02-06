const licenseList = [
    {
        name: 'Apache license 2.0', 
        SPDX: 'Apache-2.0',
        link: ''
    },
    {
        name: 'GNU General Public License v3.0',
        SPDX: 'GPL-3.0',
        link: ''
    },
    { 
        name: 'MIT License', 
        SPDX: 'MIT',
        link: ''
    },
    {
        name: 'BSD 2-Clause "Simplified" License', 
        SPDX: 'BSD-2',
        link: ''
    },
    {
        name: 'BSD 3-Clause "New" or "Revised" License', 
        SPDX: 'BSD-3',
        link: ''
    },
    {
        name: 'Boost Software License 1.0', 
        SPDX: 'BSL-1.0',
        link: ''
    },
    {
        name: 'Creative Commons Zero v1.0 Universal',
        SPDX: 'CC0-1.0',
        link: ''
    },
    {
        name: 'Eclipse Public Licence 2.0',
        SPDX: 'EPL-2.0',
        link: ''
    },
    {
        name: 'GNU Affero General Public License v3.0',
        SPDX: 'AGPL-3.0',
        link: ''
    },
    {
        name: 'GNU General Public License v2.0',
        SPDX: 'GPL-2.0',
        link: ''
    },
    {
        name: 'GNU Lesser General Public License v2.1',
        SPDX: 'LGPL-2.1',
        link: ''
    },
    {
        name: 'Mozilla Public License 2.0',
        SPDX: 'MPL-2.0',
        link: ''
    },
    {
        name:'The Unlicense',
        SPDX: 'Unlicense',
        link: ''
    }
];
// create email literal if user confirms to add email in readme
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
   /* if (licenseArr === 'undefined') {
        return '';
    }
    return `
${licenseArr.map(([licensename]) => {
        return `
[![License](https://img.shields.io/badge/License-${licensename}-red)](https://choosealicense.com/licenses/mit/)
        `;

})
.join(' ')}
    `;*/
};
// create licenses list
const generateLicense = mylicenseArr => {
    console.log(mylicenseArr)
    if (mylicenseArr === 'undefined') {
        return `
No licenses.
        `;
    }
    return `
    ${mylicenseArr
    .map(({section, license, confirmLicense}) => {
        if (confirmLicense === false) {
            return '';
        }
        return `
The ${section} is licensed under ${license}.      
        `;
    })
    .join ('  ')}
    `;
}
// create template literal
module.exports = templateData => {
    console.log(templateData);

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
${generateEmail(templateData.email)}
## License
${generateLicense(templateData.myLicense)}

`
}