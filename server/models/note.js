var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    text: {type: String, required: [true, 'Text is required'], minlength: [3, 'Must be at least 3 characters']}
}, {timestamps: true});

mongoose.model('Note', NoteSchema);