const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');
const bookRoutes = require('./book-routes');
const bookuserRoutes = require('./bookuser-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/books', bookRoutes);
router.use('/bookuser', bookuserRoutes);

module.exports = router;