const { Book } = require('../models');

const bookData = [
    {
        book_title: 'The Wish',
        book_author: 'Nicholas Sparks'
    },
    {
        book_title: 'Better Off Dead',
        book_author: 'Andrew and Lee Child'
    },
    {
        book_title: 'Where the Crawdads Sing',
        book_author: 'Delia Owens'
    },
    {
        book_title: 'The Love Hypothesis',
        book_author: 'Ali Hazelwood'
    },
    {
        book_title: 'It Ends with Us',
        book_author: 'Colleen Hoover'
    },
    {
        book_title: 'Go Tell the Bees That I am Gone',
        book_author: 'Diana Gabaldon'

    },
    {
        book_title: 'The Storyteller',
        book_author: 'Jodi Picoult'
    },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;