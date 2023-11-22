closeFormLogin = () => {
  const formLogin = document.querySelector(".body-form-login");
  const modalLogin = document.querySelector(".modal-login");
  const closeForm = document.querySelector(".fa-mark");

  closeForm.addEventListener("click", () => {
    if (formLogin.style.display == "visible" || formLogin.style.display == "") {
      formLogin.style.display = "none";
    }
  });
};
