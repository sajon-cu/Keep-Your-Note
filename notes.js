const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = getNotes();

    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find( (note) => note.tite === title);
    
    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title == title
    // })
    if(!duplicateNote) {
        notes.push({
            'title': title,
            'body': body
        });
    
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added..'));
    } else {
        console.log(chalk.red.inverse('Note taken..'));
    }
}

const readNote = (title) => {
    const notes = getNotes();
    const note = notes.find( (note) => note.title === title );
    console.log(note)
    if(note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const listNotes = () => {
    const notes = getNotes();

    console.log(chalk.inverse('Your notes'));
    notes.forEach(note => {
        console.log(note.title)
    });
}

const removeNote = (title) => {
    const notes = getNotes();
    const notesToKeep = notes.filter( note => note.title !== title)

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const getNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(e) {
        return [];
    }
}

module.exports = {
    'addNote': addNote,
    'removeNote': removeNote,
    'listNotes': listNotes,
    'readNote': readNote
}