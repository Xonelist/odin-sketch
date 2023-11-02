let sizeSquare = 16;

const bodyHTML = document.querySelector("body");
bodyHTML.style.cssText = "background: silver; display: flex;";
bodyHTML.style.flexDirection = "column"
const btn = document.createElement("button");
btn.textContent = "Reset the Board"
btn.style.cssText = "margin: 1em auto; padding: 1em 2em; border-radius: 5px;"
bodyHTML.insertBefore(btn, bodyHTML.firstChild);

function makeTemplate(){
    const div = document.createElement("div");
    div.id = "container";
    div.style.cssText = `display: grid; grid-template-columns: repeat(${sizeSquare}, calc(100%/${sizeSquare})); grid-template-rows: repeat(${sizeSquare}, calc(100%/${sizeSquare}))`;
    div.style.width = "720px"
    div.style.height = "720px"
    div.style.margin = "0 auto"
    div.style.border = "10px solid black"
    div.style.background = "white";
    bodyHTML.insertBefore(div, bodyHTML.firstChild);
    createArea();
}

function createArea() {
    const div = document.querySelector("#container");
    for (i = 1; i <= (sizeSquare*sizeSquare); i++) {
        const areaDiv = document.createElement("div");
        areaDiv.id = "template";
        areaDiv.style.width = "100%"
        areaDiv.style.height = "100%"
        div.appendChild(areaDiv);
    }
    return true;
}

function reset() {
    sizeSquare = Number(prompt("change amount of square each side ? (max = 100)", 16 ))
    if (sizeSquare > 100){
        alert("The number you input is too much");
        return false;
    }
    bodyHTML.removeChild(bodyHTML.firstChild);
    makeTemplate();
}

document.body.addEventListener("mouseover", (e) => {
    if (e.target.id === "template")
        e.target.style.background = "gray";
})

makeTemplate();
btn.addEventListener("click", () => reset())
   