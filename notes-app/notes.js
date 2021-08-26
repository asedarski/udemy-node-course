const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();

  // Check if note with given title already exists
  const duplicateNote = notes.find(note => note.title.toLowerCase() === title.toLowerCase());

  if (duplicateNote) {
    console.log(chalk.red.bold('Note title already exists.'));
    return;
  }

  notes.push({title, body});
  saveNotes(notes);
  console.log(chalk.green.bold('New note added!'));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title.toLowerCase() !== title.toLowerCase());

  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.bold('Note removed!'));
    return;
  }

  console.log(chalk.red.bold('No note found!'));
}

const listNotes = () => {
  console.log(chalk.magenta.bold('Your notes'));
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(chalk.magenta(note.title));
  });
}

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find(note => note.title.toLowerCase() === title.toLowerCase());

  if (!foundNote) {
    console.log(chalk.red.bold('Note not found'));
    return;
  }

  console.log(chalk.magenta.bold(foundNote.title));
  console.log(chalk.magenta(foundNote.body));
}

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};