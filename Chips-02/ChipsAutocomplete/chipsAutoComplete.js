// || Declarations
const inputContainer = document.querySelector(".chips-autocomplete");
const input = document.querySelector(".input-favoirite-fruits");
const unorderedChipList = document.querySelector(".chip-items");
const chipsItemsArr = [];
let chipsExist = false;

// || Utility function
const renderChips = (chipArr) => {
    chipArr.map((item) => {
        unorderedChipList.innerHTML += ` <li>${item}<i class="remove-chips fa fa-times" aria-hidden="true"></i></li>`;
    });
    console.log(`successfuly rendered ${chipArr.length} chip items`);
};
const setPropertyStyle = (property, value) => {
    inputContainer.style.setProperty(property, value);
};
// || Event handlers

input.addEventListener("focus", function () {
    setPropertyStyle("--after-variable", "var(--third)");
});
input.addEventListener("focusout", function () {
    setPropertyStyle("--after-variable", "var(--secondary)");
});
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 188) {
        if (!/^,+/.test(input.value) && input.value !== "") {
            input.value = input.value.replace(/,/g, "");
            chipsItemsArr.push(input.value);
            unorderedChipList.innerHTML = ""; //reset, as everytime an element is added to chipsItemsArr array then unorderedChipList is rendered from scrach
            renderChips(chipsItemsArr);
            input.value = ""; //reset so that next element should not include the previous one + user shouldn't remove input text manually
            chipsExist = true;
        }
    }
    if (chipsExist) {
        let removeChip = document.querySelectorAll(".remove-chips");
        for (let i = 0; i < removeChip.length; i++) {
            removeChip[i].addEventListener("click", function () {
                chipsItemsArr.pop();
                unorderedChipList.innerHTML = "";
                console.log(chipsItemsArr);
                renderChips(chipsItemsArr);
            });
        }
    }
});
