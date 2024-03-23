const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginLink = document.getElementById("loginLink");
const loginLink2 = document.getElementById("loginLink2");
const signupLink = document.getElementById("signupLink");
function showLoginForm() {
  loginForm.style.display = "block";
  loginForm.style.height = "34rem";
  signupForm.style.display = "none";
}
function showSignupForm() {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
}
loginLink.addEventListener("click", showLoginForm);
loginLink2.addEventListener("click", showLoginForm);
signupLink.addEventListener("click", showSignupForm);
showSignupForm();
