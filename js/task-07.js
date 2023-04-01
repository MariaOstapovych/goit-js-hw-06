const control = document.querySelector("#font-size-control");
console.log(control);

const textEl = document.querySelector("#text");

const step = control.setAttribute("step", 1);

control.addEventListener("input", onInput);

function onInput (event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
}