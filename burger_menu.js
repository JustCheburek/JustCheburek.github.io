let mainmenu = document.querySelector('nav'),
    burger_icon = document.querySelector('.burger_icon'),
    body = document.querySelector('body')


burger_icon.addEventListener('click', function () {
    mainmenu.classList.toggle('active')
    burger_icon.classList.toggle('active')
    body.classList.toggle('active')
})
