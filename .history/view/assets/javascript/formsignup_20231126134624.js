const openFormSignup = document.querySelector(".openSignup");
const formSingup = `      <div class="body-form body-form-signup">
<div class="modal-form">
  <button type="button" class="closeForm">
    <i class="fa-solid fa-xmark close"></i>
  </button>
  <div class="heading-form-login">
    <img src="./view/assets/image/Logo.png" alt="Logo Website">
    <h2 class="title-form-login">
      Đăng ký tài khoản F8
    </h2>
    <p class="desc-form-login">
      Mỗi người nên sử dụng một tài khoản, tài khoản nhiều người sử dụng chung có thể sẽ bị khóa
    </p>
  </div>
  <form class="formSignup" action="" method="get" onsubmit="return submitFormSignup()">
    <div class="fullname">
      <label for="fullname">
        Tên của bạn?
      </label>
      <input type="text" name="fullname" id="fullname" placeholder="Họ và tên của bạn">
    </div>
    <div class="signupPhone">
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
          <button class="sendCode" type="button" onclick="sendCode()" disabled>
            Gửi mã
          </button>
        </div>
      </div>
    </div>
    <div class="signupEmail">
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
    <div class="btn-submit">
      <button>
        Đăng ký
      </button>
    </div>
  </form>
  <div class="member">
    <span>
      Bạn đã có tài khoản?
      <a href="#">
        Đăng nhập
      </a>
    </span>
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

const formSignupPhone = document.querySelector(".signupPhone");
const formSingupEmail = document.querySelector(".signupEmail");
const signupPhone = document.querySelector(".signupWithPhone");
const signupEmail = document.querySelector(".signupWithEmail");

formSignupPhone.style.display = "block";
formSingupEmail.style.display = "none";

signupEmail.addEventListener("click", () => {
  formSignupPhone.style.display = "none";
  formSingupEmail.style.display = "block";
});

signupPhone.addEventListener("click", () => {
  formSignupPhone.style.display = "block";
  formSingupEmail.style.display = "none";
});

submitFormSignup = () => {};
