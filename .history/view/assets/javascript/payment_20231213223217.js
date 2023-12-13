const targetMinutes = 5;
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + targetMinutes);

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const currentTime = new Date();
  const timeDifference = endTime - currentTime;

  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.round((timeDifference % (1000 * 60)) / 1000);

  countdownElement.textContent = `0${minutes} : ${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    countdownElement.textContent = "00:00";
    // window.location.assign("index.html");
  }
}

const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();
