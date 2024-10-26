document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const username = document.getElementById('username').value;
    const gender = document.getElementById('gender').value;
    const birthday = document.getElementById('birthday').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;

    // Store the username in local storage (you can use session storage or other methods)
    localStorage.setItem('username', username);

    // Redirect to the main page
    window.location.href = 'main page.html';
});
// Get the username from local storage and display it
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    document.getElementById('usernameDisplay').textContent = username || 'User';
});


