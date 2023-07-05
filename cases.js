function get_all_chances(array) {
    // Получение суммы шансов
    let all_chances = 0;
    for (let id = 0; id < array.length; id++) {
        all_chances += array[id].chance
    }

    return all_chances
}

function get_random_item(array, all_chances) {
    // Рандомная редкость от 0 до all_chances
    let random_chance = Math.floor(Math.random() * all_chances);

    // Нахождение шанса выпавшего предмета по редкости
    let id = 0;
    for (let chance = array[0].chance; chance <= random_chance; chance += array[id].chance) {
        id++;
    }

    return array[id].name
}

function update() {
    // Смена редкости предмета
    for (let child of container_items.children) {
        // Тип предмета
        child.innerText = get_random_item(case_type, all_chances_case)

        // Удаляем редкости
        for (let rarity_id = 0; rarity_id < rarity_type.length; rarity_id++) {
            if (child.classList.contains(rarity_type[rarity_id].name)) {
                child.classList.remove(rarity_type[rarity_id].name)
            }
        }

        // Выдаём редкость
        child.classList.add(get_random_item(rarity_type, all_chances_rarities))
    }
}

function change_type() {
    // Изменение кейса
    let name = document.querySelector("#case_select").value
    case_type = case_types[name]

    // Сумма шансов всех типов
    all_chances_case = get_all_chances(case_type)

    // Изменение редкости
    rarity_type = rarities_types[name]

    // Сумма шансов всех редкостей
    all_chances_rarities = get_all_chances(rarity_type)

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
const common_rarities = [
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

// Редкости в редком сундуке
const rare_rarities = [
    {
        name: "common",
        chance: 7
    },
    {
        name: "uncommon",
        chance: 6
    },
    {
        name: "rare",
        chance: 7
    },
    {
        name: "epic",
        chance: 4
    },
    {
        name: "mythic",
        chance: 3
    },
    {
        name: "legendary",
        chance: 2
    }
]

// Редкости в легендарном сундуке
const legendary_rarities = [
    {
        name: "common",
        chance: 5
    },
    {
        name: "uncommon",
        chance: 5
    },
    {
        name: "rare",
        chance: 5
    },
    {
        name: "epic",
        chance: 6
    },
    {
        name: "mythic",
        chance: 5
    },
    {
        name: "legendary",
        chance: 3
    }
]

const rarities_types = {
    "common": common_rarities,
    "rare": rare_rarities,
    "legendary": legendary_rarities
}
let rarity_type = common_rarities

// Кейсы
// Обычный кейс
const common_case = [
    {
        name: "emote",
        chance: 7
    },
    {
        name: "particles",
        chance: 6
    },
    {
        name: "hit",
        chance: 5
    },
    {
        name: "suffix",
        chance: 1
    },
    {
        name: "death_effect",
        chance: 1
    },
    {
        name: "pet",
        chance: 1
    }
]

// Редкий кейс
const rare_case = [
    {
        name: "emote",
        chance: 6
    },
    {
        name: "particles",
        chance: 5
    },
    {
        name: "hit",
        chance: 4
    },
    {
        name: "suffix",
        chance: 2
    },
    {
        name: "death_effect",
        chance: 2
    },
    {
        name: "pet",
        chance: 2
    }
]

// Легендарный кейс
const legendary_case = [
    {
        name: "emote",
        chance: 6
    },
    {
        name: "particles",
        chance: 5
    },
    {
        name: "hit",
        chance: 4
    },
    {
        name: "suffix",
        chance: 4
    },
    {
        name: "death_effect",
        chance: 4
    },
    {
        name: "pet",
        chance: 4
    }
]

const case_types = {
    "common": common_case,
    "rare": rare_case,
    "legendary": legendary_case
}
let case_type = common_case

// Суммы шансов
let all_chances_rarities = get_all_chances(rarity_type)

// Сумма шансов всех типов
let all_chances_case = get_all_chances(case_type)

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
        }

        else {
            // Меняет текст кнопки
            roll.innerText = "Сбросить"
        }

        // Изменение класса контейнера
        container_items.classList.toggle("roll")
    })
})