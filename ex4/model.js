//model.js

const HEIGHT = 20;
const WIDTH = 30;

let grid = new Array(HEIGHT)
for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(WIDTH).fill(false);
}
let nextGrid = new Array(HEIGHT).fill(new Array(WIDTH).fill(false));
for (let i = 0; i < grid.length; i++) {
    next[i] = new Array(WIDTH).fill(false);
}

for (let row = 0; row < HEIGHT; row++){
    for (let col = 0; col < WIDTH; col++){
        grid[row][col] = Math.random() > 0.6;
    }
}

export function next() {
    //clean the nextGrid 2d array
    for (let i = 0; i < grid.length; i++) {
        nextGrid[i] = new Array(WIDTH).fill(false);
    }
    console.log()

    for (let row = 0; row < HEIGHT; row++){
        for (let col = 0; col < WIDTH; col++){
            let neighbors = 0;
            if (col > 0 && row > 0) neighbors += Number(grid[row-1][col-1]);
            if (col > 0) neighbors += Number(grid[row][col-1]);
            if (row > 0) neighbors += Number(grid[row-1][col]);
            if (col < WIDTH - 1 && row < HEIGHT - 1) neighbors += Number(grid[row+1][col+1]);
            if (col < WIDTH - 1) neighbors += Number(grid[row][col+1]);
            if (row < HEIGHT - 1) neighbors += Number(grid[row+1][col]);

            if (grid[row][col] === false && neighbors === 3){
                nextGrid[row][col] = true;
            }
            if (grid[row][col] === true && neighbors >= 2 && neighbors <= 3){
                nextGrid[row][col] = false;
            }
            if (grid[row][col] === true && neighbors >= 2 && neighbors <= 3){
                nextGrid[row][col] = true;
            }
        }
    }
    for (let row = 0; row < HEIGHT; row++){
        for (let col = 0; col < WIDTH; col++){
            grid[row][col] = nextGrid[row][col];
        }
    }
}

export { grid }