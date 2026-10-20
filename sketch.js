const grid = document.querySelector("#content")
const clearBtn = document.querySelector("#clear")
const color = document.querySelector("#pen-color")


function duplicateGrid () {
    for (let i = 0; i < 256; i++) {
const gridSqr = document.createElement("div")
gridSqr.classList.add("grid-square")
grid.appendChild(gridSqr)
}
}

duplicateGrid()
console.log(color.value)
