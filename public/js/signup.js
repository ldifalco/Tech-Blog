const signupForm = document.querySelector('#sign-up-form');
const username = document.querySelector('#sign-up-username');
const password = document.querySelector('#sign-up-password');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
        username: username.value, 
        password: password.value,
    });
    
    const signUpPost = await fetch('/api/user/', {
        method: 'POST',
        body: payload,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (signUpPost.ok) {
    console.log('Successfully logged In');
    }
});