const listPanelCourse = document.querySelectorAll(".list-panel-course");
const listTabPanel = document.querySelectorAll(".list-tab-panel");

// Show the first listTabPanel element initially
listTabPanel[0].style.display = "block";

for (let i = 0; i < listPanelCourse.length; i++) {
  listPanelCourse[i].addEventListener("click", () => {
    // Toggle the display of the corresponding listTabPanel element
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

// const handleScroll = () => {
//   listPanelCourse.forEach((panel, index) => {
//     const nextPanel = listPanelCourse[index + 1];

//     if (nextPanel) {
//       const panelRect = panel.getBoundingClientRect();
//       const nextPanelRect = nextPanel.getBoundingClientRect();

//       if (panelRect.bottom > nextPanelRect.top) {
//         panel.style.position = "static";
//       } else {
//         panel.style.position = "sticky";
//       }
//     }
//   });
// };

// Initial setup
// window.addEventListener("scroll", handleScroll);
// handleScroll();
