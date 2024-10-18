document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  const signupBtn = document.querySelector(".signup-btn");
  const loginForm = document.querySelector(".form-login");
  const signupForm = document.querySelector(".form-signup");
  const welcomeText2 = document.querySelector(".welcome-text-2");
  const dontHaveAccountText = document.querySelector(".dont-have-account-text");
  const haveAccountText = document.querySelector(".have-account-text");
  const signupNow = document.querySelector(".signup-now");
  const loginNow = document.querySelector(".login-now");

  function toggleForms(showLogin) {
    loginForm.classList.toggle("active", showLogin);
    signupForm.classList.toggle("active", !showLogin);
    loginBtn.classList.toggle("hidden", !showLogin);
    signupBtn.classList.toggle("hidden", showLogin);
    welcomeText2.classList.add("activeText");
    dontHaveAccountText.classList.toggle("active", showLogin);
    haveAccountText.classList.toggle("active", !showLogin);
  }

  signupNow.addEventListener("click", () => toggleForms(false));
  loginNow.addEventListener("click", () => toggleForms(true));
  loginBtn.addEventListener("click", () => toggleForms(true));
  signupBtn.addEventListener("click", () => toggleForms(false));

  function togglePasswordVisibility(toggleBtnId, passwordInputId) {
    const toggleBtn = document.querySelector(toggleBtnId);
    const passwordInput = document.querySelector(passwordInputId);

    toggleBtn.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      this.innerHTML = type === "password" 
      ? '<img class="eye-visible" src="assets/eye-visible.svg" alt="Show Password">'
      : '<img class="eye-hidden" src="assets/eye-hidden.svg" alt="Hide Password">';
  });
  }

  togglePasswordVisibility("#toggleLoginPassword", "#login-password");
  togglePasswordVisibility("#toggleSignupPassword", "#signup-password");
});

/* Toggle Menu */
function toggleMenu() {
  const menu = document.getElementById("popup-menu");
  if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
}

window.onclick = function(event) {
  const menu = document.getElementById("popup-menu");
  if (!event.target.closest('.bg-icon-attach') && !event.target.closest('#popup-menu')) {
      menu.style.display = "none";
  }
}
/* End Toggle Menu */

/*Popup user info*/
function toggleMenuPopup() {
  const menu = document.getElementById("popup-user-info");
  const overlay = document.getElementById("overlay");
  
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    overlay.style.display = "block";  
  } else {
    menu.style.display = "none";
    overlay.style.display = "none";  
  }
}

document.getElementById("user-info").addEventListener("click", function(event) {
  event.stopPropagation(); 
  toggleMenuPopup();
});

window.addEventListener("click", function(event) {
  const menu = document.getElementById("popup-user-info");
  const overlay = document.getElementById("overlay");
  
  if (!event.target.closest('.popup-user-info') && !event.target.closest('#user-info')) {
    menu.style.display = "none";
    overlay.style.display = "none";  
  }
});
/*End Popup User Info*/

/* Sidebar */
function openNav() {
  document.getElementById("sidebar").style.width = "350px";
  document.getElementById("chat-window").style.marginLeft = "180px";
  document.getElementById("chat-input").style.marginLeft = "180px";
  document.getElementById("overlay2").style.display = "block";
  document.getElementById("overlay3").style.display = "block";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("chat-window").style.marginLeft = "0";
  document.getElementById("chat-input").style.marginLeft = "0";
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("overlay3").style.display = "none";
}

document.querySelector('.menu-hamburguer-icon').addEventListener('click', openNav);
/* End Sidebar */

/** Switch */
const switchElement = document.getElementById('switch-sound');
        switchElement.addEventListener('click', function() {
            this.classList.toggle('on');
        });

const switchElementMode = document.getElementById('switch-mode');
        switchElementMode.addEventListener('click', function() {
            this.classList.toggle('on');
        });
/* End Switch */

/* Color Picker */
const button = document.querySelector('.selector-color');
const favcolor = document.querySelector('#favcolor');
const colorHex = document.querySelector('#colorHex');

button.addEventListener('click', () => {
    favcolor.click(); 
});

favcolor.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    button.style.backgroundColor = selectedColor;
    colorHex.textContent = `Hex: ${selectedColor.toUpperCase()}`; 
});
/* End Color Picker */
