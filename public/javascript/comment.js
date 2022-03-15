async function commentFormHandler(event) {
    event.preventDefault();
    console.log('subd');
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const user_id = req.session.user_id
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          comment_text,
          post_id,
          user_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        document.location.reload();
      } else {
            alert(response.statusText);
        }
    };
};
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);