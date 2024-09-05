#! /usr/bin/env node

import inquirer from 'inquirer';

const answer = await inquirer.prompt([
  {
    type: 'list',
    name: 'service',
    message: 'Service to create',
    choices: ['Front', 'Back', 'Both'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'Enter module name',
  },
]);

// switch (answer.name) {
//   case "":

//     break;

//   default:
//     break;
// }
console.log('answer', answer);

