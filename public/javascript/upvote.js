const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
        post_id: id
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});

if (response.ok) {
    document.location.reload();
} else {
    alert(response.statusText);
}