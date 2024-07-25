function sum(a,b){
  return a + b;
}

function substract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(num1, num2, operator){
  switch(operator){
    case "+":
      sum(num1, num2);
      break;
    case "-":
      substract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}