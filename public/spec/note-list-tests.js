var noteList = new NoteList();
noteList.addNote("string1");
noteList.addNote("string2");

function testNotesArray() {
    assert.isTrue(Array.isArray(noteList.notes));
};


function addNote() {
    assert.isTrue(noteList.notes[0] === "string1");
    assert.isTrue(noteList.notes[1] === "string2");
};

function testReturnNotes() {
    notes = noteList.returnNotes();
    assert.isTrue(notes[0] === "string1" && notes[1] === "string2")
}


testNotesArray();
addNote();
testReturnNotes()

console.log(`${passedTests} Passed Tests`)