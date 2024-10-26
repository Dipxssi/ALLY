document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const username = document.getElementById('username').value;
    const gender = document.getElementById('gender').value;
    const birthday = document.getElementById('birthday').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;

    // Log the data to the console (you can replace this with actual submission logic)
    console.log('Username:', username);
    console.log('Gender:', gender);
    console.log('Birthday:', birthday);
    console.log('Location:', location);
    console.log('Email:', email);

    // You can also add code to send this data to a server here
});

