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

//had to chanage this because if the user doesn't have any posts,
//then you can't get any book information. We could delete this
//file.