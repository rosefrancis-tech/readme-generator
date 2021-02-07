const licenseList = [
    {
        name: 'Apache license 2.0', 
        SPDX: 'Apache%202.0',
        link: 'http://www.apache.org/licenses/LICENSE-2.0.txt',
        color: 'yellow'
    },
    {
        name: 'GNU General Public License v3.0',
        SPDX: 'GPL%203.0',
        link: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
        color: 'blue'
    },
    { 
        name: 'MIT License', 
        SPDX: 'MIT',
        link: 'https://choosealicense.com/licenses/mit/',
        color: 'violet'
    },
    {
        name: 'BSD 2-Clause "Simplified" License', 
        SPDX: 'BSD%202',
        link: 'https://opensource.org/licenses/BSD-3-Clause',
        color: 'orange'
    },
    {
        name: 'BSD 3-Clause "New" or "Revised" License', 
        SPDX: 'BSD%203',
        link: 'https://opensource.org/licenses/BSD-3-Clause',
        color: 'orange'
    },
    {
        name: 'Boost Software License 1.0', 
        SPDX: 'BSL%201.0',
        link: 'https://choosealicense.com/licenses/bsl-1.0/',
        color: 'violet'
    },
    {
        name: 'Creative Commons Zero v1.0 Universal',
        SPDX: 'CC0%201.0',
        link: 'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
        color: 'lightgrey'
    },
    {
        name: 'Eclipse Public Licence 2.0',
        SPDX: 'EPL%202.0',
        link: 'https://opensource.org/licenses/EPL-2.0',
        color: 'red'
    },
    {
        name: 'GNU Affero General Public License v3.0',
        SPDX: 'AGPL%203.0',
        link: 'https://choosealicense.com/licenses/agpl-3.0/',
        color: 'blue'
    },
    {
        name: 'GNU General Public License v2.0',
        SPDX: 'GPL%202.0',
        link: 'https://opensource.org/licenses/GPL-2.0',
        color: 'blue'
    },
    {
        name: 'GNU Lesser General Public License v2.1',
        SPDX: 'LGPL%202.1',
        link: 'https://opensource.org/licenses/LGPL-2.1',
        color: 'lightblue'
    },
    {
        name: 'Mozilla Public License 2.0',
        SPDX: 'MPL%202.0',
        link: 'https://choosealicense.com/licenses/mpl-2.0/',
        color: 'brightgreen'
    },
    {
        name:'The Unlicense',
        SPDX: 'Unlicense',
        link: 'https://choosealicense.com/licenses/unlicense/',
        color: 'lightgreen'
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
const generateBadges = mylicenseArr => {
    if (mylicenseArr === 'undefined') {
        return '';
    }
    return `
    ${mylicenseArr
    .map(({license, confirmLicense}) => {
        if (confirmLicense === false) {
            return '';
        }
        var filteredArray = licenseList.filter(function(obj) {
            return (obj.name === license);
        })
        return `
[![License](https://img.shields.io/badge/License-${filteredArray[0].SPDX}-${filteredArray[0].color})](${filteredArray[0].link}) `;
    })
    .join ('')}
    `;
};

// create licenses list
const generateLicense = mylicenseArr => {
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
};

// create template literal
module.exports = templateData => {
    console.log(templateData);

    return `
${generateBadges(templateData.myLicense)}
# ${templateData.title}
## Table of Contents
* [Description](#Description)
* [Live project](#Live-project)
* [GitHub Repository](#GitHub-Repository)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)
## Description 
${templateData.description}
## Live Project
${templateData.liveLink}
## GitHub Repository
The project's repo link: ${templateData.projectRepoLink}
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
};