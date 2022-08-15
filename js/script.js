const [passwordField, passwordConfirmationField] = document.querySelectorAll(
  'input[type="password"]'
);

function checkPasswordsMatch(pswd, confirmation) {
  if (pswd === confirmation) {
    return true;
  }

  return false;
}

function hasUppercaseChars(text) {
  for (const char of text) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      return true;
    }
  }

  return false;
}

function hasLowercaseChars(text) {
  for (const char of text) {
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      return true;
    }
  }

  return false;
}

function hasDigits(text) {
  for (const char of text) {
    if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      return true;
    }
  }

  return false;
}

function checkPasswordValidity() {
  let message = "";

  if (!hasUppercaseChars(passwordField.value)) {
    message += "*include at least one uppercase character<br>";
  }
  if (!hasLowercaseChars(passwordField.value)) {
    message += "*include at least one lowercase character<br>";
  }
  if (!hasDigits(passwordField.value)) {
    message += "*include at least one digit<br>";
  }
  if (message === "") {
    if (
      !checkPasswordsMatch(passwordField.value, passwordConfirmationField.value)
    ) {
      message += "*Passwords do not match";
    } else {
      passwordField.setCustomValidity("");
      passwordField.nextElementSibling.innerHTML = "";
      return;
    }
  }
  if (passwordField.value === "") {
    passwordField.setCustomValidity("");
    passwordField.nextElementSibling.textContent = "";
    return;
  }

  passwordField.setCustomValidity(message);
  passwordField.nextElementSibling.innerHTML = passwordField.validationMessage;
}

passwordField.addEventListener("input", checkPasswordValidity);
passwordConfirmationField.addEventListener("input", checkPasswordValidity);
