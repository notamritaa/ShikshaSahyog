// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create a data object with form values
    const formData = {
      firstName,
      lastName,
      email,
      password
    };
  
    // Send form data to the server
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // Redirect to login page or display success message
        window.location.href = '/login.html'; // Redirect to login page
      } else {
        // Display error message
        console.error('Error:', response.statusText);
        // Display error message to the user
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Display error message to the user
    });
  }
  
  // Add event listener to the form submit button
  document.getElementById('signupForm').addEventListener('submit', handleFormSubmit);