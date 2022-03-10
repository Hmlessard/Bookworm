const router = require('express').Router();
const { User, Post, Comment, Book, BookUser } = require('../../models');

//get /api/books
router.get('/', (req, res) => {
    Book.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username'],
                through: BookUser,
                as: 'users'
            }
        ]
    })
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get /api/books/1
router.get('/:id', (req, res) => {
    Book.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username'],
                through: BookUser,
                as: 'users'
            }
        ]
    })
    .then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No book found with this id' });
            return;
        }
        res.json(dbBookData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//post (create new book) /api/books
router.post('/', (req, res) => {
    Book.create(req.body)
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//put (update a book) /api/books/1
router.put('/:id', (req, res) => {
    Book.update(
        {
            book_title: req.body.book_title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbBookData => {
            if (!dbBookData) {
                res.status(404).json({ message: 'No book found with this id' });
                return;
            }
            res.json(dbBookData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//delete /api/books/1
router.delete('/:id', (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBookData => {
            if (!dbBookData) {
                res.status(404).json({ message: 'No book found with this id' });
                return;
            }
            res.json(dbBookData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;