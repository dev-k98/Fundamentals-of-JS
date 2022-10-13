"use strict";

//------------------------------- Lecture 70 - Dom
const randomNumber = function () {
  return Math.floor(Math.random() * 20 + 1);
};

document.querySelector(".button").addEventListener("click", function () {
  const number = randomNumber();
  const guess = Number(document.querySelector(".guess").value);
  if (guess === number) {
		document.querySelector(".status").textContent = "Correct Answer. Hurray!";
  } else if (guess < number) {
    document.querySelector(".status").textContent = "too less...";
  } else {
    document.querySelector(".status").textContent = "too high...";
  }
});
