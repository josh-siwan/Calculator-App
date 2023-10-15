let arr = []
let operationType = ""

function myNumber(value) {
    
    document.getElementById("display").innerText  = document.getElementById("display").innerText + " " + value
    console.log(value)
    arr.push(value)

}

function myOperator(operator) {
    switch(operator) {
        case '+':
            document.getElementById("display").innerText =  document.getElementById("display").innerText + " " + operator
            operationType = operator
        break
        case '-':
            document.getElementById("display").innerText =  document.getElementById("display").innerText + " " + operator
            operationType = operator
        break
        case '*':
            document.getElementById("display").innerText =  document.getElementById("display").innerText + " " + operator
            operationType = operator
        break
        case '/':
            document.getElementById("display").innerText =  document.getElementById("display").innerText + " " + operator
            operationType = operator
        break
    }
}

function equate () {
    switch(operationType) {
        case '+':
            document.getElementById("display").innerText =  arr[0] + arr[1]
            
        break
        case '-':
            document.getElementById("display").innerText =  arr[0] - arr[1]
        
        break
        case '*':
            document.getElementById("display").innerText =  arr[0] * arr[1]
           
        break
        case '/':
            document.getElementById("display").innerText =  arr[0] / arr[1]
           
        break
    }

}