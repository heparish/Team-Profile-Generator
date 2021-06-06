const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const allEmployees = [];

// questions for user
const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: // function to create only 1 manager 
            () => {
            if (allEmployees.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        name: 'firstName',
        message: ({ role }) => `What is the ${role.toLowerCase()}'s first name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the first name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: ({ firstName }) => `What is ${firstName}'s last name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the last name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: ({ firstName }) => `What is ${firstName}'s ID number?`,
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log('Please enter a valid ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message:  ({ firstName }) => `What is ${firstName}'s office number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log('Please enter a valid number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: ({ firstName }) => `What is ${firstName}'s GitHub userame?`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: ({ firstName }) => `What school does ${firstName} go to?`,
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school name!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: true
    }
]

// asks user questions
const promptUser = () => {

    return inquirer.prompt(questions)
    .then(userResponse => {

        allEmployees.push(userResponse);

        if (userResponse.addEmployee) {
            return promptUser();
        } else {
            return allEmployees;
        };
    });
};

// writing the page in dist folder
const writePage = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log('Page successfully created!')
    });
};

promptUser()
    .then(data => generatePage(data))
    .then(generatedHtml => writePage(generatedHtml))
    .catch(err => console.log(err));