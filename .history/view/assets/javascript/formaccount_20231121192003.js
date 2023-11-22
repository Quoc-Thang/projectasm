closeFormLogin = () => {
  const formLogin = document.querySelector(".body-modal-login");
  const closeForm = document.querySelector(".fa-mark");

  closeForm.addEventListener("click", () => {
    formLogin.style.display = "none";
  });
};

closeFormLogin();
