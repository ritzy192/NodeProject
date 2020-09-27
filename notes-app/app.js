const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing note')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Read a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('List a note')
    }
})

yargs.parse()
