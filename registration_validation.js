const form = document.getElementById('registration-form');
const fullName = document.getElementById('full-name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Function to display error message
function showError(input, message) {
  const parent = input.parentNode;
  const error = parent.querySelector('.error-message');
  error.innerText = message;
}

// Function to remove error message
function removeError(input) {
  const parent = input.parentNode;
  const error = parent.querySelector('.error-message');
  error.innerText = '';
}

// Function to check if the input field is empty
function checkRequired(input) {
  if (input.value.trim() === '') {
    showError(input, `${getFieldName(input)} is required`);
    return false;
  } else {
    removeError(input);
    return true;
  }
}

// Function to check if the email is valid
function checkEmail(input) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(input.value.trim())) {
    removeError(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}

// Function to check if the phone number is valid
function checkPhone(input) {
  const regex = /^\d{10}$/;
  if (regex.test(input.value.trim())) {
    removeError(input);
    return true;
  } else {
    showError(input, 'Phone number is not valid');
    return false;
  }
}

/* Function to check if the password and confirm password match
function checkPasswordsMatch(password, confirmPassword) {
    const passwordValue=password.value.trim();
    const confirmPasswordValue=confirmPassword.value.trim();
  if (passwordValue != confirmPasswordValue) {
    showError(confirmPassword, 'Passwords do not match');
    return false;
  } else {
    removeError(confirmPassword);
    return true;
  }
}
*/
function Validate() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password != confirmPassword) {
      alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
      return false;
  }
  return true;
}

// Function to get the field name with proper casing
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1).replace('-', ' ');
}

// Event listener for form submission
form.addEventListener('submit', function(event) {
  // Check if all the fields are valid
  let isValid = true;
  isValid = checkRequired(fullName) && isValid;
  isValid = checkRequired(username) && isValid;
  isValid = checkEmail(email) && isValid;
  isValid = checkPhone(phone) && isValid;
  isValid = checkRequired(gender) && isValid;
  isValid = checkRequired(password) && isValid;
  isValid = checkPasswordsMatch(password, confirmPassword) && isValid;

  // If any field is invalid, prevent form submission
  if (!isValid) {
    event.preventDefault();
  }
});
