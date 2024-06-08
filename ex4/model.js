//model.js

const HEIGHT = 20;
const WIDTH = 30;

let grid = new Array(HEIGHT)
setEmptyGrid(grid);
randomizeGrid(grid);

let nextGrid = new Array(HEIGHT);
setEmptyGrid(nextGrid);

function setEmptyGrid(gridParam) {
    for (let i = 0; i < gridParam.length; i++) {
        gridParam[i] = new Array(WIDTH).fill(false);
    }
}

function randomizeGrid(gridParam) {
    for (let row = 0; row < HEIGHT; row++) {
        for (let col = 0; col < WIDTH; col++) {
            gridParam[row][col] = Math.random() > 0.6;
        }
    }
}


function next() {
    //clean the nextGrid 2d array
    setEmptyGrid(nextGrid);

    //count the neighbors of each cell
    for (let row = 0; row < HEIGHT; row++) {
        for (let col = 0; col < WIDTH; col++) {
            let neighbors = 0;
            if (col > 0 && row > 0) neighbors += Number(grid[row - 1][col - 1]);
            if (col > 0) neighbors += Number(grid[row][col - 1]);
            if (row > 0) neighbors += Number(grid[row - 1][col]);
            if (col < WIDTH - 1 && row < HEIGHT - 1) neighbors += Number(grid[row + 1][col + 1]);
            if (col < WIDTH - 1) neighbors += Number(grid[row][col + 1]);
            if (row < HEIGHT - 1) neighbors += Number(grid[row + 1][col]);

            if (grid[row][col] === false && neighbors === 3) {
                nextGrid[row][col] = true;
            }
            if (grid[row][col] === true && neighbors >= 2 && neighbors <= 3) {
                nextGrid[row][col] = false;
            }
            if (grid[row][col] === true && neighbors >= 2 && neighbors <= 3) {
                nextGrid[row][col] = true;
            }
        }
    }

    //update the grid with cells from newGrid
    for (let row = 0; row < HEIGHT; row++) {
        for (let col = 0; col < WIDTH; col++) {
            grid[row][col] = nextGrid[row][col];
        }
    }
}

//make grid and next() function available from other files
export {grid, next}