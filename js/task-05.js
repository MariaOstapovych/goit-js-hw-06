const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
console.dir(spanEl);

inputEl.addEventListener("input", (event) => {
    if (inputEl.value === "") {
        spanEl.textContent = "Anonymous";
    } else {
        spanEl.textContent = event.currentTarget.value;
    }
})

