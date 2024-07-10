

function highlightInput(element) {
  element.style.border = "solid 1px blue";
}

function validateFullName() {
  var fullNameInput = document.getElementById("fullName");
  var fullNameError = document.getElementById("fullNameError");

  if (fullNameInput.value.trim() === "" || fullNameInput.value.length < 3) {
    fullNameError.innerText = "Invalid name";
    fullNameInput.focus();
    fullNameInput.select();
  }
   else {
    fullNameError.innerText = "";
  }
}

/////////////////////////////
function validateFullName() {
  var fullNameInput = document.getElementById("fullName");
  var fullNameValidImage = document.getElementById("fullNameValidImage");
  var fullNameInvalidImage = document.getElementById("fullNameInvalidImage");
}

function validateFullName() {
  var fullNameInput = document.getElementById("fullName");
  var fullNameValidImage = document.getElementById("fullNameValidImage");
  var fullNameInvalidImage = document.getElementById("fullNameInvalidImage");

  if (fullNameInput.value.trim() === "" || fullNameInput.value.length < 3) {
    fullNameValidImage.style.display = "none";
    fullNameInvalidImage.style.display = "inline";
    fullNameInput.focus();
    fullNameInput.select();
  } else {
    fullNameInvalidImage.style.display = "none";
    fullNameValidImage.style.display = "inline";
  }
}





//////////////////////////////
function validateForm() {
  var fullNameInput = document.getElementById("fullName");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var repeatPasswordInput = document.getElementById("repeatPassword");

  if (fullNameInput.value.trim() === "" || fullNameInput.value.length < 3) {
    alert(" enter a valid name");
    fullNameInput.focus();
    return false;
  }

  if (passwordInput.value !== repeatPasswordInput.value) {
    alert("Passwords don't match ");
    repeatPasswordInput.focus();
    return false;
  }
  if ( fullNameInput&& passwordInput && repeatPasswordInput ) {
     
      var fullName = fullNameInput.value;
       window.location.href = "thank you.html?name="  + fullName;
      }

  

  return true;
} 