document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('signupUsername').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            if (username.length < 3 || username.length > 30) {
                alert('Username must be between 3 and 30 characters');
                return;
            }
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }

            alert('Signup successful!');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }

            alert('Login successful!');
            window.location.href = 'home.html';
        });
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
