export const toggleGrid = () => {
  const button = document.querySelector(".toggle_button");
  const grid = document.querySelector(".grid");

  console.log(button);

  button.addEventListener("click", function () {
    grid.classList.toggle("grid-2");
    grid.classList.toggle("grid-1");

        if (grid.classList.contains("grid-1")) {
            button.style.backgroundImage = "url('./src/assets/grid_layout1_icon.svg')";
          } else {
            button.style.backgroundImage = "url('./src/assets/grid_layout2_icon.svg')";
          }
  });
};
