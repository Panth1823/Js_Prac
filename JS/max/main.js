let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

function max(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

let result = max(num1, num2);

document.getElementById("output").innerHTML = `Number 1: ${num1}<br>Number 2: ${num2}<br>Result: ${result}`;
