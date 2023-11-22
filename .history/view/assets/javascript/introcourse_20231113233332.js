const listPanelCourse = document.getElementsByClassName("list-panel-course");
const listTabPanel = document.getElementsByClassName("list-tab-panel");

for (let i = 0; i < listPanelCourse.length; i++) {
  listPanelCourse.addEventListener("click", () => {
    if (listTabPanel.style.display === "block") {
      listTabPanel.style.display = "none";
      console.log("object");
    }
  });
}
