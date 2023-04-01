const textInput = document.querySelector("#validation-input");


textInput.addEventListener("blur", () => {
    if (textInput.value.length === 6) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
})