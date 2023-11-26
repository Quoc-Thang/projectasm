var endPoint = "./controller/controllerSearch.php?searchC=search&CouresSearch=";

fetch(endPoint)
  .then((res) => {
    res.json;
  })
  .then((data) => {
    showData(data);
  })
  .catch((err) => {
    console.log(`Err: ${err}`);
  });

showData();
