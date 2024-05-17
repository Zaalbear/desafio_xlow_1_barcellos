export const toggleGrid = () => {
  const button = document.querySelector(".toggle_button");
  const grid = document.querySelector(".grid");

  console.log(button);

  button.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      // Mobile
      if (grid.classList.contains("grid-1")) {
        grid.classList.toggle("grid-2");
      }
    }
  });
};
