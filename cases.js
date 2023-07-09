function get_all_chances(array) {
    // Получение суммы шансов
    let all_chances = 0;
    for (let id = 0; id < array.length; id++) {
        all_chances += array[id].chance
    }

    return all_chances
}

function get_random_item(array, all_chances = array.length) {
    // Рандомная редкость от 0 до all_chances
    let random_chance = Math.floor(Math.random() * all_chances)

    // Нахождение шанса выпавшего предмета по редкости
    if (all_chances !== array.length) {
        let id = 0;
        for (let chance = array[0].chance; chance <= random_chance; chance += array[id].chance) {
            id++;
        }

        return array[id]
    }

    return array[random_chance]
}

function update() {
    // Смена типа и редкости предмета
    for (let item of container.children) {
        // Тип предмета
        let type_item = get_random_item(case_now, all_chances_case)
        item.innerHTML = ""
        let rarity_item = "all"
        let drop = type_item.name

        if (type_item.rarity === "random") {
            // Удаляем редкости
            clear_rarities(item)

            // Выдаём редкость
            rarity_item = get_random_item(rarities, all_chances_rarities).name

            item.classList.add(rarity_item)
        } else {
            // Если нет класса, то выдаём
            if (!item.classList.contains(type_item.rarity)) {
                item.classList.add(type_item.rarity)
            }
        }

        // Сам предмет
        if (type_item[rarity_item] !== null) {
            if (typeof type_item[rarity_item] === "string") {
                drop = item.textContent = type_item[rarity_item]
            } else {
                drop = get_random_item(type_item[rarity_item])

                item.innerHTML = `<img src="media/shop/${type_item.name}/${drop}.png" alt="Фича">`
            }
        } else { // Код не нужен, когда кейсы будут закончены
            item.innerHTML = `<p>${type_item.name}</p>`
            drop = type_item.name
        }

        // Приз
        if (item.classList.contains("result_item")) {
            result_drop = {
                name: drop,
                rarity: rarity_item,
                chance: type_item.chance,
                background: item.style.backgroundImage,
                type: type_item.name
            }
        }
    }

    // Смена части выпавшего предмета
    change_width_roll()
    change_time_roll()
}

function win() {
    // Выигрыш
    container.classList.add("win")

    if (result_drop.background !== "") {
        result.style.alignItems = "flex-end"
        result.innerHTML = `<p>${result_drop.name}</p>`
    }
}

function clear_win() {
    // Очистка выигрыша
    if (result_drop.background !== "") {
        result.style.alignItems = "center"
        result.innerHTML = ""
    }

    container.classList.remove("win")
}

function change_type(type) {
    if (type === undefined) {
        // Изменение кейса
        type = document.querySelector("#case_select").value
    }

    // Изменение шансов
    if (type === "common") {
        // Кейсы
        case_now[0].chance = 7 // Эмоция
        case_now[1].chance = 6 // Частицы
        case_now[2].chance = 5 // Стрелы
        case_now[3].chance = 1 // Суффикс
        case_now[4].chance = 1 // Эффект после смерти
        case_now[5].chance = 1 // Питомец

        // Редкости
        rarities[0].chance = 10 // common
        rarities[1].chance = 7 // uncommon
        rarities[2].chance = 5 // rare
        rarities[3].chance = 3 // epic
        rarities[4].chance = 2 // mythic
        rarities[5].chance = 1 // legendary
    } else if (type === "rare") {
        // Кейсы
        case_now[0].chance = 6 // Эмоция
        case_now[1].chance = 5 // Частицы
        case_now[2].chance = 4 // Стрелы
        case_now[3].chance = 2 // Суффикс
        case_now[4].chance = 2 // Эффект после смерти
        case_now[5].chance = 2 // Питомец

        // Редкости
        rarities[0].chance = 6 // common
        rarities[1].chance = 6 // uncommon
        rarities[2].chance = 7 // rare
        rarities[3].chance = 4 // epic
        rarities[4].chance = 3 // mythic
        rarities[5].chance = 2 // legendary
    } else if (type === "legendary") {
        // Кейсы
        case_now[0].chance = 6 // Эмоция
        case_now[1].chance = 5 // Частицы
        case_now[2].chance = 4 // Стрелы
        case_now[3].chance = 4 // Суффикс
        case_now[4].chance = 4 // Эффект после смерти
        case_now[5].chance = 3 // Питомец

        // Редкости
        rarities[0].chance = 5 // common
        rarities[1].chance = 5 // uncommon
        rarities[2].chance = 5 // rare
        rarities[3].chance = 6 // epic
        rarities[4].chance = 5 // mythic
        rarities[5].chance = 3 // legendary
    }

    // Сумма шансов всех типов
    all_chances_case = get_all_chances(case_now)

    // Сумма шансов всех редкостей
    all_chances_rarities = get_all_chances(rarities)

    update()
}

