const express = require('express');
const app = express.Router();
const Note = require('../models/NotesModel.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save

app.post('/notes', async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).send(note);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.send(notes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteId);
        if (!note) return res.status(404).send("Note not found");
        res.send(note);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.noteId, req.body, { new: true, runValidators: true });
        if (!note) return res.status(404).send("Note not found");
        res.send(note);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.noteId);
        if (!note) return res.status(404).send("Note not found");
        res.send(note);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = app;
