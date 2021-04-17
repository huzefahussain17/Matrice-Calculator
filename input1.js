
var matCalType = document.getElementById("matrixCalType")
var FirstMatRow = document.getElementById("FirstMatRow");
var FirstMatCol = document.getElementById("FirstMatCol");
var result = document.getElementById("result");
// 
var inputdeterminant;
var inputtranspose;
var inputinverse;
var inputAddscalar;
var inputMulMatWithScalar;
// 
var FirstMatRow;
var FirstMatCol;
// 
var list = [matCalType]
list.forEach((e, index) => {
    e.addEventListener('click', () => {
        inputdeterminant = matCalType[1].textContent = "Find determinant of the matrix"
        inputtranspose = matCalType[2].textContent = "Find transpose of the matrix"
        inputinverse = matCalType[3].textContent = "Find the inverse of the matrix"
        inputAddscalar = matCalType[4].textContent = "Add a scalar to matrix"
        inputMulMatWithScalar = matCalType[5].textContent = "Multiply the matrix with a scalar"
    });


})


function cal() {

    var matrixExecuteValues = []
    var inputList = [];
    var chunkList = [];
    if (FirstMatCol.value > 5 || FirstMatRow.value > 5) {
        return alert("Rows and Column could not be greater than 5")
    }
    var chunk = FirstMatRow.value
    console.log(chunk)
    var i = 0;
    do {
        var inp = document.createElement("input");
        var att = document.createAttribute("id");
        att.value = "InputValue";
        inp.placeholder = "EnterMatrixInput";
        inp.setAttributeNode(att);
        inp.type = "number";
        console.log(inp)
        inputList.push(inp)

        // 

        document.body.appendChild(inp);

        i++;
    }
    while (i < FirstMatRow.value * FirstMatCol.value);
    var button = document.createElement('button');
    button.innerHTML = 'Add';
    button.onclick = function () {
        inputList.forEach((e, index) => {
            matrixExecuteValues.push(parseInt(e.value))
        })
        console.log(matrixExecuteValues, "81")
        while (matrixExecuteValues.length) {
            const chunk = matrixExecuteValues.splice(0, FirstMatCol.value);
            console.log(chunk, "Chunkkkk")
            chunkList.push(chunk);
        }
        if (matCalType.value == "Find determinant of the matrix") {
            try {
                var determinant = math.det(chunkList)
                console.log(determinant, "Result")
                document.getElementById("result").innerHTML = determinant
            }
            catch {
                alert("Dimension mismatch")
            }
        }
        if (matCalType.value == "Find transpose of the matrix") {
            try {
                var transpose = math.transpose(chunkList)
                console.log(transpose);
                printArray(transpose)
            }
            catch {
                alert("Dimension mismatch")
            }
        }
        if (matCalType.value == "Find the inverse of the matrix") {
            try {
                var inverse = math.inv(chunkList);
                printArray(inverse)
            }
            catch {
                alert("Dimension mismatch")
            }


        }
        if (matCalType.value == "Add a scalar to matrix") {
            try {
                if (FirstMatRow.value == 2) {
                    console.log(math.add([[2, 0], [0, 2]], chunkList))
                    var add2 = math.add([[2, 0], [0, 2]], chunkList);
                    printArray(add2)

                }
                if (FirstMatRow.value == 3) {
                    console.log(math.add([[3, 0, 0], [0, 3, 0], [0, 0, 3]], chunkList))
                    var add3 = math.add([[3, 0, 0], [0, 3, 0], [0, 0, 3]], chunkList);
                    printArray(add3)
                }
                if (FirstMatRow.value == 4) {
                    console.log(math.add([[4, 0, 0, 0], [0, 4, 0, 0], [0, 0, 4, 0], [0, 0, 0, 4]], chunkList))
                    var add4 = math.add([[4, 0, 0, 0], [0, 4, 0, 0], [0, 0, 4, 0], [0, 0, 0, 4]], chunkList)
                    printArray(add4)
                }
                if (FirstMatRow.value == 5) {
                    console.log(math.add([[5, 0, 0, 0, 0], [0, 5, 0, 0, 0], [0, 0, 5, 0, 0], [0, 0, 0, 5, 0], [0, 0, 0, 0, 5]], chunkList))
                    var add5 = math.add([[5, 0, 0, 0, 0], [0, 5, 0, 0, 0], [0, 0, 5, 0, 0], [0, 0, 0, 5, 0], [0, 0, 0, 0, 5]], chunkList)
                    printArray(add5)
                }
            }
            catch {
                alert("Dimension mismatch")
            }
        }
        if (matCalType.value == "Multiply the matrix with a scalar") {
            try {
                if (FirstMatRow.value == 2) {
                    console.log(math.multiply([[2, 0], [0, 2]], chunkList))
                    var mul2 = math.multiply([[2, 0], [0, 2]], chunkList)
                    printArray(mul2)

                }
                if (FirstMatRow.value == 3) {
                    console.log(math.multiply([[3, 0, 0], [0, 3, 0], [0, 0, 3]], chunkList))
                    var mul3 = math.multiply([[3, 0, 0], [0, 3, 0], [0, 0, 3]], chunkList)
                    printArray(mul3)
                }
                if (FirstMatRow.value == 4) {
                    console.log(math.multiply([[4, 0, 0, 0], [0, 4, 0, 0], [0, 0, 4, 0], [0, 0, 0, 4]], chunkList))
                    var mul4 = math.multiply([[4, 0, 0, 0], [0, 4, 0, 0], [0, 0, 4, 0], [0, 0, 0, 4]], chunkList)
                    printArray(mul4)
                }
                if (FirstMatRow.value == 5) {
                    console.log(math.multiply([[5, 0, 0, 0, 0], [0, 5, 0, 0, 0], [0, 0, 5, 0, 0], [0, 0, 0, 5, 0], [0, 0, 0, 0, 5]], chunkList))
                    var mul5 = math.multiply([[5, 0, 0, 0, 0], [0, 5, 0, 0, 0], [0, 0, 5, 0, 0], [0, 0, 0, 5, 0], [0, 0, 0, 0, 5]], chunkList)
                    printArray(mul5)
                }
            }
            catch {
                alert("Dimension mismatch")
            }
        }
    };
    document.body.appendChild(button);

}

function printArray(inp) {
    inp.forEach((i, index) => {
        var inp = document.createElement("p");
        inp.textContent = i
        console.log(inp)
        document.body.appendChild(inp);
    })
}


