async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/checkin');
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#first-name').value.trim();
    const last_name = document.querySelector('#last-name').value.trim();
    const department_id = document.getElementById('departments').value;
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                department_id,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/checkin');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);