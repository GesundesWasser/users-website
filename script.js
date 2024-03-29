function registerUser() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  fetch('http://localhost:3000/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('register-message').textContent = data.message;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function loginUser() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  fetch('http://45.88.109.142:32774/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('login-message').textContent = data.message;
    // Save JWT token to local storage if login is successful
    if (response.status === 200) {
      const token = data.token;
      localStorage.setItem('token', token);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
