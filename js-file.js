const mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'container');
document.body.appendChild(mainDiv);
const childDiv = document.createElement('div');

for (let i = 1; i <= 256; i++){
    let pixel = mainDiv.appendChild(childDiv.cloneNode(true));
}

const divs = document.querySelectorAll("#container div");
divs.forEach(divs => divs.addEventListener('mouseover', () => {
    divs.classList.add('color');
}))

