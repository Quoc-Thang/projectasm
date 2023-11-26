const fullName = document.getElementById("fullname");
const spanNameErr = document.createElement("span");
spanNameErr.className = "err-name";
spanNameErr.innerHTML = "Tên của bạn không hợp lệ";
spanNameErr.style.color = "#f33a58";
fullName.appendChild(spanNameErr);
