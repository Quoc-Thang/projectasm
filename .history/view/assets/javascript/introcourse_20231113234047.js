const listPanelCourse = document.getElementsByClassName("list-panel-course");
const listTabPanel = document.getElementsByClassName("list-tab-panel");

listTabPanel[0].style.display = "block";
for (let i = 0; i < listPanelCourse.length; i++) {
  listPanelCourse[i].addEventListener("click", () => {
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
