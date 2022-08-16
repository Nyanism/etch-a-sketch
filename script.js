for (let ii = 0; ii < 16; ii++) {
  const gridRow = document.createElement("div");
  gridRow.setAttribute("class", "grid-row");
  document.querySelector(".grid").appendChild(gridRow);
}

const grid = document.createElement("div");
grid.setAttribute("class", "grid-square");
const rows = document.querySelectorAll(".grid-row");
for(let hh = 0; hh < rows.length; hh++) {
  for(let jj=0; jj < 16; jj++) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid-square");
    rows[hh].appendChild(grid);
  }
}

