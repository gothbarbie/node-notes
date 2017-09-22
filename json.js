// const obj = { name: 'Andrew' }
// const stringObj = JSON.stringify(obj)

// console.log(typeof stringObj)
// console.log(stringObj)


// const personString = '{"name": "Andrew", "age": 25}'
// const person = JSON.parse(personString)

// console.log(typeof person)
// console.log(person)

const fs = require('fs')

const originalNote = {
  title: 'Some title',
  body: 'Some body'
}

fs.writeFileSync('notes.json', JSON.stringify(originalNote))

const noteString = fs.readFileSync('notes.json')

const note = JSON.parse(noteString)

console.log(typeof note)
console.log(note)
