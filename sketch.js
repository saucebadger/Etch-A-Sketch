const grid = document.querySelector("#content")
const clearBtn = document.querySelector("#clear")
const color = document.querySelector("#pen-color")


clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".grid-square")
    for ( const square of squares) {
        square.style.backgroundColor = "white"
    }
})

color.addEventListener("input", () => {
    console.log(color.value)
})

function duplicateGrid () {
    for (let i = 0; i < 256; i++) {
const gridSqr = document.createElement("div")
gridSqr.classList.add("grid-square")
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
grid.addEventListener("contextmenu", (event) =>{
    event.preventDefault() 
})
}}

duplicateGrid()
console.log(color.value)
