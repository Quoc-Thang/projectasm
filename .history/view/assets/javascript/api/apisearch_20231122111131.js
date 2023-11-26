var endPoint = "./controller/controllerSearch.php?searchC=search&CouresSearch=";

fetch(endPoint)
  .then((res) => {
    res.json;
  })
  .then((data) => {
    showData(date);
  })
  .catch((err) => {
    console.log("Error: " err);
  })
  ;
