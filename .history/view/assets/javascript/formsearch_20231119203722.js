cardSearch = () => {
  const searchInput = document.getElementById("#search-input");
  const card = document.querySelector(".card-search");

  searchInput.addEventListener("focusin", (){
    if (card.style.display == "none" || card.style.display == "") {
        styleCard = "block";
    }
  })

  searchInput.addEventListener("focusout", (){
    if (!searchInput.value) {
        styleCard = "none";
        }
  });
};
