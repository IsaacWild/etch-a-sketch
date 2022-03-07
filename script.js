const gridWrapper = document.querySelector(".gridWrapper")
const box = document.createElement("div");
// gridWrapper.appendChild(box);
box.classList.add("box");
           
function makeGrid(x){
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
            box2.addEventListener("mouseenter", () =>{
                box2.classList.add("box2Colour");
                box2.classList.remove("box2")
            })
        }
    }
}

makeGrid(10);



// this only made the 1st box to change colour when mouse entered any box2
// const boxes = document.querySelectorAll(".box2");

// boxes.forEach(boxes =>{
//     boxes.addEventListener("mouseover", (e)=>{
//         document.querySelector(".box2").style.background = "red"
//     })
// })

// document.querySelector(".box2").addEventListener("mouseover", () => {
//     document.querySelector(".box2").style.background = "red"
// })

