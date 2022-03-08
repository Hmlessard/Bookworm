const { Book } = require('../models');

const bookData = [
    {
        book_title: 'The Wish',
        user_id: 1
    },
    {
        book_title: 'Better Off Dead',
        user_id: 1
    },
    {
        book_title: 'Where the Crawdads Sing',
        user_id: 1
    },
    {
        book_title: 'The Love Hypothesis',
        user_id: 1
    },
    {
        book_title: 'It Ends with Us',
        user_id: 2
    },
    {
        book_title: 'Go Tell the Bees That I am Gone',
        user_id: 2
    },
    {
        book_title: 'The Storyteller',
        user_id: 3
    },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;