function NotesList() {
    this.notes = [];
};

NotesList.prototype.addNote = function (note) {
    this.notes.push(note);

};