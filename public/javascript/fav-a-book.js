async function favABookClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'GET'
    })
    .then(dbPostData => {
        const bookId = dbPostData.book_id;
        const userId = req.session.user_id;
        fetch('api/posts/addFav', {
            method: 'POST',
            body: JSON.stringify({
                book_id: bookId,
                user_id: userId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    })
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.fav-btn').addEventListener('click', favABookClickHandler);