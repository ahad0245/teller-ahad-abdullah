// main.js

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Replace this with actual authentication logic (e.g., sending data to server)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example: check if username and password are correct
    if (username === 'admin' && password === '123') {
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
        // Clear form fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        // Focus back on username field
        document.getElementById('username').focus();
    }
});

