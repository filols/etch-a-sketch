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

    for (let j = 0; j < dimension*2; j++){
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }

    grid.appendChild(row);
  }
  
  grid.addEventListener('mouseover', paintCanvas);
  const body = document.querySelector('body');
  body.appendChild(grid);
}

function resetGrid(){
  const squares = Array.from(document.querySelectorAll('.square'));
  squares.forEach(square => square.style.backgroundColor = '#e6e3e3');
}

function addResetButton(){
  const resetBtn = document.querySelector('#reset')
  resetBtn.addEventListener('click', resetGrid);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') resetGrid();
  })
}

function paintCanvas(e){
  e.stopPropagation();
  e.target.style.backgroundColor = 'black';
}

addResetButton();
createGrid(100);