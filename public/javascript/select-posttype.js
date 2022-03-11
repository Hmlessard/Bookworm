  async function newFormHandler(event) {
    event.preventDefault();
  
    const bookApiEndpoint = window.location.toString().split('/')[
      window.location.toString().split('/').length -1
    ];

    //will need variables for each of the 5 properties to pass below
    //example const title = document.querySelector('input[name="post-title"]').value;
  
    const response = await fetch(`/api/posts/${bookApiEndpoint}`, {
      method: 'POST',
      body: JSON.stringify({
        book_title,
        book_author,
        book_review,
        user_id,
        book_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-book-form').addEventListener('submit', newBookFormHandler);
  