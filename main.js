// get every digit to display on input
// add event
let calculator = document.querySelector("section#calculator");
let outputElement = document.querySelector("section#calculator input");

function displayDigit(number, output) {
  output.value += number;
}

function addEventListener(element, eventType) {
  element.addEventListener(eventType, (event) => {
    if (event.target.className.includes("digit")){
      displayDigit(event.target.textContent, outputElement);
    }
  });
}

addEventListener(calculator, "click");