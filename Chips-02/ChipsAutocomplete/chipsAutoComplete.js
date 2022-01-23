// || Declarations
const inputContainer = document.querySelector(".chips-autocomplete");
const input = document.querySelector(".input-favoirite-fruits");
const unorderedChipList = document.querySelector(".chip-items");
let chipsExist = false;
// || Utility function
const createLiElement = () => {
    let list = document.createElement('li')
    list.innerHTML = `${input.value}<i class="remove-chips fa fa-times" aria-hidden="true"></i>`
    unorderedChipList.appendChild(list)
    input.value = ""; //reset so that next element should not include the previous one + user shouldn't remove input text manually
    chipsExist = true;
}
const setPropertyStyle = (property, value) => {
    inputContainer.style.setProperty(property, value);
};
const removeChipInit = () => {
    let removeChip = document.querySelectorAll(".remove-chips");
    for (let i = 0; i < removeChip.length; i++) {
        removeChip[i].addEventListener("click", function () {
            removeChip[i].parentElement.remove()
        });
    }
}
// || Event handlers
input.addEventListener("focus", function () {
    setPropertyStyle("--after-variable", "var(--third)");
});
input.addEventListener("focusout", function () {
    setPropertyStyle("--after-variable", "var(--secondary)");
});
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 && input.value !== "") {
        //Enter button is pressed on the keyboard
        createLiElement()
    }
    if (chipsExist) {
        removeChipInit()
    }
});
