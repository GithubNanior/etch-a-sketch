const drawingPad = document.querySelector("#drawing-pad");

const drawingPadSize = drawingPad.clientWidth;

generatePad(16);

document.querySelector("#regenerate-button").addEventListener("click", ()=>{
    let size = Number(window.prompt("Please enter the board resolution", 16));
    if (!Number.isInteger(size) || size < 1 || size > 100)
    {
        window.alert("Resolution must be an integer between 1 and 100!")
        return;
    }
    generatePad(size);
});

drawingPad.addEventListener(("mousedown"), (event)=>{
    if (event.target.className != "tile") return;
    if (event.buttons == 1)
    {
        if (event.target.style["opacity"] == '')
        {
            event.target.style.opacity = 0.9;
        }
        else
        {
            event.target.style.opacity -= 0.1;
        }
    }
});

drawingPad.addEventListener(("mouseover"), (event)=>{
    if (event.target.className != "tile") return;
    if (event.buttons == 1)
    {
        if (event.target.style["opacity"] == '')
        {
            event.target.style.opacity = 0.9;
        }
        else
        {
            event.target.style.opacity -= 0.1;
        }
    }
});

function generatePad(gridSize)
{
    drawingPad.innerHTML = "";

    let tileSize = Math.floor((drawingPadSize - gridSize - 1) / gridSize);
    let canvasSize = tileSize * gridSize + gridSize - 1;

    drawingPad.style.width = canvasSize+"px";
    drawingPad.style.height = canvasSize+"px";

    for (let index = 0; index < gridSize * gridSize; index++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.width = tileSize+"px";
        tile.style.height = tileSize+"px";
        drawingPad.appendChild(tile);
    }
}