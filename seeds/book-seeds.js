const { Book } = require('../models');

const bookData = [
    {
        book_title: 'The Wish'
    },
    {
        book_title: 'Better Off Dead'
    },
    {
        book_title: 'Where the Crawdads Sing'
    },
    {
        book_title: 'The Love Hypothesis'
    },
    {
        book_title: 'It Ends with Us'
    },
    {
        book_title: 'Go Tell the Bees That I am Gone'
    },
    {
        book_title: 'The Storyteller'
    },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;