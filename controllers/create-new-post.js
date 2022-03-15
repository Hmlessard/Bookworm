const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Book } = require('../models');
const withAuth = require('../utils/auth');

// gets from /createNewPost
router.get('/', withAuth, (req, res) => {
    Book.findAll({
      attributes: [
        'book_title',
        'book_author',
        'id'
      ],
    })
    .then(dbBookData => {
      const books = dbBookData.map(book => book.get({ plain: true }));
      res.render('create-post-menu', { books, loggedIn: true });
  })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
