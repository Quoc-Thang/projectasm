cardSearch = () => {
  const searchInput = document.getElementById("#search-input");
  const card = document.querySelector(".card-search");

  searchInput.addEventListener("focusin", (){
    if (card.style.display == "none" || styleCard == "") {
        styleCard = "block";
    }
  })

  searchInput.addEventListener("focusout", (){
    if (!searchInput.value) {
        styleCard = "none";
        }
  });
};
