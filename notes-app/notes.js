const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your Notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    //Filter will not stop at first match and will search through complete array
    const duplicate = notes.filter( (note) =>  note.title === title)
    //Add will stop at first match and will return true if value found
    const duplicateNote = notes.find( (note) =>  note.title === title)
    if(!duplicateNote)
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

//to list all notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green('Your Notes'))
    notes.forEach(note => console.log(chalk.green(note.title)));
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find( (note) => note.title === title )
    if(note)
    {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else
        console.log(chalk.red.inverse('No note with same title found!'))
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
    listNotes: listNotes,
    readNote: readNote
}