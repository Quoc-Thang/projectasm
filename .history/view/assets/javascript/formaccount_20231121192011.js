closeFormLogin = () => {
  const formLogin = document.querySelector(".body-form-login");
  const closeForm = document.querySelector(".fa-mark");

  closeForm.addEventListener("click", () => {
    formLogin.style.display = "none";
  });
};

closeFormLogin();
