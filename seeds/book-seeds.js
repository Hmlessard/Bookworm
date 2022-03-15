const { Book } = require('../models');

const bookData = [
    {
        book_title: 'The Wish',
        book_author: 'Nicholas Sparks',
        cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1633313310l/59139308._SX318_.jpg'
    },
    {
        book_title: 'Better Off Dead',
        book_author: 'Andrew and Lee Child',
        cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611469599l/56799265._SY475_.jpg'
    },
    {
        book_title: 'Where the Crawdads Sing',
        book_author: 'Delia Owens',
        cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582135294l/36809135._SY475_.jpg'
    },
    {
        book_title: 'The Love Hypothesis',
        book_author: 'Ali Hazelwood',
        cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg'
    },
    {
        book_title: 'It Ends with Us',
        book_author: 'Colleen Hoover',
        cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482l/27362503._SY475_.jpg'
    },
    {
        book_title: 'Go Tell the Bees That I am Gone',
        book_author: 'Diana Gabaldon',
        cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618500168l/57699848.jpg'

    },
    {
        book_title: 'The Storyteller',
        book_author: 'Jodi Picoult',
        cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500191671l/61663._SY475_.jpg'
    },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;