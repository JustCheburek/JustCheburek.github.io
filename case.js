function get_all_chances(array) {
    // Получение суммы шансов
    let all_chances = 0;
    for (let id = 0; id < array.length; id++) {
        all_chances += array[id].chance
    }

    return all_chances
}

function get_random_item(array, all_chances = array.length) {
    /**
     * Функция выдаёт рандомный value из списка
     * @param {array} array - массив
     * @param {int} all_chances - количество процентов
     * @return {Object} - value
     */

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
    /* Обновление предметов */

    // Смена типа и редкости предметов
    for (let item of container.children) {
        let type_item = get_random_item(case_now, all_chances_case) // Тип предмета
        item.innerHTML = `<p>${type_item.displayname}</p>` // Текст фичи
        item.style.alignItems = "center" // Расположение текста
        item.dataset.drop = "" // Сброс дропа
        let rarity_item = "drop" // Одна редкость
        let drop = type_item.name // Дроп

        if (type_item.rarity === "random") {
            // Удаляем редкости
            clear_rarities(item)

            // Выдаём редкость
            // Из словаря берём только имя (без процентов)
            rarity_item = get_random_item(rarities, all_chances_rarities).name

            // Добавление класса редкости
            item.classList.add(rarity_item)
        } else {  // Если редкость не рандомная
            // Если нет класса, то выдаём
            if (!item.classList.contains(type_item.rarity)) {
                item.classList.add(type_item.rarity)
            }
        }

        // Дроп + картинка
        if (type_item[rarity_item] !== null) {
            if (type_item[rarity_item].length > 1) {
                drop = get_random_item(type_item[rarity_item]) // Получение рандомного дропа
            } else {
                drop = type_item[rarity_item][0]
            }

            item.style.alignItems = "flex-end"  // Расположение текста

            // html переменные
            item.innerHTML = `<img src="media/shop/${type_item.name}/${drop.name}.webp" alt="${type_item.displayname}/${drop.displayname}">`

            // Дата-данные
            item.dataset.drop = drop.displayname
        }

        // Приз
        if (item.classList.contains("result_item")) {
            result_drop = {
                drop: drop,
                rarity: rarity_item,
                display: item.innerHTML,
                type: type_item.name,
                img: (type_item[rarity_item] !== null),
                permision: `ultracosmetics.${type_item.name}.${drop.name}`
            }

            console.log(result_drop)
        }
    }

    // Смена части выпавшего предмета
    change_width_roll()
    change_time_roll()
}

function win() {
    // Выигрыш
    container.classList.add("win")
    body.classList.add("win")
}

function clear_win() {
    // Очистка выигрыша
    container.classList.remove("win")
    body.classList.remove("win")
}

function change_type(type) {
    let case_select = document.querySelector("#case_select")

    if (type === undefined) {
        // Изменение кейса
        type = case_select.value
    }

    // Изменение шансов
    if (type === "common" || type === null) {
        // Изменение выбора
        case_select.selectedIndex = 0

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
        // Изменение выбора
        case_select.selectedIndex = 1

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
        // Изменение выбора
        case_select.selectedIndex = 2

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

    // Сохранение в локальную память
    localStorage.setItem("type", type)

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

// Кнопка кручения
const roll = document.querySelector("#roll")

// Получение root
const root = document.querySelector(":root")

// Переменные
let roll_time  // Время кручения
let timer_win  // Тайм аут
let result_drop  // Инфо о призе

// Суммы шансов
let all_chances_rarities
let all_chances_case

// Кручение + обновление
change_type(localStorage.getItem("type"))

// Загрузка окна
window.addEventListener("load", function () {
    // Нажатие на кнопку
    roll.addEventListener("click", function () {
        // Изменение текста на кнопке
        if (container.classList.contains("roll")) {
            // Меняем текст кнопки
            roll.textContent = "Крутить"

            // Сброс
            clearTimeout(timer_win)

            // Если конец рулетки
            if (container.classList.contains("win")) {
                // Убирание выигрыша
                clear_win()

                // Кручение
                update()
            }
        } else {
            // Победа
            timer_win = setTimeout(win, roll_time + 1000)

            // Меняет текст кнопки
            roll.textContent = "Сбросить"
        }

        // Изменение класса контейнера
        container.classList.toggle("roll")
    })
})