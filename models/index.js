const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Book = require('./Book');
const BookUser = require('./BookUser');

User.belongsToMany(Book, {
    through: BookUser,
    foreignKey: 'user_id'
});

Book.belongsToMany(User, {
    through: BookUser,
    foreignKey: 'book_id'
})

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment, Book, BookUser };