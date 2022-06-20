

var squareCreate = document.createDocumentFragment();
for (var i=0; i < 256; i++) {
    var newDiv = document.createElement('div');
    newDiv.id = 'square'+i;
    newDiv.className = 'etchSquare';
    squareCreate.appendChild(newDiv);
}

gridContainer.appendChild(squareCreate);