closeFormLogin = () => {
  const formLogin = document.querySelector(".body-form-login");
  const modalLogin = document.querySelector(".modal-login");
  let closeForm = document.querySelector(".fa-mark");

  closeForm.addEventListener("click", () => {
    formLogin.style.visibility = "hidden";
  });
};

closeFormLogin();
