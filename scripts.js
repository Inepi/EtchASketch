

const squareCreate = document.createDocumentFragment();
for (i=0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = 'square'+i;
    newDiv.className = 'etchSquare';
    squareCreate.appendChild(newDiv);
}

gridContainer.appendChild(squareCreate);

const squares = document.querySelectorAll("div.etchSquare")
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
});


const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener('click', () => {
    resizeGrid();
});

function resizeGrid() {
    document.getElementById("gridContainer").style.gridTemplateColumns = "repeat(17, 1fr)";
    document.getElementById("gridContainer").style.gridTemplateRows = "repeat(17, 1fr)";
}


/*square0.addEventListener("mouseover", function() {
    this.style.backgroundColor = 'black';
});

function changeColor() {
    this.style.backgroundColor = 'black';
} */