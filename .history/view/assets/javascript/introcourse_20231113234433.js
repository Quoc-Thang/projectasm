const listPanelCourse = document.querySelectorAll(".list-panel-course");
const listTabPanel = document.querySelectorAll(".list-tab-panel");

const handleScroll = () => {
  listPanelCourse.forEach((panel, index) => {
    const nextPanel = listPanelCourse[index + 1];

    if (nextPanel) {
      const panelRect = panel.getBoundingClientRect();
      const nextPanelRect = nextPanel.getBoundingClientRect();

      if (panelRect.bottom > nextPanelRect.top) {
        panel.style.position = "static";
      } else {
        panel.style.position = "sticky";
      }
    }
  });
};

// Initial setup
window.addEventListener("scroll", handleScroll);
handleScroll();
