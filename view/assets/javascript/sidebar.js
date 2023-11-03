newsPost = () => {
  const rotate = document.getElementById("rotate");
  const model = document.getElementById("model-news");

  if (model.style.display === "none" || model.style.display === "") {
    model.style.display = "block";
    model.style.transform = "translate3d(26.4px, 62.4px, 0px)";
  } else {
    model.style.transform = "translate3d(26.4px, 0px, 0px)";
    model.style.display = "none";
  }

  rotate.classList.toggle("diagonal");
};
