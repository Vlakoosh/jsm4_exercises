//presenter.js

import {grid, next} from "./model.js";

const gameDiv = document.getElementById("game");
const nextButton = document.getElementById("nextButton");

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        const cell = document.createElement("input");
        cell.setAttribute("type", "checkbox");
        cell.checked = false;
        cell.setAttribute("id", "checkbox-x" + String(i).padStart(2,"0") + "y" + String(j).padStart(2,"0"));
        gameDiv.appendChild(cell);
    }
    gameDiv.appendChild(document.createElement("br"))
}

function updateView() {
    for (let x = 0; x < grid.length; x++){
        for (let y = 0; y < grid[0].length; y++){
            const id = "checkbox-x" + String(x).padStart(2,"0") + "y" + String(y).padStart(2,"0");
            const cell = document.getElementById(id);
            cell.checked = grid[x][y];
        }
    }
}

updateView();

////uncomment this to set automatic updates of the simulation
// setInterval( ()=> {
//     next();
//     updateView();
// }, 1000);

nextButton.addEventListener("click", () => {
    next();
    updateView();
})