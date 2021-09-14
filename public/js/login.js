const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#login-username');
const password = document.querySelector('#login-password');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
        username: username.value, 
        password: password.value,
    });
    
    const loginPost = await fetch('/api/user/login', {
        method: 'POST',
        body: payload,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (loginPost.ok) {
        console.log('successful login');
    };
});