function hoverCourse() {
  const courseItems = document.querySelector(".course-item");
  const viewCourse = document.querySelector(".view-course");

  courseItems.forEach((courseItem) => {
    courseItem.addEventListener("mouseover", () => {
      const bgViewCourse = getComputedStyle(courseItem, "::after");
      if (
        bgViewCourse.visibility === "hidden" &&
        getComputedStyle(viewCourse).visibility === "hidden"
      ) {
        bgViewCourse.visibility = "visible";
        viewCourse.style.visibility = "visible";
      }
    });

    courseItem.addEventListener("mouseout", () => {
      const bgViewCourse = getComputedStyle(courseItem, "::after");
      if (
        bgViewCourse.visibility === "visible" &&
        getComputedStyle(viewCourse).visibility === "visible"
      ) {
        bgViewCourse.visibility = "hidden";
        viewCourse.style.visibility = "hidden";
      }
    });
  });
}
