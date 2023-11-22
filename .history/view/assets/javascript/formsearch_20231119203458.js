cardSearch = () => {
  const searchInput = document.getElementById("#search-input");
  const card = document.querySelector(".card-search");
const styleCard = card.style.display;
    

  searchInput.addEventListener("focusin", (){
    if (styleCard == "none" || styleCard == "") {
        styleCard = "block";
    }
  });

  searchInput.addEventListener("focusout", (){
    if (!searchInput.value) {
        styleCard = "none";
        }
  });
};
