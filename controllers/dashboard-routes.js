const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Book, BookUser } = require('../models');
const checkForBooks = require('../utils/dashboard-helper');
const withAuth = require('../utils/auth');
const isNotOnList = require('../utils/not-on-list')

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
    .then(async dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        //console.log(posts)
        const bookArray = []
        const booksToInclude =
            BookUser.findAll({
                where: {
                    user_id: req.session.user_id
                },
            }).then(dbBookuserData => {
                    const plainBookusers = dbBookuserData.map(bookuser => bookuser.get({ plain: true }));
                    const listLength = plainBookusers.length;
                    let bookNumber = 0
                    plainBookusers.forEach(bookuser => {
                        let bookId = bookuser.book_id;
                        Book.findOne({
                            where: {
                                id: bookId
                            }
                        }).then(oneBookData => {
                            bookNumber=bookNumber +1;
                            const plainBook = oneBookData.get({ plain: true });
                            bookArray.push(plainBook)
                            if (bookNumber == listLength) {
                                console.log(bookArray)
                                res.render('dashboard', {
                                    posts,
                                    bookArray,
                                    loggedIn: true
                                });
                            }
                        })
                    })
            })
    })
});


router.get('/toReadList', (req, res) => {
    Book.findAll({
        attributes: [
            'book_title',
            'book_author',
            'id'
        ],
        include: [
            {
                model: User,
                attributes: ['id'],
                through: BookUser
            }
        ]
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));
        const booksToRender = isNotOnList(books, req.session.user_id)
        res.render('books-to-read', {booksToRender, loggedIn:true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
