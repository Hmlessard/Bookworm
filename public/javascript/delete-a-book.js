async function delABookClickHandler(event) {

    event.preventDefault();
  
    let bookId = event.target.value
    console.log('running', bookId)
  
    const response = await fetch('/api/bookuser', {
      method: 'DELETE',
      body: JSON.stringify({
        book_id: bookId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      console.log('ok')
      let bookListItem = document.getElementById(`${bookId}`);
      bookListItem.remove();
    } else {
      alert(response.statusText);
    }
  }

document.querySelectorAll('.del-btn').forEach(item => {
    item.addEventListener('click', delABookClickHandler)
  });