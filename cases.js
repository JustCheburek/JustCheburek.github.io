window.addEventListener("load", function () {
    let item1 = document.querySelector("#item1")
    let item2 = document.querySelector("#item2")
    let item3 = document.querySelector("#item3")
    let item4 = document.querySelector("#item4")
    let item5 = document.querySelector("#item5")
    let item6 = document.querySelector("#item6")
    let item7 = document.querySelector("#item7")
    let item8 = document.querySelector("#item8")
    let item9 = document.querySelector("#item9")
    let item10 = document.querySelector("#item10")
    let item11 = document.querySelector("#item11")
    let item12 = document.querySelector("#item12")
    let item13 = document.querySelector("#item13")
    let item14 = document.querySelector("#item14")
    let item15 = document.querySelector("#item15")
    let item16 = document.querySelector("#item16")
    let item17 = document.querySelector("#item17")
    let item18 = document.querySelector("#item18")
    let item19 = document.querySelector("#item19")
    let item20 = document.querySelector("#item20")
    let item21 = document.querySelector("#item21")
    let item22 = document.querySelector("#item22")
    let item23 = document.querySelector("#item23")
    let item24 = document.querySelector("#item24")
    let item25 = document.querySelector("#item25")
    let item26 = document.querySelector("#item26")
    let item27 = document.querySelector("#item27")
    let item28 = document.querySelector("#item28")
    let item29 = document.querySelector("#item29")
    let item30 = document.querySelector("#item30")
    let item31 = document.querySelector("#item31")
    let item32 = document.querySelector("#item32")
    let item33 = document.querySelector("#item33")
    let item34 = document.querySelector("#item34")
    let item35 = document.querySelector("#item35")

    let roll = document.querySelector("#roll")
    let again = document.querySelector("#again")

    again.addEventListener("click", function () {
        item1.scrollIntoView({
            behavior: 'smooth',
            inline: "center"
        })
    })

    roll.addEventListener("click", function () {
        let time = 0

        item2.scrollIntoView({
            behavior: 'smooth',
            inline: "center"
        })

        time += 400
        setTimeout(function () {
            item3.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 400
        setTimeout(function () {
            item4.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 500
        setTimeout(function () {
            item6.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 500
        setTimeout(function () {
            item9.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 500
        setTimeout(function () {
            item13.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 600
        setTimeout(function () {
            item17.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 600
        setTimeout(function () {
            item21.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        },time)

        time += 600
        setTimeout(function () {
            item24.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 600
        setTimeout(function () {
            item26.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 600
        setTimeout(function () {
            item27.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)

        time += 550
        setTimeout(function () {
            item28.scrollIntoView({
                behavior: 'smooth',
                inline: "center"
            })
        }, time)
    })
})