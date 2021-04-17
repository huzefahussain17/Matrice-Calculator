
console.log("Hello")
var matCalType = document.getElementById("matrixCalType")
console.log(matCalType)
var FirstMatRow = document.getElementById("FirstMatRow");
var FirstMatCol = document.getElementById("FirstMatCol");
var SecondMatRow = document.getElementById("SecondMatRow");
var SecondMatCol = document.getElementById("SecondMatCol");
var result = document.getElementById("result");
// 
var inputMulFisrtMatWithSecond;
var inputMulSecondMatWithFirst;
var inputAddMatrix;
var inputSubFirstmatWithSec;
var inputSubSecondMatWithFirst;
//  
var list = [matCalType]
list.forEach((e, index) => {
    e.addEventListener('click', () => {
        inputMulFisrtMatWithSecond = matCalType[1].textContent = "Multiply the first matrix with the second"
        inputMulSecondMatWithFirst = matCalType[2].textContent = "Multiply the second matrix with first"
        inputAddMatrix = matCalType[3].textContent = "Add both matrices"
        inputSubFirstmatWithSec = matCalType[4].textContent = "Subtract the first matrix from second"
        inputSubSecondMatWithFirst = matCalType[5].textContent = "Subtract the second matrix from the first"
    });


})


function cal() {
    console.log(matCalType.value)
    var FirstMatExecutionValue = []
    var FirstinputList = [];
    var FirstMatChunkList = [];
    if (FirstMatCol.value > 5 || FirstMatRow.value > 5 || SecondMatRow.value > 5 || SecondMatCol.value > 5) {
        return alert("Rows and Column could not be greater than 5")
    }
    console.log(FirstMatRow.value)
    var chunk = FirstMatRow.value
    console.log(chunk, "FirstMatChunk")
    //   document.getElementById("FirstMat").innerHTML="FirstMatrix"
    var i = 0;
    do {
        var inp = document.createElement("input");
        var att = document.createAttribute("id");
        att.value = "InputValue";
        inp.placeholder = "FirstMatValue";
        inp.setAttributeNode(att);
        inp.type = "number";
        console.log(inp)
        FirstinputList.push(inp)

        // 

        document.body.appendChild(inp);

        i++;
    }
    while (i < FirstMatRow.value * FirstMatCol.value);
    //    Second Matrix
    var SecondMatInputList = []
    var SecondMatExecutionValue = []
    var SecondMatChunkList = []
    var i = 0;
    do {
        var inp = document.createElement("input");
        var att = document.createAttribute("id");
        att.value = "InputValue";
        inp.placeholder = "SecondMatValue";
        inp.setAttributeNode(att);
        inp.type = "number";
        console.log(inp)
        SecondMatInputList.push(inp)

        // 

        document.body.appendChild(inp);

        i++;
    }
    while (i < SecondMatRow.value * SecondMatCol.value);
    var button = document.createElement('button');
    button.innerHTML = 'Add';
    button.onclick = function () {
        FirstinputList.forEach((e, index) => {
            FirstMatExecutionValue.push(parseInt(e.value))
        })
        console.log(FirstMatExecutionValue, "81")
        while (FirstMatExecutionValue.length) {
            const chunk = FirstMatExecutionValue.splice(0, FirstMatCol.value);
            console.log(chunk, "Chunkkkk")
            FirstMatChunkList.push(chunk);
        }
        console.log(FirstMatChunkList[0][0], "FirstChunkzero")

        //   Second Mat

        SecondMatInputList.forEach((e, index) => {
            SecondMatExecutionValue.push(parseInt(e.value))
        })
        console.log(SecondMatExecutionValue, "81")
        while (SecondMatExecutionValue.length) {
            const chunk = SecondMatExecutionValue.splice(0, SecondMatCol.value);
            console.log(chunk, "Chunkkkk")
            SecondMatChunkList.push(chunk);
        }
        console.log(SecondMatChunkList, "SecondChunkList")
        if (matCalType.value == "Multiply the first matrix with the second") {
            try {
                console.log(math.multiply(FirstMatChunkList, SecondMatChunkList))
                var mulFS = math.multiply(FirstMatChunkList, SecondMatChunkList);
                printArray(mulFS)
            }
            catch {
                alert("Dimension mismatch Error")
            }

        }
        if (matCalType.value == "Multiply the second matrix with first") {
            try {
                console.log(math.multiply(SecondMatChunkList, FirstMatChunkList))
                var mulSF = math.multiply(SecondMatChunkList, FirstMatChunkList)
                printArray(mulSF)
            }
            catch {
                alert("Dimension mismatch Error")
            }
        }
        if (matCalType.value == "Add both matrices") {
            try {
                console.log(math.add(FirstMatChunkList, SecondMatChunkList))
                var addFS = math.add(FirstMatChunkList, SecondMatChunkList)
                printArray(addFS)
            }
            catch {
                alert("Dimension mismatch Error")
            }

        }
        if (matCalType.value == "Subtract the first matrix from second") {
            try {
                console.log(math.subtract(FirstMatChunkList, SecondMatChunkList))
                var subFS = math.subtract(FirstMatChunkList, SecondMatChunkList);
                printArray(subFS)
            }
            catch {
                alert("Dimension mismatch Error")
            }
        }
        if (matCalType.value == "Subtract the second matrix from the first") {
            try {
                console.log(math.subtract(SecondMatChunkList, FirstMatChunkList))
                var subSf = math.subtract(SecondMatChunkList, FirstMatChunkList);
                printArray(subSf)
            }
            catch {
                alert("Dimension mismatch Error")
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