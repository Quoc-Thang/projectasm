const openForm = document.querySelector(".openLogin");
const closeLogin = document.querySelector(".close");
const formLogin = `      <div class="body-form body-form-Login">
<div class="modal-form">
  <button type="button" class="closeForm">
    <i class="fa-solid fa-xmark close"></i>
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
    <div class="signupPhone" style="display: block;">
      <div class="headingSignup">
        <label for="phoneNumber">
          Số điện thoại
        </label>
        <span class="signupWithEmail">
          Đăng ký với email
        </span>
      </div>
      <div class="contentSignup">
        <div class="firstContentSignup firstContentSignupPhone">
          <select name="countryPhone" id="countryPhone">
            <option value="VN +84">
              VN +84
            </option>
            <option value="QT +00">
              QT +00
            </option>
          </select>
          <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Số điện thoại">
        </div>
        <div class="secondContentSignup">
          <input type="text" name="codePhoneNumber" id="codePhoneNumber" placeholder="Nhập mã xác nhận">
          <button class="sendCode" type="button" onclick="sendCode()" disabled="">
            Gửi mã
          </button>
        </div>
      </div>
    </div>
    <div class="signupEmail" style="display: none;">
      <div class="headingSignup">
        <label for="phoneNumber">
          Email
        </label>
        <span class="signupWithPhone">
          Đăng ký với SĐT
        </span>
      </div>
      <div class="contentSignup">
        <div class="firstContentSignup firstContentSignupEmail">
          <input type="email" name="emailSignup" id="emailSignup" placeholder="Địa chỉ email">
          <input type="password" name="passwordSingup" id="passwordSignup" placeholder="Mật khẩu">
        </div>
        <div class="secondContentSignup">
          <input type="text" name="codeEmail" id="codeEmail" placeholder="Nhập mã xác nhận">
          <button class="sendCode" type="button" onclick="sendCode()">
            Gửi mã
          </button>
        </div>
      </div>
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
</div>

<style type="text/css">
  :root {
    --primary-color: #f05123;
    --background-color: #fff;
    --border-bottom: #e8ebed;
    --border-color: #1473e6;
    --background-hover: #f5f5f5;
    --border: #e8e8e8;
    --color-txt: #000;
    --background-color-menu: #f0f0f0;
  }

  .body-form {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-form {
    background-color: var(--background-color);
    border-radius: 14px;
    width: calc(100% - 20px);
    max-width: 520px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 25px 60px;
    height: calc(100vh - 50px);
    overflow: auto;
    align-items: center;
    gap: 25px;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
    animation: showOut 0.5s;
    transition: all 0.5s linear infinite;
  }

  @keyframes showOut {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: scale(0.1);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }

  .closeForm {
    color: #333;
  }

  .modal-form .closeForm {
    align-items: center;
    background: rgba(22, 24, 35, 0.03);
    border-radius: 50%;
    color: #333;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    line-height: 0;
    position: absolute;
    right: 16px;
    top: 16px;
    width: 40px;
    border: 0;
  }

  .heading-form-login {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .heading-form-login img {
    width: 40px;
    height: 40px;
    border-radius: 6px;
  }

  .title-form-login {
    font-size: 26px;
    font-weight: 700;
  }

  .desc-form-login {
    color: #f33a58;
    font-size: 12px;
    text-align: center;
  }
  .content-form-login {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    align-items: center;
  }

  .list-login {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 75%;
  }

  .list-login a {
    --height: 44px;
    background-color: #fff;
    border: 2px solid #dce0e3;
    border-radius: 44px;
    display: inline-block;
    height: var(--height);
    line-height: var(--height);
    padding-left: 16px;
    position: relative;
    text-align: center;
    width: 320px;
  }

  .login-btn:hover {
    background-color: var(--border);
  }

  .list-login .fa-user,
  .list-login img {
    left: 16px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .list-login p {
    color: #35414c;
    cursor: pointer;
    font-weight: 600;
    line-height: 42px;
    outline: 0;
    text-align: center;
  }

  .not-a-member a,
  .member a {
    color: var(--primary-color);
  }

  .role {
    text-align: center;
  }

  .role span {
    font-size: 12px;
  }

  .role a {
    text-decoration: underline;
    color: var(--color-txt);
  }

  .formSignup {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .formSignup label {
    font-size: 14px;
    color: var(--color-txt);
    font-weight: 600;
  }
  
  .formSignup input {
    height: 42px;
    width: 100%;
    border-radius: 20px;
    font-size: 16px;
    padding-left: 16px;
    border: 1px solid var(--border-bottom);
    background-color: var(--background-hover);
    outline: none;
  }
  
  .fullname {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .headingSignup {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 20px;
  }
  
  .signupWithEmail,
  .signupWithPhone {
    font-size: 12px;
    opacity: 0.7;
    cursor: pointer;
  }
  
  .contentSignup {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .secondContentSignup {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  
  .sendCode {
    position: absolute;
    right: 0;
    height: 42px;
    width: 40%;
    border-radius: 20px;
    color: #757575;
    background-color: #ccc;
    font-size: 12px;
    border: 0;
    cursor: no-drop;
  }
  
  .firstContentSignupPhone {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  
  .secondContentSignupPhone {
    display: flex;
    flex-direction: row;
  }
  
  #countryPhone {
    position: absolute;
    height: 42px;
    width: 25%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 500;
    background-color: var(--background-hover);
    border: 1px solid var(--border-bottom);
  }
  
  #phoneNumber {
    padding-left: 26%;
  }
  
  .firstContentSignupEmail {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .btn-submit button {
    background: linear-gradient(70.06deg, #2cccff -5%, #22dfbf 106%);
    width: 100%;
    height: 42px;
    border: 0;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
    color: var(--background-color-menu);
  }
</style>`;

openForm.addEventListener("click", () => {
  document.body.insertAdjacentHTML("beforeend", formLogin);
});

document.body.addEventListener("click", (event) => {
  if (event.target.matches(".close") || event.target.matches(".body-form")) {
    const modalForm = document.querySelector(".body-form");
    modalForm.parentNode.removeChild(modalForm);
  }
});
