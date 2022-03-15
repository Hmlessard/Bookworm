let spleet = function(string) {
  let spleetString = "";
  let stringArr = string.split();
  for (i=0; i<stringArr.length; i++) {
    spleetString += stringArr[i]
  }
  return spleetString
}

async function newPostFormHandler(event) {

  event.preventDefault();

  const title = document.querySelector('input[name="book-title"]').value.trim();
  const author = document.querySelector('input[name="book-author"]').value.trim();
  const review = document.querySelector('input[name="book-review"]').value.trim();
  const id = parseInt(window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ]);

  if (id>0) {
    //book already exists
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        book_title: title,
        book_author: author,
        book_review: review,
        book_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      console.log('cool');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    };
  } else {
    //book doesn't exist so create it
    let splitTitle = spleet(title);
    let splitAuthor = spleet(author);
    //console.log(splitTitle, splitAuthor);

    let apiUrl = `https://lit-oasis-13031.herokuapp.com/https://bookcoverapi.herokuapp.com/getBookCover?bookTitle=${splitTitle}&authorName=${splitAuthor}`;
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          response.json()
            .then(async data => {
              const response = await fetch('/api/books', {
                method: 'POST',
                body: JSON.stringify({
                  book_title: title,
                  book_author: author,
                  cover_url: data.bookCoverUrl
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              if (response.ok) {
                fetch(`/api/books/${title}`, {
                  method: 'GET',
                })
                .then(response => {
                  const reader = response.body.getReader();
        
                  return new ReadableStream({
                    start(controller) {
                      function push() {
                        reader.read().then( ({done, value}) => {
                          if (done) {
                            console.log('done', done);
                            controller.close();
                            return;
                          }
                          controller.enqueue(value);
                          console.log(done, value);
                          push();
                        })
                      }
                    
                      push();
                    }
                  })
                })
                .then(stream => {
                  return new Response(stream, {
                    headers: {"Content-Type": "application/json"}
                  }).json();
                })
                .then(result => {
                  fetch('/api/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                      book_title: title,
                      book_author: author,
                      book_review: review,
                      book_id: result.id
                    }),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                
                  document.location.replace('/dashboard');
                });
              }
            }) 
        }
        else {
          alert(response.statusText)
        }
      })
  };
};

document.querySelector('.new-post-form').addEventListener('submit', newPostFormHandler);
