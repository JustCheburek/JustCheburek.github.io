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
    let random_chance = Math.floor(Math.random() * all_chances);

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
    // Смена редкости предмета
    for (let item of container_items.children) {
        // Тип предмета
        let type_item = get_random_item(case_now, all_chances_case)
        item.innerText = type_item.name

        if (type_item.rarity === "random") {
            // Удаляем редкости
            for (let rarity_id = 0; rarity_id < rarities.length; rarity_id++) {
                if (item.classList.contains(rarities[rarity_id].name)) {
                    item.classList.remove(rarities[rarity_id].name)
                }
            }

            // Выдаём редкость
            let rarity = get_random_item(rarities, all_chances_rarities)

            item.classList.add(rarity.name)
        } else {
            // Если нет класса, то выдаём
            if (!item.classList.contains(type_item.rarity)) {
                item.classList.add(type_item.rarity)
            }
        }
    }
}

function change_type(type) {
    if (type === undefined) {
        // Изменение кейса
        type = document.querySelector("#case_select").value
    }

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

/*function get_result_item() {
    let item = container_items.querySelector(".item")

    // Получение размеров
    let width_item = item.offsetWidth

    // Получение ширины рулетки
    let roll_width = getComputedStyle(root).getPropertyValue("--roll-width")
}*/

// Контейнер с предметами
const container_items = document.querySelector("#natural_container_items")

// Кнопка кручения
const roll = document.querySelector("#roll")

// Получение root
// const root = document.querySelector(":root")

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
        name: "emote",
        chance: 7,
        rarity: "random",

        // Редкости
        common: [],
        uncommon: [],
        rare: [],
        epic: [],
        mythic: [],
        legendary: []
    },
    {
        name: "particleeffects",
        chance: 6,
        rarity: "random",

        // Редкости
        common: [],
        uncommon: [],
        rare: [],
        epic: [],
        mythic: [],
        legendary: []
    },
    {
        name: "projectileeffects",
        chance: 5,
        rarity: "random",

        // Редкости
        common: [],
        uncommon: [],
        rare: [],
        epic: [],
        mythic: [],
        legendary: []
    },
    {
        name: "suffix",
        chance: 1,
        rarity: "epic"
    },
    {
        name: "death_effect",
        chance: 1,
        rarity: "legendary"
    },
    {
        name: "pet",
        chance: 1,
        rarity: "random",

        // Редкости
        common: [],
        uncommon: [],
        rare: [],
        epic: [],
        mythic: [],
        legendary: []
    }
]

// Суммы шансов
let all_chances_rarities = get_all_chances(rarities)

// Сумма шансов всех типов
let all_chances_case = get_all_chances(case_now)

update()

// Загрузка окна
window.addEventListener("load", function () {
    // Нажатие на кнопку
    roll.addEventListener("click", function () {
        // Изменение текста на кнопке
        if (container_items.classList.contains("roll")) {
            // Меняем текст кнопки
            roll.innerText = "Крутить"

            update()
        } else {
            // Меняет текст кнопки
            roll.innerText = "Сбросить"
        }

        // Изменение класса контейнера
        container_items.classList.toggle("roll")
    })
})