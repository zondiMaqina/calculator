// get every digit to display on input
// add event
const calculator = document.querySelector("section#calculator");
const outputElement = document.querySelector("section#calculator input");

let num1;
let num2;
let total;

function displayDigit(number, output) {
  output.value += number;
}

function clearData(output) {
  output.value = "";
  num1, num2, total = undefined;
}

function removeDigit(){
  outputElement.value = outputElement.value.slice(0, -1);
}

function addEventListener(element, eventType) {
  element.addEventListener(eventType, (event) => {
    if (event.target.className.includes("digit")){
      displayDigit(event.target.textContent, outputElement);
    } else if (event.target.className.includes("clear")){
      clearData(outputElement);
    } else if (event.target.className.includes("delete")){
      removeDigit();
    }
  });
}

addEventListener(calculator, "click");