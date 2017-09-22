const fs = require('fs')


const fetchNotes = () => {
  try {
    // Only runs if file exists/is readable!
    const notesString = fs.readFileSync('notes-data.json')
    return notes = JSON.parse(notesString)
  } catch (e) {
    return []
  }
}


const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}


const addNote = (title, body) => {
  const notes = fetchNotes()
  const note = {
    title,
    body
  }
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}


const getAll = () => {
  const notes = fetchNotes()
  return notes
}


const getNote = (title) => {
  const notes = fetchNotes()
  const noteFound = notes.filter((note) => note.title === title)
  return noteFound[0]
}


const removeNote = (title) => {
  const notes = fetchNotes()
  const filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}


const logNote = (note) => {
  if (note.title && note.body) {
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
    console.log('--')
  }
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
