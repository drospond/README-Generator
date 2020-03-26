var api = require("./utils/api.js")
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");
var inquirer = require("inquirer");
//
inquirer.prompt({
    message: "Enter your GitHub username:",
    name: "username"
}).then(function({username}){
    api.getUser(username);
})
//
function writeToFile(fileName, data) {

}
//
function init() {

}

init();

