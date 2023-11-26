window.addEventListener("DOMContentLoaded", () => {
  var endPoint =
    "./controller/controllerSearch.php?searchC=search&CouresSearch=";

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
      var li = document.createElement("li");
      li.innerHTML = `
      <a href="#">
        <img src="${imgCourse}" alt="Image course">
        <span>
          ${CourseTitle}
        </span>
      </a>
    `;
      apiData.appendChild(li);
    });
  };
});
