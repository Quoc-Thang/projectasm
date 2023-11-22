const listPanelCourse = document.querySelector(".list-panel-course");
const listTabPanel = document.querySelector(".list-tab-panel");

listPanelCourse.addEventListener("click", () => {
  if (listTabPanel.style.display === "block") {
    listTabPanel.style.display = "none";
  }
});
