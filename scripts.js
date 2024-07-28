function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = sum(num1, num2);
      break;
    case "-":
      result = substract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  return result;
}

const buttons = document.querySelector(".Rows");
const viewScreen = document.querySelector(".viewScreen");

let num1 = 0;
let num2 = 0;
let operator = "";
let counting = false;

buttons.addEventListener("click", (event) => {
  let target = event.target;
  if(viewScreen.textContent == "ERROR"){
    viewScreen.textContent = "";
  }
  switch (target.className) {
    case "numbers":
      if (counting) {
        viewScreen.textContent = "";
        counting = false;
      }
      if (viewScreen.textContent.length < 15) {
        viewScreen.textContent += target.textContent;
      }
      break;
    case "operators":
      counting = true;
      if (num1 && !num2 && !operator) {
        num1 = viewScreen.textContent;
        operator = target.textContent;
        viewScreen.textContent = "";

      }
      else if (!num1 && !num2 && !operator) {
        num1 = viewScreen.textContent;
        operator = target.textContent;
        viewScreen.textContent = "";
      }
      else if (num1 && !num2 && operator) {
        num2 = viewScreen.textContent;
        viewScreen.textContent = operate(parseFloat(num1), parseFloat(num2), operator);
        num1 = viewScreen.textContent;
        num2 = 0;
        operator = target.textContent;
      }
      break;
    case "equal":
      if ((num1 && !num2 && operator)) {
        num2 = viewScreen.textContent;
        viewScreen.textContent = operate(parseFloat(num1), parseFloat(num2), operator);
        num1 = viewScreen.textContent;
        num2 = 0;
        operator = "";
      }
      break;
    case "goldenThree":
      let current = viewScreen.textContent;
      switch (target.id) {
        case "AC":
          num1 = 0;
          num2 = 0;
          viewScreen.textContent = "";
          break;
        case "signChange":
          current = viewScreen.textContent;
          current = parseFloat(current) * -1;
          viewScreen.textContent = current;
          break;
        case "percent":
          current = viewScreen.textContent;
          current *= 0.01;
          viewScreen.textContent = current;
          break;
      }
  }
  if (viewScreen.textContent.length > 15) {
    if(viewScreen.textContent.includes("e")){
      viewScreen.textContent = "ERROR";
    }
    viewScreen.textContent = viewScreen.textContent.substring(0,15);
  }
})
