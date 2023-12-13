// Đặt số phút cần đếm ngược
const targetMinutes = 5;

// Tính thời điểm kết thúc
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + targetMinutes);

// Lấy phần tử HTML để hiển thị đồng hồ đếm ngược
const countdownElement = document.getElementById("countdown");

// Hàm cập nhật đồng hồ đếm ngược
function updateCountdown() {
  const currentTime = new Date();
  const timeDifference = endTime - currentTime;

  // Tính phút và giây từ thời điểm hiện tại đến thời điểm kết thúc
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Hiển thị đồng hồ đếm ngược dưới dạng MM:SS
  countdownElement.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  // Kiểm tra nếu thời gian kết thúc
  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    countdownElement.textContent = "00:00";
    alert("Hết thời gian!");
  }
}

// Cập nhật đồng hồ đếm ngược mỗi giây
const timerInterval = setInterval(updateCountdown, 1000);

// Gọi hàm lần đầu để đảm bảo hiển thị ngay từ đầu
updateCountdown();
