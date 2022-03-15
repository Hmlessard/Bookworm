const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Book, BookUser } = require('../models');
const checkForBooks = require('../utils/dashboard-helper');
const withAuth = require('../utils/auth');

// get all User's posts for dashboard and list of their "favorite books"
// http://localhost:3001/dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'book_title',
            'book_author',
            'book_review',
            'created_at',
            'book_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username'],
                include: {
                    model: Book,
                    attributes: ['id', 'book_title', 'book_author']
                }
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            console.log(posts)

            const books = checkForBooks(posts)
            console.log(books)

            res.render('dashboard', {
                posts,
                books,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
