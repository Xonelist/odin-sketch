function createAreaName() {
    
    let areaName = [];
    let temp = [];
    for (i = 1; i <= (sizeSquare*sizeSquare); i++) {
        temp.push(i.toString());
        if (i % sizeSquare === 0) {
            areaName.push(temp.join(" "))
            temp = [];
        }
        const areaDiv = document.createElement("div");
        areaDiv.id = "template";
        areaDiv.style.width = "100%"
        areaDiv.style.height = "100%"
        div.appendChild(areaDiv);
    }
    return;
}

function reset() {
    sizeSquare = Number(prompt("change amount of square each side ?", 16 ))
    bodyHTML.removeChild(div);
    makeTemplate();
    bodyHTML.insertBefore(div, document.body.firstChild);
}

function makeTemplate(){
    div.style.cssText = `display: grid; grid-template-columns: repeat(${sizeSquare}, calc(100%/${sizeSquare})); grid-template-rows: repeat(${sizeSquare}, calc(100%/${sizeSquare}))`;
    div.style.width = "960px"
    div.style.height = "960px"
    div.style.margin = "0 auto"
    div.style.border = "10px solid black"
    div.style.background = "white";
}

let sizeSquare = 16;
const div = document.createElement("div");
const bodyHTML = document.querySelector("body");
bodyHTML.insertBefore(div, document.body.firstChild);
bodyHTML.style.background = "silver";

const interactiveTemplate = document.querySelectorAll("#template");

createAreaName()
document.body.addEventListener("mouseover", (e) => {
    if (e.target.id === "template")
        e.target.style.background = "gray";
})


   