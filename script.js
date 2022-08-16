function createGrid(width) {
  document.querySelector(".grid").remove();

  const grid = document.createElement("div");
  grid.classList.add("grid");
  document.querySelector("body").appendChild(grid);

  for (let ii = 0; ii < width; ii++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    document.querySelector(".grid").appendChild(gridRow);
  }

  const gridSquare = document.createElement("div");
  gridSquare.setAttribute("class", "grid-square");
  const rows = document.querySelectorAll(".grid-row");
  for (let hh = 0; hh < rows.length; hh++) {
    for (let jj = 0; jj < width; jj++) {
      const grid = document.createElement("div");
      grid.classList.add("grid-square");
      grid.addEventListener("mouseover", () => {
        grid.classList.add("hover");
      });
      rows[hh].appendChild(grid);
    }
  }
}

let width = 16;
createGrid(width);

const newGrid = document.querySelector(".new-grid");
newGrid.addEventListener("click", () => {
  width = parseInt(prompt("How many squares per side would you like?"));
  createGrid(width);
});
