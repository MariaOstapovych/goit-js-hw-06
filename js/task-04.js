
const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

const value = document.querySelector("#value");

let counterValue = 0; 

decrement.addEventListener("click", onDecrementClick);
increment.addEventListener("click", onIncrementClick);


function onDecrementClick(event) {
    for (let i = 0; i <= 1; i += 1) {
        counterValue -= i;
        value.textContent = counterValue
    }
}


function onIncrementClick(event) {
    for (let i = 0; i <= 1; i += 1) {
        counterValue += i;
        value.textContent = counterValue
    }
}