const fullName = document.getElementById("fullname").value;
const spanNameErr = document.createElement("span");
spanNameErr.innerText = "Tên của bạn không hợp lệ";
spanNameErr.style.color = "#f33a58";
spanNameErr.style.display = "none";
fullName.insertAdjacentElement("afterend", spanNameErr);
const inputName = fullName.value;
const checkName = inputName.trim();

fullName.addEventListener("input", () => {
  if (inputName.length == 0) {
    spanNameErr.style.display = "block";
  } else {
    spanNameErr.style.display = "none";
  }
});
