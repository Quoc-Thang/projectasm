const listPanelCourse = document.querySelector(".list-panel-course");
const listTabPanel = document.querySelector(".list-tab-panel");

listPanelCourse.addEventListener("click", () => {
  if (listTabPanel.style.width == "0")
    return (listTabPanel.style.width = "100%");
  if (listTabPanel.style.width == "100%")
    return listTabPanel.style.width == "0";
  console.log("Xin chao");
});
