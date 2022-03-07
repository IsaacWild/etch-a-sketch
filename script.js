const gridWrapper = document.querySelector(".gridWrapper")
const box = document.createElement("div");
let gridSize = 16;
// gridWrapper.appendChild(box);
box.classList.add("box");
           
function makeGrid(x){
    for(i=0; i<x; i++){
    const box = document.createElement("div");
    gridWrapper.appendChild(box);
    box.classList.add("box");
        for(j=0; j<x; j++){
            const box2 = document.createElement("div");
            box.appendChild(box2);
            box2.classList.add("box2");
            box2.addEventListener("mouseenter", () =>{
                box2.classList.add("box2Colour");
                box2.classList.remove("box2")
            })
        }
    }
}

makeGrid(gridSize);

function clearGrid(){
    while (gridWrapper.firstChild){
        gridWrapper.removeChild(gridWrapper.firstChild);
    }
    gridSize = prompt("How big would you like the grid?","16");
    if(gridSize > 100)
    {
        alert("Please pick a number under 100")
        clearGrid();
    }
    makeGrid(gridSize);
}

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    clearGrid();
});