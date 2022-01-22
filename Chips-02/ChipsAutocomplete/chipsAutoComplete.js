const inputContainer = document.querySelector(".chips-autocomplete");
const input = document.querySelector(".input-favoirite-fruits");

input.addEventListener('focus', function () {
    inputContainer.style.setProperty("--after-variable", 'var(--third)')
})
input.addEventListener('focusout', function () {
    inputContainer.style.setProperty("--after-variable", 'var(--secondary)')
})
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 || event.keyCode === 188) {
        //input.value !== "" then {
        //create ::before psedo element and assign content: "input.value"

        // }
    }
})