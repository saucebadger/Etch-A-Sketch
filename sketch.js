const grid = document.querySelector("#content")
const clearBtn = document.querySelector("#clear")
const color = document.querySelector("#pen-color")
const input = document.querySelector("#grid-size")
const generate = document.querySelector("#userinput")

generate.addEventListener("click", () => {
    const gridSize = Number(input.value)
    if (gridSize >100) {
        alert("Max Grid Size is 100!")
        return
    }
    else if (gridSize <16) {
        alert("Min Grid Size is 16!")
        return
    }
    else if (!Number.isInteger(gridSize)) {
        alert("Please enter whole numbers only!")
        return
    }
duplicateGrid(gridSize)

})

grid.addEventListener("contextmenu", (event) =>{
    event.preventDefault() 
})

clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".grid-square")
    for ( const square of squares) {
        square.style.backgroundColor = "white"
    }
})

function duplicateGrid (gridSize) {
const totalSquares = gridSize * gridSize
const squareSize = 640 / gridSize
grid.innerHTML = ""

    for (let i = 0; i < totalSquares; i++) {
const gridSqr = document.createElement("div")
gridSqr.classList.add("grid-square")
gridSqr.style.width = `${squareSize}px`
gridSqr.style.height = `${squareSize}px`  
grid.appendChild(gridSqr)

gridSqr.addEventListener("mousedown", (event) => {
   if (event.buttons & 1) {
    gridSqr.style.backgroundColor = color.value}
    else if (event.buttons & 2) {
        gridSqr.style.backgroundColor = "white"
    }
})
    gridSqr.addEventListener("mouseenter", (event) =>{
   if (event.buttons & 1) {
   gridSqr.style.backgroundColor = color.value
                        }
  
})
   
}
}



duplicateGrid(16)

