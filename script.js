const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  switch (operator) {
    case "sum":
      return add(num1, num2);
    case "subtraction":
      return subtract(num1, num2);
    case "multiplication":
      return multiply(num1, num2);
    case "division":
      return divide(num1, num2);
  }
};
const clear = () => {
  operador1 = 0;
  operador2 = 0;
  operacion = null;
  calcDisplay.innerText = operador1
}
let operador1;
let operador2;
let operacion;

const calcDisplay = document.getElementById("calcDisplay");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.cancelBubble
    if(button.id >= 0) {
      if(operador1 == undefined || operador1 == 0) {
        operador1 = button.id
        console.log("operador1 " + operador1);
        calcDisplay.innerText = operador1
      } else {
        operador2 = button.id
        console.log("operador2 " + operador2);
        calcDisplay.innerText = operador2
      }
    } else if(button.id == "clear") {
      console.log("clear");
      clear();
    } else if (button.id == "enter"){
      if (operador1 && operador2 && operacion) {
        console.log(operate(operador1, operador2, operacion))
        calcDisplay.innerText = operate(operador1, operador2, operacion)
      }
    } else {
      operacion = button.id
      console.log(operacion);
    }
  });
});
