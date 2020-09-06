const chalk = require('chalk')
const notes = require('./notes')


const note = notes()
console.log(note)

console.log(chalk.blue.bgRed.underline.inverse.bold('Success'))

const command = process.argv[2];

if(command === 'add')
    console.log('Adding Note')
else if(command === 'remove')
    console.log('Removing Note')
