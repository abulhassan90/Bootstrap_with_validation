(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  // ##### Login Form Validation
  const loginForm = document.querySelector("#login-form");

  loginForm?.addEventListener("submit", (event) => {
    countryCodeValidate();
    mobileValidate();
    passwordValidate();
  });

  // ##### Registration Form Validation
  const registrationForm = document.querySelector("#registration-form");

  registrationForm?.addEventListener("submit", (event) => {
    fullNameValidate();
    mobileValidate();
    passwordValidate();

    /* if (registrationForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      registrationForm.classList.add("was-validated");
    } */
  });

  // ##### Forgot Password Form Validation
  const forgotpasswordForm = document.querySelector("#forgotpassword-form");
  forgotpasswordForm?.addEventListener("submit", (event) => {
    mobileValidate();
  });

  // ##### Input Field Validate functions

  function fullNameValidate() {
    const nameInput = registrationForm.querySelector("#floatingName");
    const nameInputLength = nameInput.getAttribute("minlength");
    const nameMessage = nameInput.nextElementSibling;
    if (
      nameInput.value.length < nameInputLength &&
      nameInput.value.trim() !== ""
    ) {
      nameMessage.textContent = `Name should be minimum ${nameInputLength} letters`;
    } else if (nameInput.value.trim() !== "") {
      nameMessage.textContent = "";
    }
  }

  function mobileValidate() {
    const phoneInput = document.querySelector("#floatingPhone");
    const phoneInputLength = phoneInput.getAttribute("minlength");
    const phoneMessage = phoneInput.nextElementSibling;
    if (
      phoneInput.value.length < phoneInputLength &&
      phoneInput.value.trim() !== ""
    ) {
      phoneMessage.textContent = "Invalid Mobile Number";
    } else if (phoneInput.value.trim() !== "") {
      phoneMessage.textContent = "";
    }
  }

  function passwordValidate() {
    const passwordInput = document.querySelector("#floatingPassword");
    const passwordInputLength = passwordInput.getAttribute("minlength");
    const passwordMessage = passwordInput.nextElementSibling;
    if (
      passwordInput.value.length < passwordInputLength &&
      passwordInput.value.trim() !== ""
    ) {
      passwordMessage.textContent = "Invalid Password";
    } else if (passwordInput.value.trim() !== "") {
      passwordMessage.textContent = "";
    }
  }

  // ##### Country Code Validation
  const countryCodeInput = document.querySelector("#floatingCountryCode");
  countryCodeInput?.addEventListener("change", (event) => {
    countryCodeValidate();
  });

  function countryCodeValidate() {
    const phoneInput = document.querySelector("#floatingPhone");

    if (countryCodeInput.value === "") {
      phoneInput.setAttribute("minlength", "10");
      phoneInput.setAttribute("maxlength", "10");
      phoneInput.setAttribute("placeholder", "Mobile Number");
    }
    if (countryCodeInput.value === "+91") {
      phoneInput.setAttribute("minlength", "10");
      phoneInput.setAttribute("maxlength", "10");
      phoneInput.setAttribute("placeholder", "Enter a 10 digit Mobile No.");
    }
    if (countryCodeInput.value === "+971") {
      phoneInput.setAttribute("minlength", "9");
      phoneInput.setAttribute("maxlength", "9");
      phoneInput.setAttribute("placeholder", "Enter a 9 digit Mobile No.");
    }
  }
})();
