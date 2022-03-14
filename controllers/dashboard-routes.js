const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Book, BookUser } = require('../models');
// const withAuth = require('../utils/auth');

// get all User's posts for dashboard and list of their "favorite books"
// http://localhost:3001/dashboard
router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        where: {
            user_id: 3 // req.session.user_id
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

            const books = posts[0].user.books
            console.log(books)

            res.render('dashboard', { posts, books, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });

//         res.render('edit-post', {
//           post,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
