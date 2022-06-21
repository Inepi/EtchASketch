
window.addEventListener('load', () => {
    createSquares(16);
    squareDarken();
});

/* document.addEventListener('DOMContentLoaded', () => {
    createSquares(16);
    squareDarken();
}); */

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
    cleanUp();
    resizeGrid(numSquares);
    createSquares(numSquares);
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
        square.className = ('blackSquare');
    });
});
}

function squareLighten () {
    const squares = document.querySelectorAll("div.blackSquare")
    squares.forEach((square) => {
    square.className = 'etchSquare'
});
}

function cleanUp () {
    const destroy = document.querySelector("#gridContainer")
    let square = destroy.lastElementChild;
    while (square) {
        destroy.removeChild(square);
        square = destroy.lastElementChild;
    }
}

/*square0.addEventListener("mouseover", function() {
    this.style.backgroundColor = 'black';
});

function changeColor() {
    this.style.backgroundColor = 'black';
} */ 