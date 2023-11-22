closeFormLogin = () => {
  const formLogin = document.querySelector(".body-form-login");
  const modalLogin = document.querySelector(".modal-login");
  const closeForm = document.querySelector(".fa-mark");

  closeForm.addEventListener("click", close());

  close() {
    modalLogin.style.display = "none";
  }
};

closeFormLogin();
