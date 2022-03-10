const router = require('express').Router();
const { User, Post, Comment, Book } = require('../../models');

//get /api/comments
router.get('/', (req, res) => {
    Comment.findAll({
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//post (or create comment) /api/comments 
router.post('/', (req, res) => {
    // wrapping the Sequelize queries in if (req.session) statments ensures that only logged-in users interact with the database
    if (true) { //boolean will be req.session
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.body.user_id//will be req.session.user_id,
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

//delete a comment /api/comments/1
router.delete('/:id', (req, res) => { // add withAuth() function later? 
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;