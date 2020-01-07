var testNoteListModel = new NoteList();
var testNoteListView = new NoteListView(testNoteListModel);
var testNoteController = new NoteController(testNoteListView);
testNoteController.addNote('Favourite drink: seltzer');
console.log(document.getElementById('app').innerHTML);

assert.isTrue(document.getElementById('app').innerHTML.includes('Favourite drink: seltzer'));