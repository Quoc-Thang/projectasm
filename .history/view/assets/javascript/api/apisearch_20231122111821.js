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
    div.innerHTML = `
    <div class="title-content">
    <h2>
      Khóa học
    </h2>
    <a href="#">
      Xem thêm
    </a>
  </div>
  <ul class="main-content">
    <li>
      <a href="#">
        <img src="${imgCourse}" alt="Image course">
        <span>
          ${CourseTitle}
        </span>
      </a>
    </li>
  </ul>
    `;
  });
};
