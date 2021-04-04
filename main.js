const numBtn = document.querySelectorAll(".numBtn");
const screen = document.querySelector("#display");
const operator = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");
const periodBtn = document.querySelector("#period");
const negPosBtn = document.querySelector(".negPos");
const percentBtn = document.querySelector(".percent")
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
        screen.innerHTML = 0;
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
negPosBtn.addEventListener("click", (newNum) => {
  newNum = negPos(display);
  if(newNum.toString().length>=9){
      return
  }
  display = newNum;
  screen.innerHTML = display;
  return;
});
percentBtn.addEventListener("click", ()=>{
    if (display.toString().length>=9) return;
    else
    display = display / 100;
    screen.innerHTML = display
    return;
})
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
  if (result > 999999999 || result < -99999999) result = "ERROR";
  if (result.toString().length > 9) {
    result = decimal(result);
  }

  return result;
};
decimal = (result) => {
  result = result.toString().slice(0, 9);
  return result;
};
clear = () => {
  screen.innerHTML = "";
};
negPos = (display) => {
  display = display.toString();
  if (Number(display) > 0) {
    display = "-" + display;
    return display;
  }
  if (Number(display) < 0) {
    display = display.toString().slice(1);
    return display;
  }
  return display;
};
