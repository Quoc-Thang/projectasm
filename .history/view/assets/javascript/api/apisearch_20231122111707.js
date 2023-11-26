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
        <img src="./view/assets/image/htmlcsszerohero.png" alt="Image course">
        <span>
          HTML, CSS từ cơ bản đến nâng cao
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <img src="./view/assets/image/htmlcsspro.png" alt="Image course">
        <span>
          HTML, CSS Pro
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <img src="./view/assets/image/sass.png" alt="Image course">
        <span>
          Ngôn ngữ tiền xử lý sass
        </span>
      </a>
    </li>
  </ul>
    `;
  });
};
