window.addEventListener("load", function () {
    let container_items = document.querySelector("#natural_container_items")

    let roll = document.querySelector("#roll")

    roll.addEventListener("click", function () {
        if (container_items.classList.contains("roll")) {
            roll.innerText = "Крутить"
        } else {
            roll.innerText = "Сбросить"
        }

        container_items.classList.toggle("roll")
    })
})