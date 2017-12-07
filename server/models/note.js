const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    content: String
}, {timestamps: true});

mongoose.model("Note", NoteSchema);
