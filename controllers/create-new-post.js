const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Book } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/CreateNewPost', (req, res) => { //will need withauth********
    Book.findAll({
      attributes: [
        'book_title',
      ],
    })
    .then(bookData => {
        const books = bookData.get({ plain: true });

        res.render('create-post-menu', {
          books,
          loggedIn: true
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
