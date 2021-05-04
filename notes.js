const fs = require('fs');

const addNote = function(title, body) {
    const notes = getNotes();

    const duplicateNotes = notes.filter(function(note) {
        return note.title == title
    })
    
    if(duplicateNotes.length == 0) {
        notes.push({
            'title': title,
            'body': body
        });
    
        saveNotes(notes);
        console.log('Note added..')
    } else {
        console.log('Note taken..')
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const getNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(e) {
        return [];
    }
}

module.exports = {
    'getNotes': getNotes,
    'addNote': addNote 
}