function change_width_roll() {
    // Начальная позиция
    let min_roll_width = Number(getComputedStyle(root).getPropertyValue('--min-roll-width'))

    // Конечная позиция
    let max_roll_width = Number(getComputedStyle(root).getPropertyValue('--max-roll-width'))

    // Рандомное число
    let random_part = Math.floor(Math.random() * (min_roll_width - max_roll_width))

    // Изменение позиции итогового предмета
    root.style.setProperty('--roll-width', `-${min_roll_width - random_part}px`);
}

function change_time_roll() {
    // Начальная позиция
    let min_roll_time = Number(getComputedStyle(root).getPropertyValue('--min-roll-time'))

    // Конечная позиция
    let max_roll_time = Number(getComputedStyle(root).getPropertyValue('--max-roll-time'))

    // Рандомное число
    let random_part = Math.floor(Math.random() * (max_roll_time - min_roll_time))

    roll_time = max_roll_time - random_part

    // Изменение позиции итогового предмета
    root.style.setProperty('--roll-time', `${max_roll_time - random_part}ms`);
}

function clear_rarities(item) {
    for (let rarity_id = 0; rarity_id < rarities.length; rarity_id++) {
        if (item.classList.contains(rarities[rarity_id].name)) {
            item.classList.remove(rarities[rarity_id].name)
        }
    }
}

// Контейнер с предметами
const container = document.querySelector("#natural_container")

// Итоговый предмет
const result = document.querySelector(".result_item")

// Кнопка кручения
const roll = document.querySelector("#roll")

let roll_time  // Время кручения
let timeout  // Тайм аут
let result_drop  // Инфо о призе

// Получение root
const root = document.querySelector(":root")

// Редкости в обычном сундуке
let rarities = [
    {
        name: "common",
        chance: 10
    },
    {
        name: "uncommon",
        chance: 7
    },
    {
        name: "rare",
        chance: 5
    },
    {
        name: "epic",
        chance: 3
    },
    {
        name: "mythic",
        chance: 2
    },
    {
        name: "legendary",
        chance: 1
    }
]

// Кейсы
let case_now = [
    {
        name: "emotes",
        chance: 7,
        rarity: "random",

        // Редкости
        common: ["cheeky", "happy"],
        uncommon: ["angry", "dealwithit", "raiseeyebrows", "wink"],
        rare: ["cry", "lovestruckallay", "surprised", "glowingpumpkin"],
        epic: ["love"],
        mythic: ["scarycandle"],
        legendary: ["cool"]
    },
    {
        name: "particleeffects",
        chance: 6,
        rarity: "random",

        // Дроп
        common: [
            "arcaneflame", "enchanted", "frostlord", "music", "notes"
        ],
        uncommon: [
            "crushedcandycane", "cursedfootprints", "enderaura", "frozenwalk",
            "hearts", "inlove", "shadowfootprints", "springfootprints"
        ],
        rare: ["cursedhalo", "snowcloud", "snowfootprints"],
        epic: [
            "divinehalo", "enderfootprints", "firewaves", "flamerings",
            "greensparks", "inferno", "santahat", "volcanichalo"
        ],
        mythic: ["bloodhelix", "magicalrods", "rainycloud"],
        legendary: ["angelwings", "rainbowwings", "superhero"]
    },
    {
        name: "projectileeffects",
        chance: 5,
        rarity: "random",

        // Редкости
        common: null,
        uncommon: null,
        rare: null,
        epic: null,
        mythic: null,
        legendary: null
    },
    {
        name: "suffix",
        chance: 1,
        rarity: "epic",

        // Дроп
        all: "suffix"
    },
    {
        name: "deatheffects",
        chance: 1,
        rarity: "mythic",

        // Дроп
        all: ["explosion", "firework", "lighting"]
    },
    {
        name: "pet",
        chance: 1,
        rarity: "random",

        // Редкости
        common: null,
        uncommon: null,
        rare: null,
        epic: null,
        mythic: null,
        legendary: null
    }
]

// Суммы шансов
let all_chances_rarities = get_all_chances(rarities)

// Сумма шансов всех типов
let all_chances_case = get_all_chances(case_now)

// Кручение
update()

// Загрузка окна
window.addEventListener("load", function () {
    // Нажатие на кнопку
    roll.addEventListener("click", function () {
        // Изменение текста на кнопке
        if (container.classList.contains("roll")) {
            // Меняем текст кнопки
            roll.textContent = "Крутить"

            // Сброс
            clearTimeout(timeout)

            // Если конец рулетки
            if (container.classList.contains("win")) {
                // Убирание выигрыша
                clear_win()

                // Кручение
                update()
            }
        } else {
            // Победа
            timeout = setTimeout(win, roll_time+2000)

            // Меняет текст кнопки
            roll.textContent = "Сбросить"
        }

        // Изменение класса контейнера
        container.classList.toggle("roll")
    })
})