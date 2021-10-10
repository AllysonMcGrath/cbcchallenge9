// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license === "MIT") {
    data.licensebadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if(data.license === "Apache") {

  }
  if(data.license === "GPL") {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license === "MIT") {
    


  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";
  if(data.license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(data.license === "Apache") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(data.license === "GPL") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }


  return `${licenseBadge}
  # ${data.title}

  ##Description
  ${data.description}

  ##Table of Contents
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. License(#license)
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Questions](#questions)
<a name="installation">
  ##Installation
</a>
  ${data.installation}
<a name="usage">
  ##Usage
</a>
  ${data.usage}
<a name="license">
  ##License
</a>
  ${data.license}
<a name="contributing">
  ##Contributing
  ${data.contributing}
</a>
<a name="tests">
  ##Tests
</a>
  ${data.tests}
<a name="questions">
  ##Questions
</a>
  ${data.github}
  ${data.contact}
`;
}

module.exports = generateMarkdown;