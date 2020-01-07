function NoteListView(noteList = new NoteList()) {
  this.noteList = noteList;
};


NoteListView.prototype.getHTMLString = function() {
  var string = "<ul>"
  this.noteList.notes.forEach(note => {
      string += `<li>${note}</li>`
  });
  return string + "</ul>"
};

NoteListView.prototype.returnNotes = function() {
  return this.noteList.returnNotes();
}

NoteListView.prototype.addNote = function(note) {
  this.noteList.addNote(note);
}