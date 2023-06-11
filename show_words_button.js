function show_words() {
    let button = document.querySelector('#show_words_button')
    let words = document.querySelectorAll('.hide_words')
    let stars = document.querySelectorAll('.hide_stars')

    if (button.textContent === "Отобразить выражения") {
        button.innerHTML = "Скрыть выражения"
    } else {
        button.innerHTML = "Отобразить выражения"
    }

    words.forEach(
        (word) => word.classList.toggle('show')
    )

    stars.forEach(
        (star) => star.classList.toggle('show')
    )
}