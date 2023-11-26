const formSignupPhone = document.querySelector(".signupPhone");
const formSingupEmail = document.querySelector(".signupEmail");
const signupPhone = document.querySelector(".signupWithPhone");
const signupEmail = document.querySelector(".signupWithEmail");
const sendCode = document.querySelector(".sendcode");

formSignupPhone.style.display = "block";
formSingupEmail.style.display = "none";
// sendCode.style.cursor = "no-drop";

signupEmail.addEventListener("click", () => {
  formSignupPhone.style.display = "none";
  formSingupEmail.style.display = "block";
});

signupPhone.addEventListener("click", () => {
  formSignupPhone.style.display = "block";
  formSingupEmail.style.display = "none";
});
