var note = new Note("My favourite language is JavaScript");

function testNoteText() {
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

function testReturnText() {
  assert.isTrue(note.returnText() === "My favourite language is JavaScript");
}
console.log("hello");

testNoteText();
testReturnText();

console.log(`${passedTests} Passed Tests`)