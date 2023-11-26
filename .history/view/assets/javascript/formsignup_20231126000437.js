const fullName = document.getElementById("fullname").value;
const spanNameErr = document.createElement("span");

spanNameErr.className = "errName";
spanNameErr.innerText = "Tên của bạn không hợp lệ";
spanNameErr.style.color = "#f33a58";
spanNameErr.style.display = "none";

fullName.addEventListener("input", () => {
  if (inputName.length == 0) {
    fullName.insertAdjacentElement("afterend", spanNameErr);
  } else {
    spanNameErr.style.display = "none";
  }
});
