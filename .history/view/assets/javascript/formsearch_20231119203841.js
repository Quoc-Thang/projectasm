cardSearch = () => {
  const searchInput = document.getElementById("#search-input");
  const card = document.querySelector(".card-search");

  searchInput.addEventListener("focusin", () => {
    if (card.style.display == "none" || card.style.display == "") {
      card.style.display = "block";
    }
  });

  searchInput.addEventListener("focusout", () => {
    if (!searchInput.value || card.style.display == "block") {
      card.style.display = "none";
    }
  });
};
