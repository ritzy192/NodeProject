const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your Notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicate = notes.filter(function (note) {
        return note.title === title
    })

    if(duplicate.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes)
        console.log(chalk.inverse.green('New Note added!'))
    }
    else {
        console.log(chalk.inverse.red('Note title taken!'))
    }
    
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        //console.log(note.title + '\n')
        //console.log(title)
        return note.title !== title 
    })
    savedNotes(notesToKeep)
    if(notes.length === notesToKeep.length)
        console.log(chalk.inverse.red('No note found'))
    else
        console.log(chalk.inverse.green('Note removed'))
}

const savedNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('Notes.json')
        dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    }
    catch{
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}