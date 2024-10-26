document.getElementById('login-button').addEventListener('click', function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
      alert("Please enter your email and password.");
      return;
  }

  // Send the email and password to the backend for verification
  fetch('/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  })
  .then(response => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error('Login failed');
      }
  })
  .then(data => {
      console.log('Login successful:', data);
      // Redirect or do something with the response
      window.location.href = 'https://scorpionpredictor.github.io/v1/dashboard/'; // Redirect to a dashboard page
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Login failed. Please check your credentials.');
  });
});
