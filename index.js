const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
      {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
      },
      {
          type: "input",
          message: "Choose a badge: ",
          name: "badge"
        },
        {
          type: "input",
          message: "Enter the project's title: ",
          name: "title"
        },
        {
          type: "input",
          message: "Describe what the project does: ",
          name: "description"
        },
        {
          type: "input",
          message: "Describe any installation instructions: ",
          name: "installation"
        },
        {
          type: "input",
          message: "Explain the usage: ",
          name: "usage"
        },
        {
          type: "input",
          message: "Choose a liscence:",
          name: "liscence"
        },
        {
          type: "input",
          message: "Name any contributing members:",
          name: "contributors"
        },
        {
          type: "input",
          message: "Describe any tests:",
          name: "tests"
        }
    ])
}

async function init(){
    try{
        const answers = await promptUser();
        console.log(answers);
        await writeFileAsync("README.md", "testing, testing");
    } catch(err){
        console.log(err);
    }
}

init();
