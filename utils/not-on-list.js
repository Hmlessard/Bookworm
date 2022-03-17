const isNotOnList = (bookies, userId) => {

    let arrayOfBooksAlreadyOnList = [];

    for (let i = 0; i < bookies.length; i++) {
        //console.log(bookies[i].users)
        bookies[i].users.forEach(user => {
            //console.log(user.id)
            if (user.id == userId) {
                arrayOfBooksAlreadyOnList.push(bookies[i])
            }
        })
    };

    let includeTheseBooks = [];

    bookies.forEach(bookie => {
        if (!arrayOfBooksAlreadyOnList.includes(bookie)) {
            includeTheseBooks.push(bookie)
        }
    });

    //console.log(arrayOfBooksAlreadyOnList)
    //console.log(includeTheseBooks);
    return includeTheseBooks;
}

module.exports = isNotOnList