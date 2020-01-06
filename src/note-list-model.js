function NotesList() {
    this.notes = [];
};

NotesList.prototype.addNote = function (note) {
    this.notes.push(note);
};

NotesList.prototype.returnNotes = function() {
    return this.notes;
}