const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
   event.preventDefault();

   const { email, password } = event.currentTarget.elements;

   const data = {
        email: email.value,
        password: password.value
   }
   console.log(data)

   if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
   }

   event.currentTarget.reset();
}