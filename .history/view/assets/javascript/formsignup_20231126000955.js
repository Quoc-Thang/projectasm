submitFormSignup = () => {
  const fullName = document.getElementById("fullname").value;
  const spanNameErr = document.createElement("span");

  spanNameErr.className = "errName";
  spanNameErr.innerText = "Tên của bạn không hợp lệ";
  spanNameErr.style.color = "#f33a58";
  spanNameErr.style.display = "block";

  // fullName.addEventListener("input", () => {
  if (fullName == 0) {
    fullName.insertAdjacentElement("afterend", spanNameErr);
  } else {
    spanNameErr.parentNode.removeChild(spanNameErr);
  }
  // });
};
