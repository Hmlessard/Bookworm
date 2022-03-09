const router = require('express').Router();
const { User, Post, Comment, Book } = require('../../models');

//get /api/posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [ // attributes is what we see in the response
            'id',
            'book_title',
            'book_author',
            'book_review',
            'created_at',
        ],
        order: [['created_at', 'DESC']], // orders by the created_at column in descending order
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

//get /api/posts/1
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'book_title',
            'book_author',
            'book_review',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//post (create a post) /api/posts
router.post('/', (req, res) => {
    // body expects {title: '', post_url: '', user_id: 1}
    Post.create({
        book_title: req.body.book_title,
        book_author: req.body.book_author,
        book_review: req.body.book_review,
        user_id: req.session.user_id // grabs user id from the session instead of body
    })
        .then(dbPostData => { res.json(dbPostData) })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//put (update a post) /api/posts/1
router.put('/:id', (req, res) => {
    Post.update(
        {
            book_title: req.body.book_title,
            book_author: req.body.book_author,
            book_review: req.body.book_review,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//delete a post /api/posts/1
router.delete('/:id', (req, res) => { // add withAuth() function later? 
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;