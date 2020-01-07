var testNoteListModel = new NoteList();
var testNoteListView = new NoteListView(testNoteListModel);
var testNoteController = new NoteController(testNoteListView);

describe("Note Controller", () => {
  
  describe("Adding a note", () => {
    testNoteController.addNote("hello!");
    assert.isTrue(testNoteController.returnNotes().includes("hello!"));
  });

  describe("Displays new note", () => {
    testNoteController.addNote('Favourite drink: seltzer');
    app.innerHTML = testNoteController.returnNotes();
    assert.isTrue(document.getElementById('app').innerHTML.includes('Favourite drink: seltzer'));
  });
});
