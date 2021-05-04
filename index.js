const yargs = require('yargs');
const notes = require('./notes');

// customize yargs verison
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note');
    }
})

// Crete list commnd
yargs.command({
    command: 'list',
    describe: 'List lour notes',
    handler: function() {
        console.log('Listing out all notes');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note');
    }
})


// add , remove, read, list

yargs.parse();
// console.log(yargs.argv);