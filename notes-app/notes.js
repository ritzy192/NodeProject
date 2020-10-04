const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your Notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicate = notes.filter( (note) =>  note.title === title)

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

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter( (note) => note.title !== title 
    )
    savedNotes(notesToKeep)
    if(notes.length === notesToKeep.length)
        console.log(chalk.inverse.red('No note found'))
    else
        console.log(chalk.inverse.green('Note removed'))
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Your Notes'))
    notes.forEach(note => console.log(chalk.green(note.title)));
}

const savedNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNotes: listNotes
}