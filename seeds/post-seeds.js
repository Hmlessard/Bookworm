const { Post } = require('../models');

const postData = [
    {
        book_title: 'The Wish',
        book_author: 'Nicholas Sparks',
        book_review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user_id: 1,
        book_id: 1
    },
    {
        book_title: 'It Ends with Us',
        book_author: 'Colleen Hoover',
        book_review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user_id: 1,
        book_id: 5
    },
    {
        book_title: 'The Love Hypothesis',
        book_author: 'Ali hazelwood',
        book_review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user_id: 2,
        book_id: 4
    },
    {
        book_title: 'Where the Crawdads Sing',
        book_author: 'Delia Owens',
        book_review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user_id: 3,
        book_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;