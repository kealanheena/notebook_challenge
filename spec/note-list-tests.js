var notesList = new NotesList();

function testNotesArray() {
    assert.isTrue(Array.isArray(notesList.notes));
};


function addNote() {
    notesList.addNote("string1");
    notesList.addNote("string2");
    assert.isTrue(notesList.notes[0] === "string1");
    assert.isTrue(notesList.notes[1] === "string2");
};


testNotesArray();
addNote();

console.log(`${passedTests} Passed Tests`)