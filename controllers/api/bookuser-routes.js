const router = require('express').Router();
const { User, Post, Comment, Book, BookUser } = require('../../models');

// get all bookuser /api/bookuser
router.get('/', (req, res) => {
    BookUser.findAll()
    .then(dbBookUserData => res.json(dbBookUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// router.get('/:id', (req, res) => {
//     BookUser.findOne({
//         where: {
//             book_id: req.params.id
//         }
//     })
//     .then(dbBookUserData => res.json(dbBookUserData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// })

//post (create new bookuser combo) /api/bookuser
router.post('/', (req, res) => {
    BookUser.create({
        book_id: req.body.book_id,
        user_id: req.session.user_id
    })
    .then(dbBookUserData => {
        res.json(dbBookUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;