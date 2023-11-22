const listPanelCourse = document.getElementsByClassName("list-panel-course");
const listTabPanel = document.getElementsByClassName("list-tab-panel");

listPanelCourse.addEventListener("click", () => {
  if (listTabPanel.style.display === "block") {
    listTabPanel.style.display = "none";
  }
});
