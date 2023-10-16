const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: String, // 'type' specifies the data type
        required: true, // 'required' is the correct keyword for marking a field as required
        lowercase: true // automatically lowercase entry by default
    },
    price: Number,
    published_date: Date
});

module.exports = mongoose.model("Book", bookSchema); // 'Book' should be capitalized, as it's a model name
