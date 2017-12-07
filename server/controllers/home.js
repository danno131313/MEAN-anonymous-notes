const mongoose = require('mongoose');
const Note = mongoose.model('Note');
module.exports = {
    create: function(req, res) {
        console.log(req.body);
        const note = new Note(req.body);
        note.save((err, note) => {
            if (err) {
                console.log("Note could not be saved");
            } else {
                return res.json(note);
            }
        });
    },

    getAll: function(req, res) {
        Note.find().sort({createdAt: 'desc'}).exec((err, notes) => {
            return res.json(notes);
        });
    }
}
