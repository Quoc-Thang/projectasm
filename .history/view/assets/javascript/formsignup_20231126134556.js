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
</div>`;

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
