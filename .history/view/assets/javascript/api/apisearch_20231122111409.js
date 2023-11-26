var endPoint = "./controller/controllerSearch.php?searchC=search&CouresSearch=";

fetch(endPoint)
  .then((res) => {
    res.json;
  })
  .then((data) => {
    showData(data);
  })
  .catch((err) => {
    console.error(`Err: ${err}`);
  });

showData = (data) => {
  var apiData = document.getElementById("apiData");

  data.forEach((items) => {
    var div = document.createElement("div");
    div.className("api-data");
  });
};
