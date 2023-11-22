const listPanelCourse = document.querySelector(".list-panel-course");
const listTabPanel = document.querySelector(".list-tab-panel");

listPanelCourse.addEventListener("click", () => {
  if (listTabPanel.style.display === "block")
    return (listTabPanel.style.display = "none");
  if (listTabPanel.style.display === "none")
    return (listTabPanel.style.display = "block");
  console.log("Xin chao");
});
