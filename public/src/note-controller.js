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
  var app = document.getElementById("app");
  var input = document.getElementById('new-note-input');
  var button = document.getElementById('btn');
  var noteListModel = new NoteList();
  var noteListView = new NoteListView(noteListModel);
  var noteController = new NoteController(noteListView);

  button.addEventListener("click", function(e){
    e.preventDefault();
    if(input.value !== ""){
    noteController.addNote(input.value);
    app.innerHTML = noteController.returnNotes();
    }
  });

})()