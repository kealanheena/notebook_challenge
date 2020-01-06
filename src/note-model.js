function Note(text){
    this.text = text;
};

Note.prototype.returnText = function(){
    console.log(this.text);
    return this.text;
};