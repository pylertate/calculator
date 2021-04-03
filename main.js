const numBtn = document.querySelectorAll(".numBtn");
const screen = document.querySelector("#display");
const operator = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
let display = "";
let a;
let b;
let o;
let result;
let isOperator = false;

numBtn.forEach((button) =>
  button.addEventListener("click", () => {
    if (display.length >= 9) return;
    else display += button.value;
    screen.innerHTML = `${display}`;
  })
);

operator.forEach((button) =>
  button.addEventListener("click", () => {
    switch (isOperator) {
      case (isOperator = false):
        a = display;
        o = button.value;
        display = "";
        screen.innerHTML = display;
        isOperator = true;
        break;
      case (isOperator = true):
        b = display;
        operate(a, b, o);
        screen.innerHTML = result;
        a=result
        display = ""
        o=button.value
        break;
    }
  })
);
clearBtn.addEventListener("click", () => {
  clear();
  a =undefined
  b=undefined
  display=""
  o=undefined
  isOperator=false

});
add = (a, b) => {
  return Number(a) + Number(b);
};
subtract = (a, b) => {
  return a - b;
};
multiply = (a, b) => {
  return a * b;
};
divide = (a, b) => {
  return a / b;
};

operate = (a, b, o) => {
  switch (o) {
    case (o = "+"):
      result = add(a, b);
      break;
    case (o = "-"):
      result = subtract(a, b);
      break;
    case (o = "*"):
      result = multiply(a, b);
      break;
    case (o = "/"):
      result = divide(a, b);
      break;
    case (o="="):
        o=""

    break;
  }
  result = result
  return;
};

clear = () => {
  screen.innerHTML = "";
};
