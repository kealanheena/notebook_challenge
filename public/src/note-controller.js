// var app = document.getElementById("app")
// app.addEventListener()



function NoteController(noteListView = new NoteListView()) {
  this.noteListView = noteListView;
};

NoteController.prototype.returnNotes = function() {
  return this.noteListView.getHTMLString();
};

NoteController.prototype.addNote = function(note) {
  return this.noteListView.addNote(note);
};

(() => { 
  var app = document.getElementById("app")
  var newNote = document.getElementById('new-note-text');
  var input = document.getElementById('new-note-input');
  var noteListModel = new NoteList();
  var noteListView = new NoteListView(noteListModel);
  var noteController = new NoteController(noteListView);
  app.innerHTML = noteController.returnNotes();
  noteController.addNote('thingy');
  app.innerHTML = noteController.returnNotes();

  input.addEventListener('input', (e) => {
    console.log(e.target.value)
    newNote.innerText = e.target.value;
  });
})()