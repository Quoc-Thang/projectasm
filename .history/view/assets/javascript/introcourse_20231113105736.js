const listPanelCourse = document.querySelector(".list-panel-course");
const listTabPanel = document.querySelector(".list-tab-panel");

listPanelCourse.addEventListener("click", () => {
  if (listTabPanel.style.display === "block")
    return (listTabPanel.style.display === "none");
  if (listTabPanel.style.height == 100%)
    return listTabPanel.style.height == "0";
  console.log("Xin chao");
});
