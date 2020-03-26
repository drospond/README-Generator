function generateMarkdown(data) {
  return `
# ${data.title}
* ${data.badge}
* ${data.description}
* Table of Contents
* ${data.installation}
* ${data.usage}
* ${data.liscence}
* ${data.contributing}
* ${data.tests}
* Questions
`;
}

module.exports = generateMarkdown;
