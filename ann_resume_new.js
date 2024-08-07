
function onButtonClick() {
  document.getElementById('textInput').className = "show";
  document.getElementById('btn1').className = "show";
  document.getElementById('btn2').className = "show";
  document.getElementById('phone-error').textContent = ""; 
}

function clearResult() {
  document.getElementById('textInput').value = '';
  document.getElementById('displayValue').textContent = '';
  document.getElementById('phone-error').textContent = '';
}

function getValue() {
  var textInput = document.getElementById("textInput").value;
  var displayElement = document.getElementById("displayValue");
  var phoneErrorElement = document.getElementById("phone-error");

  if (validatePhoneNumber(textInput)) {
    displayElement.textContent = textInput;
    phoneErrorElement.textContent = ''; 
  } else {
    phoneErrorElement.textContent = 'Invalid phone number. Please enter a valid phone number.';
    displayElement.textContent = ''; 
  }
}

function validatePhoneNumber(phoneNumber) {
 
  var phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(phoneNumber);
}









