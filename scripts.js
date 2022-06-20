

var squareCreate = document.createDocumentFragment();
for (var i=0; i < 256; i++) {
    var newDiv = document.createElement('div');
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


/*square0.addEventListener("mouseover", function() {
    this.style.backgroundColor = 'black';
});

function changeColor() {
    this.style.backgroundColor = 'black';
} */