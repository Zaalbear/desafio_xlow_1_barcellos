export const toggleGrid = () => {
  const button = document.querySelector(".toggle_button");
  const grid = document.querySelector(".grid");

  button.addEventListener("click", function () {
    grid.classList.toggle("grid-2");
    grid.classList.toggle("grid-1");

        if (grid.classList.contains("grid-1")) {
            button.innerHTML = "<span class='material-symbols-outlined'>view_list</span>";
          } else {
            button.innerHTML = "<span class='material-symbols-outlined'>view_column</span>";
          }
  });
};
