"use strict";
const container = document.querySelector(".grid-holder");
const changeGridSizeBtn = document.querySelector("button");
let numOfSquaresInRow = 16;

const addEventListenersToGridElements = function () {
  const gridElementsList = document.querySelectorAll(".grid-element");
  gridElementsList.forEach((el) => {
    [];
    el.addEventListener("mouseover", (e) => {
      //   if (e.buttons === 1) {
      //     el.classList.add("red-background");
      // }
      if (el.style.backgroundColor === "") {
        el.style.backgroundColor = randomBgColor();
      }

      const opacityOld = +el.style.opacity;
      const opacityNew = opacityOld + 0.1;
      el.style.opacity = opacityNew;
    });
  });
};

function randomBgColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

changeGridSizeBtn.addEventListener("click", (e) => {
  numOfSquaresInRow = +window.prompt("How many squares in row you want");
  while (numOfSquaresInRow > 100 || isNaN(numOfSquaresInRow)) {
    numOfSquaresInRow = +window.prompt("Please enter number smaller then 100");
  }
  if (numOfSquaresInRow) {
    createGrid(numOfSquaresInRow);
  }
});

const createGrid = function (numOfSquaresPerRow) {
  container.textContent = "";

  for (let i = 0; i < numOfSquaresInRow * numOfSquaresInRow; i++) {
    const gridElement = document.createElement("div");

    gridElement.classList.add("grid-element");
    gridElement.style.width = `calc(600px / ${numOfSquaresInRow})`;
    gridElement.style.height = `calc(600px / ${numOfSquaresInRow})`;

    container.appendChild(gridElement);
  }
  addEventListenersToGridElements();
};

createGrid(numOfSquaresInRow);
