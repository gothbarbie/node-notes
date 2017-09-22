const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'The body of the note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv

const command = process.argv[2]

switch (command) {
  case 'add':
    console.log('Adding new note...')
    const newNote = notes.addNote(argv.title, argv.body)
    if (newNote) {
      console.log('Note created:')
      console.log('--')
      notes.logNote(newNote)
    } else {
      console.log('Note title already exists.')
    }
    break

  case 'list':
    console.log('Listing all notes...')
    const allNotes = notes.getAll()
    if (allNotes) {
      console.log(`${allNotes.length} note(s) found:`)
      console.log('--')
      allNotes.forEach((note) => notes.logNote(note))
    }
    break

  case 'read':
    console.log('Reading note...')
    const oldNote = notes.getNote(argv.title)
    if (oldNote) {
      console.log('Note found:')
      console.log('--')
      notes.logNote(oldNote)
    } else {
      console.log('Note not found.')
    }
    break

  case 'remove':
    console.log('Removing note...')
    const noteRemoved = notes.removeNote(argv.title)
    const message = noteRemoved ? 'Not was successfully removed!' : 'Remove failed: No such title found.'
    console.log(message)
    break

  case undefined:
    console.log('Command required')
    break

  default:
    console.log('Command not recognized')
    break
}

