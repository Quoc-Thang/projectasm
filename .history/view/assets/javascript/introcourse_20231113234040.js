const listPanelCourse = document.getElementsByClassName("list-panel-course");
const listTabPanel = document.getElementsByClassName("list-tab-panel");

for (let i = 0; i < listPanelCourse.length; i++) {
  listPanelCourse[i].addEventListener("click", () => {
    listTabPanel[0].style.display = "block";
    if (
      listTabPanel[i].style.display === "none" ||
      listTabPanel[i].style.display === ""
    ) {
      listTabPanel[i].style.display = "block";
    } else {
      listTabPanel[i].style.display = "none";
    }
  });
}
