function generateMarkdown(data, profileImg) {
  return `
# ${data.title}
${data.badge}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [licenses](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${data.description}
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
## licenses
Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
