const logoutForm = document.querySelector('#logout');


logoutForm.addEventListener('click', async (e) => {
    e.preventDefault();
    
    const logoutPost = await fetch('/api/user/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (logoutPost.ok) {
        console.log('successfully logged out');
    };
});