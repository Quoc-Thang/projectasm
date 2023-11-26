const fullName = document.getElementById("fullname");
const spanNameErr = document.createElement("span");
spanNameErr.className = "err-name";
spanNameErr.innerHTML = "Tên của bạn không hợp lệ";
spanNameErr.style.color = "#f33a58";
fullName.appendChild(spanNameErr);
const inputName = fullName.ariaValueMax;
const checkName = fullName.trim();

fullName.addEventListener("change", () => {
  if (checkName.length == 0) {
    spanNameErr.style.display = "block";
  } else {
    spanNameErr.style.display = "none";
  }
});
