var noteListView = new NoteListView();
noteListView.noteList.addNote("string1");
noteListView.noteList.addNote("string2");


function testHTMLString(){

    var html = noteListView.getHTMLString();
    var string = "<ul><li>string1</li><li>string2</li></ul>"
    assert.isTrue(html === string);
};

testHTMLString();
