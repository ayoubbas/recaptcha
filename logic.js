const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const createAccountLink = document.getElementById('createAccountLink');
const loginLink = document.getElementById('loginLink');

createAccountLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});


function callbackSuccess(){
  debugger
}