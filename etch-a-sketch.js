function createGrid(dimension){
  (() => {
    const grid = document.querySelector('.grid');
    if (grid) grid.remove();
  })();

  const grid = document.createElement('div');
  grid.classList.add('grid');

  for (let i = 0; i < dimension; i++){
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < dimension; j++){
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }

    grid.appendChild(row);
  }
  
  const body = document.querySelector('body');
  body.appendChild(grid);
}

function resetGrid(){
  const squares = Array.from(document.querySelectorAll('.square'));
  squares.forEach(square => square.style.backgroundColor = '#e6e3e3');
}

createGrid(100);