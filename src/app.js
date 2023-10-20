/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const sign = ["♦", "♠", "♥", "♣"];
const color = ["red", "black", "red", "black"];
const number = document.querySelector("#number");
const signTop = document.querySelector("#signTop");
const signBottom = document.querySelector("#signBottom");
const btn = document.querySelector("#btn");

//random select one number
function pickNumber() {
  let number = Math.floor(Math.random() * 11 + 1);
  return number;
}

//random select one of the element
function pickSign() {
  let i = Math.floor(Math.random() * 4);
  return i;
}

window.onload = function() {
  generateCard();
};

const generateCard = () => {
  const i = pickSign();

  number.innerHTML = pickNumber();
  signTop.innerHTML = sign[i];
  signTop.className = `sign ${color[i]}`;

  signBottom.innerHTML = sign[i];
  signBottom.className = `sign ${color[i]}`;
};

/// add events
btn.addEventListener("click", generateCard);
