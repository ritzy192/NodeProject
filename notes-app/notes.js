const fs = require('fs')

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
        console.log('New Note added!')
    }
    else {
        console.log('Note title taken!')
    }
    
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
    addNote: addNote
}