var path = require('path');
var notes = require('../controllers/notes.js');

module.exports = function(app) {
    app.get('/notes', function(req, res) {
        // get all notes
        notes.getAllNotes(req, res);
    });
    app.post('/notes', function(req, res) {
        // adds a new note to db
        notes.createNote(req, res);
    });
    app.all("*", (request, response) => { response.sendFile(path.resolve("../client/dist/index.html")) });
}