const validator = require('validator')

const add  = require('./utils.js')
const notes = require('./notes')

const sum = add(4,4)
const note = notes()
console.log(note)
console.log(sum)
console.log(validator.isEmail('ritzy192@gmail.com'))
