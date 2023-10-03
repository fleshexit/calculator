
let inputBuffer = "";
let isResultDisplayed = false;

let operandA;
let operandB;
let currentOperator;

const numberButtons = document.querySelectorAll(".number");
const dotButton = document.getElementById("decimal");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equals");
const eraseButton = document.getElementById("backspace");
const clearButton = document.getElementById("clear");
const screenDisplay = document.querySelector(".screen");

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isResultDisplayed) {
      inputBuffer = "";
      isResultDisplayed = false;
    }
    inputBuffer += e.target.textContent;
    updateDisplay(inputBuffer);
  });
});

dotButton.addEventListener("click", (e) => {
  if (!inputBuffer.includes(".") && inputBuffer !== "") {
    inputBuffer += e.target.textContent;
    updateDisplay(inputBuffer);
  }
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    operandA = Number(inputBuffer);
    inputBuffer = "";
    currentOperator = e.target.textContent;
    updateDisplay(currentOperator);
  });
});

equalButton.addEventListener("click", () => {
  operandB = Number(inputBuffer);
  const result = operate(currentOperator, operandA, operandB);
  updateDisplay(result);
  inputBuffer = result.toString();
  isResultDisplayed = true;
});

eraseButton.addEventListener("click", () => {
  if (inputBuffer !== "") {
    inputBuffer = inputBuffer.slice(0, -1);
    updateDisplay(inputBuffer);
  }
});

clearButton.addEventListener("click", () => {
  inputBuffer = "";
  updateDisplay(inputBuffer);
});


function updateDisplay(content) {
  screenDisplay.textContent = content;
}
