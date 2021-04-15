
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user-firstName').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-Password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  
document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);
