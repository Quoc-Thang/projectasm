newsPost = () => {
  const rotate = document.getElementById("rotate");
  const model = document.getElementById("model-news");

  if (model.style.visibility === "none" || model.style.display === "") {
    model.style.visibility = "block";
    model.style.transform = "translate3d(26.4px, 62.4px, 0px)";
  } else {
    model.style.transform = "translate3d(26.4px, 0px, 0px)";
    model.style.visibility = "none";
  }

  rotate.classList.toggle("diagonal");
};

function activeMenu() {
  const menu = document.querySelectorAll(".menu-sidebar");

  for (let i = 0; i < menu.length; i++) {
    let item = menu[i];
    item.addEventListener("click", function () {
      if (item.classList.contains("active") == true) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  }
}
