const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const pageButtons = document.querySelectorAll(".page-button");

let slideIndex = 0;

nextButton.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlider();
});

prevButton.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlider();
});

pageButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    slideIndex = index;
    updateSlider();
  });
});

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;

  // Update page buttons
  pageButtons.forEach((button, index) => {
    if (index === slideIndex) {
      button.classList.add("activeShow");
    } else {
      button.classList.remove("activeShow");
    }
  });
}

// Initial update
updateSlider();
