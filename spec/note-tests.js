function testNoteText(){
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.text === "My favourite language is JavaScript")
};

testNoteText();

console.log(`${passedTests} Passed Tests`)