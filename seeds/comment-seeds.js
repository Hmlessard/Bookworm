const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        user_id: 3,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;