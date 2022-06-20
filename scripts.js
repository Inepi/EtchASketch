
document.addEventListener('DOMContentLoaded', () => {
    createSquares(16);
    squareDarken();
});

function createSquares(squaresPerSide) {
    squaresPerSide *= squaresPerSide;
    const squareCreate = document.createDocumentFragment();
    for (i=0; i < squaresPerSide; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = 'square'+i;
    newDiv.className = 'etchSquare';
    squareCreate.appendChild(newDiv);
}
    gridContainer.appendChild(squareCreate);
}

const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener('click', () => {
    let numSquares = parseInt(prompt("How many squares in a row?"));
    if (numSquares > 100) {
        alert('Please enter a value under 100!')
    }
    else if (numSquares <= 100) {
    resizeGrid(numSquares);
    createSquares(numSquares);
    squareLighten();
    squareDarken();
    }
});

function resizeGrid(squaresPerSide) {
    document.getElementById("gridContainer").style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`
    document.getElementById("gridContainer").style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`
}

function squareDarken () {
const squares = document.querySelectorAll("div.etchSquare")
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor= 'black';
    });
});
}

function squareLighten () {
    const squares = document.querySelectorAll("div.etchSquare")
    squares.forEach((square) => {
    square.style.backgroundColor = 'blue';
});
}


/*square0.addEventListener("mouseover", function() {
    this.style.backgroundColor = 'black';
});

function changeColor() {
    this.style.backgroundColor = 'black';
} */