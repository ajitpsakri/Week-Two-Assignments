const drawerChilds = document.querySelectorAll(".row");

const removeClass = (className) => {
    [...drawerChilds].map(item => {
        item.classList.remove(className)
    })
}

[...drawerChilds].map(item => {
    item.addEventListener('click', function () {
        removeClass('on-select-style')
        item.classList.add('on-select-style')
    })
})