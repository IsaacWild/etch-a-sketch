const gridWrapper = document.querySelector(".gridWrapper")
const box = document.createElement("div");
// gridWrapper.appendChild(box);
box.classList.add("box");

function makeRow(x){
    if(x>100){
        alert("Please pick a smaller number")
    }else
    for(i=0; i<x; i++){
        const box = document.createElement("div");
        gridWrapper.appendChild(box);
        box.classList.add("box");
        for(j=0; j<x; j++){
            const box2 = document.createElement("div");
            box.appendChild(box2);
            box2.classList.add("box2");
        }
    }
}

makeRow(16);
