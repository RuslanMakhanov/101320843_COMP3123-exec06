const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: String,
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM'],
        default: 'MEDIUM'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', NoteSchema);
