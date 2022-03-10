//this is very unfinished

async function deleteFavFormHandler(event) {
    event.preventDefault();
  
    const bookIdToDel = event.target.book_id //I think when we render the list
    //of fav books, each can be assigned

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-fav-btn').addEventListener('click', deleteFavFormHandler);