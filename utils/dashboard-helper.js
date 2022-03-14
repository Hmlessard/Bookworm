const checkForBooks = (posts => {
    if (posts.length) {
        let booksArray = posts[0].user.books
        return booksArray
    } else {
        let booksArray = []
        return booksArray
    }
});

module.exports = checkForBooks;