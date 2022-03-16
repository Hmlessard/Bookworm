async function addABookClickHandler(event) {

  event.preventDefault();

  let bookId = event.target.value
  console.log('running', bookId)

  const response = await fetch('/api/bookuser', {
    method: 'POST',
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
    console.log(bookListItem)
    bookListItem.remove();
  } else {
    alert(response.statusText);
  }
}
  
document.querySelectorAll('.add-book-btn').forEach(item => {
  item.addEventListener('click', addABookClickHandler)
});