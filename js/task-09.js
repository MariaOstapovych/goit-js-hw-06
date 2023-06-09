const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const color = document.querySelector(".color");

buttonEl.addEventListener("click", onButtonClick); 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
}


function onButtonClick(event) {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
}



