closeFormLogin = () => {
  const formLogin = document.querySelector("body-form-login");
  const modalLogin = document.querySelector(".modal-login");
  var closeForm = document.querySelector(".fa-mark");

  closeForm.addEventListener("click", () => {
    formLogin.style.display = "block";
  });
};

closeFormLogin();
