var mongoose = require('mongoose')
var Note = mongoose.model('Note');

module.exports = {
    getAllNotes: (req, res) => {
        Note.find({})
        .then(notes => res.json(notes))
        .catch( (err) => {
            console.log(err)
            res.json({error: 'You got an error'});
        });
    },
    createNote: (req, res) => {
        Note.create(req.body)
        .then( (note) => res.json(note))
        .catch( (err) => {
            console.log(err)
            res.json({error: 'ERROR'});
        });
    }
}