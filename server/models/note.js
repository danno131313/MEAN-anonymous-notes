const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    content: {type: String, required: true, minlength: 3}
}, {timestamps: true});

mongoose.model("Note", NoteSchema);
