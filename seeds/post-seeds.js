const { Post } = require('../models');

const postData = [
    {
        book_title: 'Run, Rose, Run',
        book_author: 'Dolly Parton and James Patterson',
        book_review: "Heyo.",
        user_id: 1
    },
    {
        book_title: 'It Ends with Us',
        book_author: 'Colleen Hoover',
        book_review: "Heyo.",
        user_id: 1
    },
    {
        book_title: 'One Italian Summer',
        book_author: 'Rebecca Serle',
        book_review: "Heyo.",
        user_id: 2
    },
    {
        book_title: 'Woman on Fire',
        book_author: 'Lisa Barr',
        book_review: "Heyo.",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;