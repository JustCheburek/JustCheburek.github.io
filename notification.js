function clear_notification() {
    notification.classList.remove("active")
    notification.textContent = ""
}

function show_notification(text, clear=6000) {
    if (notification.textContent === text) {
        clearTimeout(timeout)
        setTimeout(clear_notification, clear)
        return
    }

    if (notification.textContent !== "") {
        clear_notification()
        clearTimeout(timeout)
    }

    notification.textContent = text
    notification.classList.add("active")

    timeout = setTimeout(clear_notification, clear)
}

const notification = document.querySelector("#notification")
let timeout