const router = require('express').Router();
const { User, Post, Comment, Book, BookUser } = require('../../models');

//get /api/posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [ // attributes is what we see in the response
            'id',
            'book_title',
            'book_author',
            'book_review',
            'book_id',
            'created_at',
        ],
        order: [['book_title']], // orders by the created_at column in descending order
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

//get api/posts/newPost/:id
router.get('/newPost/:id', (req, res) => { //will need withauth********
    if (req.params.id==0) {
        res.render('new-post', {
            existingBook: false,
            loggedIn: true
        })
    } else {
        Book.findOne({
          where: {
            id: req.params.id
          },
          attributes: [
            'book_title',
            'book_author',
            'cover_url'
          ],
        })
        .then(dbBookData => {
            //serialize the book data
            const book = dbBookData.get({ plain: true });
            res.render('new-post', { book, existingBook: true, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});


//get post by id /api/posts/1
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
            'book_id',
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
            const post = dbPostData.get({ plain: true });
            // console.log(post);
            // res.json(dbPostData);

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//post at api/posts
router.post('/', (req, res) => {
    // body expects {book_title:, and I think we should add author}
    Post.create({
        book_title: req.body.book_title,
        book_author: req.body.book_author,
        book_review: req.body.book_review,
        user_id: req.session.user_id,
        book_id: req.body.book_id //maybe replace all of this with req.body if it works
    })
    .then(dbPostData => {
        res.json(dbPostData);
    })
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

//from any single post, add a favorite to your list
router.post('/addFav', (req, res) => {
    BookUser.create(req.body)
    .then(dbPostData => {
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