// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
 return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
        validate: titleInput => {
          if(titleInput) {
            return true;
          }
          else {
            console.log("Please enter a title");
            return false;
          }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
        validate: descriptionInput => {
          if(descriptionInput) {
            return true;
          }
          else {
            console.log("Please enter a project description");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "installation",
        message: "Provide an installation description:",
        validate: descriptionInput => {
          if(descriptionInput) {
            return true;
          }
          else {
            console.log("Please enter installation description");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "usage",
        message: "Provide a description of your project can be used:",
        validate: usageInput => {
          if(usageInput) {
            return true;
          }
          else {
            console.log("Please enter a usage description");
            return false;
          }
        }
      },
      {
        type: "list",
        name: "license",
        message: "What type of license does this project have?",
        choices: ["MIT", "Apache", "GPL"],
        validate: licenseInput => {
          if(licenseInput) {
            return true;
          }
          else {
            console.log("Please select a license");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "contributing",
        message: "What are the guidelines for contributing to this project?",
        validate: contributingInput => {
          if(contributingInput) {
            return true;
          }
          else {
            console.log("Please enter contribution guidelines");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "tests",
        message: "Provide a description of how to test this project:",
        validate: descriptionInput => {
          if(descriptionInput) {
            return true;
          }
          else {
            console.log("Please enter test instructions");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: githubInput => {
          if(githubInput) {
            return true;
          }
          else {
            console.log("Please enter your GitHub username");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: githubInput => {
          if(githubInput) {
            return true;
          }
          else {
            console.log("Please enter your email");
            return false;
          }
        }
      }
])
};

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if(error){
      console.log(error);
    }
  });
}


// // TODO: Create a function to initialize app
function init() {
  questions().then(data => {
    writeFile("EXAMPLE-README.md", generateMarkdown(data));
  })
}

// // Function call to initialize app
init();