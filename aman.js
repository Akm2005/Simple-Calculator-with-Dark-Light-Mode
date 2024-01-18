document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.getElementById("buttons");

  buttons.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") {
          handleButtonClick(e.target.innerText);
      }
  });

  function handleButtonClick(value) {
      if (value === "=") {
          calculateResult();
      } else if (value === "C") {
          clearInput();
      } else {
          if (isOperator(value) || isParenthesis(value)) {
              handleOperatorOrParenthesis(value);
          } else {
              appendToInput(value);
          }
      }
  }

  function isOperator(value) {
      return value === '+' || value === '-' || value === 'x' || value === '/' || value === '%';
  }

  function isParenthesis(value) {
      return value === '(' || value === ')';
  }

  function handleOperatorOrParenthesis(operatorOrParenthesis) {
      const lastChar = display.innerText.trim().slice(-1);
      if (isOperator(lastChar) || isParenthesis(lastChar)) {
          display.innerText = display.innerText.slice(0, -1) + operatorOrParenthesis;
      } else {
          appendToInput(operatorOrParenthesis);
      }
  }

  function appendToInput(value) {
      if (display.innerText === "0") {
          display.innerText = value;
      } else {
          display.innerText += value;
      }
  }

  function clearInput() {
      display.innerText = "0";
  }

  function calculateResult() {
      try {
          const result = eval(display.innerText);
          display.innerText = result;
      } catch (error) {
          display.innerText = "Error";
      }
  }
});
let col = document.querySelector('.body');
let val = document.querySelector(".onoff");
let txt = document.querySelector(".i");
let txt1 = document.querySelector(".m");
fun = ()=>{
    
    val.innerHTML = 'on';
    txt.style.color = 'red';
    txt1.style.color = 'red';
    col.style.backgroundColor = 'black';
    
}
fun1 =()=>{
    val.innerHTML = 'off';
    txt.style.color = 'black';
    txt1.style.color = 'black';
    col.style.backgroundColor = 'rgb(202, 237, 202)';
}
let currentState = 'a';

function handleClick() {
  if (currentState === 'a') {
    // Call function 'fun'
    fun();
    // Switch state to 'b'
    currentState = 'b';
  } else if (currentState === 'b') {
    // Call function 'fun1'
    fun1();
    // Switch state to 'a'
    currentState = 'a';
  }
}