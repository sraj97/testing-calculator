/* User inputs number one */
/* user selects operator */
/* user inputs number two */
// if + selected 
    // add two numbers
// if - selected
    // minus second number from first number
// if * selected
    // mutliply number one and two
// if / selected
    // divide number one by bumber two
// display answer on page

// const firstNumInput = document.querySelector("#firstNumber");
// const secondNumInput = document.querySelector("#secondNumber");
// const operatorsInput = document.querySelector("#operator");
// const button = document.querySelector("#submit");
// const div = document.querySelector("#answer");

// button.addEventListener("click", () => {
//     const firstNumber = Number(firstNumInput.value);
//     const secondNumber = Number(secondNumInput.value);
//     const operator = operatorsInput.value;
//     const answer = calculate(firstNumber, operator, secondNumber);
//     div.innerHTML = answer;
//     return;
// });

module.exports = calculate = (firstNumber, operator, secondNumber) => {
    switch (operator) {
        case "+": return firstNumber + secondNumber;
        case "-": return firstNumber - secondNumber;
        case "/": return firstNumber / secondNumber;
        case "*": return firstNumber * secondNumber;
        case "^2": return firstNumber * firstNumber;
        case "square root": return Math.sqrt(firstNumber);
    }
    return "No number";
}
