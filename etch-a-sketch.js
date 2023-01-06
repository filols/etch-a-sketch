function getGrid(){
  const grid = document.createElement('div');
  grid.classList.add('grid');
  for (let i = 0; i < 100; i++){
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 100; j++){
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }

    grid.appendChild(row);
  }
  
  return grid;
}

const grid = getGrid();
const body = document.querySelector('body');
body.appendChild(grid);