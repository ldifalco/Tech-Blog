const createPostForm = document.querySelector('#create-post-form');

createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.querySelector('#create-post-title');
    const content = document.querySelector('#create-post-content');

    const payload = JSON.stringify({
        title: title.value, 
        content: content.value,
    });
    
    const newPost = await fetch('/api/post/', {
        method: 'POST',
        body: payload,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (newPost.ok) {
        console.log('Posted');
    };
});

orderedList.addEventListener('click', async (e) => {
    console.log('orderedList'); 
    
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.getAttribute('data-id');

        deletePost = await fetch (`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (deletePost.ok) {
            document.location.href = '/dashboard'; 
        } else {
            alert('Did not delete');
        }
    }
});