toggle = () => {
  const listPanelCourse = document.querySelector(".list-panel-course");
  const listTabPanel = document.querySelector(".list-tab-panel");

  listPanelCourse.target.addEventListener("click", () => {
    //   if (listTabPanel.style.width == "0") listTabPanel.style.width = "100%";
    //   else listTabPanel.style.width == "0";
    console.log(listPanelCourse.target);
  });
};
