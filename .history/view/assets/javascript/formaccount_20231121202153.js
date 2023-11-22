const openForm = document.querySelector(".openLogin");
const closeForm = document.querySelector(".fa-xmark");
const formLogin = `      <div class="body-form-login">
<div class="modal-login">
  <button type="button">
    <i class="fa-solid fa-xmark"></i>
  </button>
  <div class="heading-form-login">
    <img src="./view/assets/image/Logo.png" alt="Logo Website">
    <h2 class="title-form-login">
      Đăng nhập vào F8
    </h2>
    <p class="desc-form-login">
      Mỗi người nên sử dụng một tài khoản, tài khoản nhiều người sử dụng chung có thể sẽ bị khóa
    </p>
  </div>
  <div class="content-form-login">
    <ul class="list-login">
      <li>
        <a href="#" class="login-btn">
          <i class="fa-regular fa-user"></i>
          <p>
            Sử dụng email / số điện thoại
          </p>
        </a>
      </li>
      <li>
        <a href="#" class="login-btn">
          <img src="./view/assets/image/google-18px.svg" alt="Login Google">
          <p>
            Đăng nhập với Google
          </p>
        </a>
      </li>
      <li>
        <a href="#" class="login-btn">
          <img src="./view/assets/image/facebook-18px.svg" alt="Login Facebook">
          <p>
            Đăng nhập với Facebook
          </p>
        </a>
      </li>
      <li>
        <a href="#" class="login-btn">
          <img src="./view/assets/image/github-18px.svg" alt="Login Gihub">
          <p>
            Đăng nhập với Github
          </p>
        </a>
      </li>
    </ul>
    <div class="not-a-member">
      <span>
        Bạn chưa có tài khoản?
        <a href="#">
          Đăng ký
        </a>
      </span>
    </div>
  </div>
  <div class="role">
    <span>
      Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
      <a href="#">
        điều khoản sử dụng
      </a>
      của chúng tôi
    </span>
  </div>
</div>
</div>`;

openForm.addEventListener("click", () => {
  document.body.insertAdjacentHTML("beforeend", formLogin);
});

closeForm.addEventListener("click", () => {
    document.body.removeAdjacentHTML =
});
