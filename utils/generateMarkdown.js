function generateMarkdown(data, profileImg) {
  return `
# ${data.title}
[![GitHub contributors](https://img.shields.io/github/contributors/${data.username}/${data.title})](https://github.com/${data.username}/${data.title}/graphs/contributors)
[![GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.title}?style=flat)]() \
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [licenses](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Please direct any questions to
https://github.com/${data.username}\\
![Profile Image](${profileImg})
## Licenses
Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
