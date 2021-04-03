const numBtn = document.querySelectorAll(".numBtn");
const screen = document.querySelector("#display");
const operator = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
let equalBtn = document.querySelector("#equals");
let periodBtn = document.querySelector("#period");
let display = "";
let a;
let b;
let o;
let result;
let isOperator = false;
let isPeriod = false;

numBtn.forEach((button) =>
  button.addEventListener("click", () => {
    if (display.length >= 9) return;
    else display += button.value;
    screen.innerHTML = display;
  })
);

operator.forEach((button) =>
  button.addEventListener("click", () => {
    switch (isOperator) {
      case (isOperator = false):
        a = display;
        o = button.value;
        console.log(o);
        display = "";
        screen.innerHTML = display;
        isOperator = true;
        isPeriod = false;
        break;
      case (isOperator = true):
        b = display;
        operate(a, b, o);
        screen.innerHTML = result;
        a = result;
        b = "";
        display = "";
        o = button.value;
        isPeriod = false;
        break;
    }
  })
);

clearBtn.addEventListener("click", () => {
  clear();
  a = undefined;
  b = undefined;
  o = undefined;
  isOperator = false;
  screen.innerHTML = 0;
  display = "";
  isPeriod = false;
});

equalBtn.addEventListener("click", () => {
  b = display;
  operate(a, b, o);
  screen.innerHTML = result;
  a = result;
  b = "";
  display = "";
  isPeriod = false;
  return;
});
periodBtn.addEventListener("click", () => {
  switch (isPeriod) {
    case (isPeriod = false):
      display = display + ".";
      isPeriod = true;
      screen.innerHTML = display;
      console.log("it works");
      break;
    case (isPeriod = true):
      break;
  }
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
  if (b == 0) return "pain";
  else return a / b;
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
    case (o = "÷"):
      result = divide(a, b);
      break;
  }
  if (result> 999999999) result = "error";
  if (result.toString().length>9){
      decimal(result)
  }
  
  else return result;

  return;
};

clear = () => {
  screen.innerHTML = "";
};
