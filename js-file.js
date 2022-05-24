const screen = document.createElement('div');
const pixel = document.createElement('div');
const knobContainer = document.createElement('div');
const knob = document.createElement('div');
screen.setAttribute('id', 'container');
knobContainer.setAttribute('id', 'knobContainer');
document.getElementById("mainContainer").appendChild(screen);
document.getElementById("mainContainer").appendChild(knobContainer);

let a = 0;
let pixels = [];
let defaultGrid = 16;

//set up default screen size
window.onload = () => {
    gridInput(defaultGrid);
}

//clone and append 2 nodes
for (let i = 1; i <= 2; i++){
    knobContainer.appendChild(knob.cloneNode(true));
}

const knobs = document.querySelectorAll("#knobContainer div");
knobs.forEach(b => b.classList.add("sphere"));

//pick a custom grid
document.getElementById("grid").addEventListener('click', () => {
    gridSize();
})

//clear the canvas
document.getElementById("clear").addEventListener('click', () => {
    pixels.forEach(b => b.style.opacity = 0);
});

//random color stroke
document.getElementById("rainbow").addEventListener('click', () => {
    pixels.forEach(b => b.addEventListener('mouseover', () => {
        b.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
    }))
})

//standard black stroke
document.getElementById("standard").addEventListener('click', () => {
    pixels.forEach(b => b.addEventListener('mouseover', () => {
        b.style.backgroundColor = "black";
    }))
})

//increment opacity on each hover
pixels.forEach(b => b.addEventListener('mouseover', () => {
    if (b.style.opacity < 1){ 
        b.style.opacity -= '-0.1';
    }
}))

//asks for a number between 0 and 100
let gridSize = function(){
    while (a < 1){
        let grid = prompt("Please enter the amount of squares per side. (Max: 100)");
        gridInput(grid);  
    }
    a = 0;
}

//get a random number between 0 and 255
function randomRGB(){
    return Math.floor(Math.random() * 255);
}

//takes input and calculates width and height of the canvas
function gridInput(grid){
    if (grid > 0 && grid <= 100){
        const calc = 500 / grid;
        square = grid * grid;
        screen.innerHTML = '';
        for (let i = 1; i <= square; i++){
            screen.appendChild(pixel.cloneNode(true));
        }
        pixels = document.querySelectorAll("#container div");
        pixels.forEach(b => b.style.width = calc + 'px');
        pixels.forEach(b => b.style.height = calc + 'px');
        pixels.forEach(b => b.addEventListener('mouseover', () => {
            if (b.style.opacity < 1){
                b.style.opacity -= '-0.1';
            }
        }))
        a++;
    }

    else if(grid === null){
        a++;
    }
}

