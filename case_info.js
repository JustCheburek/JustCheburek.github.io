// Редкости в обычном сундуке
let rarities = [{
    name: "common",
    chance: 10
}, {
    name: "uncommon",
    chance: 7
}, {
    name: "rare",
    chance: 5
}, {
    name: "epic",
    chance: 3
}, {
    name: "mythic",
    chance: 2
}, {
    name: "legendary",
    chance: 1
}]

// Кейсы
let case_now = [
    {
        name: "emotes",
        displayname: "эмоции",
        chance: 7,
        rarity: "random",

        // Редкости
        common: [
            {
                name: "cheeky",
                displayname: "язычок"
            }, {
                name: "happy",
                displayname: "весёлый"
            }],

        uncommon: [
            {
                name: "angry",
                displayname: "злой"
            }, {
                name: "dealwithit",
                displayname: "крутой"
            }, {
                name: "raiseeyebrows",
                displayname: "взгляд скалы"
            }, {
                name: "wink",
                displayname: "подмигивающий"
            }],

        rare: [
            {
                name: "cry",
                displayname: "плач"
            }, {
                name: "lovestruckallay",
                displayname: "<3"
            }, {
                name: "surprised",
                displayname: "пооог"
            }, {
                name: "glowingpumpkin",
                displayname: "тыковка"
            }],

        epic: [{
            name: "love",
            displayname: "<3"
        }],

        mythic: [{
            name: "scarycandle",
            displayname: "страшная тыковка"
        }],

        legendary: [{
            name: "cool",
            displayname: "типа крутой"
        }]
    },
    {
        name: "particleeffects",
        displayname: "частицы",
        chance: 6,
        rarity: "random",

        // Дроп
        common: [
            {
                name: "arcaneflame",
                displayname: "крылья"
            }, {
                name: "enchanted",
                displayname: "магия"
            }, {
                name: "frostlord",
                displayname: "снежный король"
            }, {
                name: "music",
                displayname: "музончик"
            }, {
                name: "notes",
                displayname: "музыкант"
            }],

        uncommon: [
            {
                name: "crushedcandycane",
                displayname: "конфетки"
            }, {
                name: "cursedfootprints",
                displayname: "искажённые следы"
            }, {
                name: "enderaura",
                displayname: "эндермен"
            }, {
                name: "frozenwalk",
                displayname: "замороженные следы"
            }, {
                name: "hearts",
                displayname: "<3"
            }, {
                name: "inlove",
                displayname: "много <3"
            }, {
                name: "shadowfootprints",
                displayname: "следы теней"
            }, {
                name: "springfootprints",
                displayname: "весенние следы"
            }],

        rare: [
            {
                name: "cursedhalo",
                displayname: "искажённая корона"
            }, {
                name: "snowcloud",
                displayname: "снежное облако"
            }, {
                name: "snowfootprints",
                displayname: "снежные следы"
            }],

        epic: [
            {
                name: "divinehalo",
                displayname: "божественная корона"
            }, {
                name: "enderfootprints",
                displayname: "эндские следы"
            }, {
                name: "firewaves",
                displayname: "огненные волны"
            }, {
                name: "flamerings",
                displayname: "огненные кольца"
            }, {
                name: "greensparks",
                displayname: "зеленые волны"
            }, {
                name: "inferno",
                displayname: "огненное нечто"
            }, {
                name: "santahat",
                displayname: "шапка"
            }, {
                name: "volcanichalo",
                displayname: "огненная корона"
            }],

        mythic: [
            {
                name: "bloodhelix",
                displayname: "кровавая спираль"
            }, {
                name: "magicalrods",
                displayname: "магические ножи"
            }, {
                name: "rainycloud",
                displayname: "дождевое облако"
            }],

        legendary: [
            {
                name: "angelwings",
                displayname: "ангельские крылья"
            }, {
                name: "rainbowwings",
                displayname: "радужные крылья"
            }, {
                name: "superhero",
                displayname: "геройский плащ"
            }]
    },
    {
        name: "projectileeffects",
        displayname: "эффект стрельбы",
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
        displayname: "суффикс",
        chance: 1,
        rarity: "epic",

        // Дроп
        drop: null
    },
    {
        name: "deatheffects",
        chance: 1,
        rarity: "mythic",

        // Дроп
        drop: [
            {
                name: "explosion",
                displayname: "взрыв"
            }, {
                name: "firework",
                displayname: "фейерверк"
            }, {
                name: "lighting",
                displayname: "молния"
            }]
    },
    {
        name: "pets",
        displayname: "питомец",
        chance: 1,
        rarity: "random",

        // Редкости
        common: [
            {
                name: "piggy",
                displayname: "свинка"
            }, {
                name: "cow",
                displayname: "корова"
            }, {
                name: "chick",
                displayname: "курица"
            }, {
                name: "snowman",
                displayname: "снеговик"
            }, {
                name: "sheep",
                displayname: "овца"
            }, {
                name: "cod",
                displayname: "треска"
            }, {
                name: "pufferfish",
                displayname: "фугу"
            }, {
                name: "salmon",
                displayname: "лосось"
            }, {
                name: "tropicalfish",
                displayname: "тропическая рыба"
            }, {
                name: "donkey",
                displayname: "осёл"
            }],
        uncommon: [
            {
                name: "easterbunny",
                displayname: "кролик"
            }, {
                name: "dog",
                displayname: "собака"
            }, {
                name: "villager",
                displayname: "житель"
            }, {
                name: "skeleton",
                displayname: "скелет"
            }, {
                name: "zombie",
                displayname: "зомби"
            }, {
                name: "cavespider",
                displayname: "пещерный паук"
            }, {
                name: "spider",
                displayname: "паук"
            }, {
                name: "magmacube",
                displayname: "магма куб"
            }, {
                name: "tadpole",
                displayname: "лягушачья икра"
            }, {
                name: "piglin",
                displayname: "пиглин"
            }, {
                name: "zoglin",
                displayname: "зоглин"
            }, {
                name: "zombifiedpiglin",
                displayname: "зомбифицированный пиглин"
            }, {
                name: "turtle",
                displayname: "черепашка"
            }, {
                name: "drowned",
                displayname: "утопленник"
            }, {
                name: "vindicator",
                displayname: "поборник"
            }, {
                name: "zombievillager",
                displayname: "зомби-житель"
            }],
        rare: [
            {
                name: "mooshroom",
                displayname: "грибная корова"
            }, {
                name: "enderman",
                displayname: "эндермен"
            }, {
                name: "goat",
                displayname: "козёл"
            }, {
                name: "pillager",
                displayname: "разбойник"
            }, {
                name: "ravager",
                displayname: "громадина"
            }, {
                name: "llama",
                displayname: "лама"
            }, {
                name: "husk",
                displayname: "кадавр"
            }],
        epic: [
            {
                name: "irongolem",
                displayname: "железный голем"
            }, {
                name: "bat",
                displayname: "летучая мышка"
            }, {
                name: "slime",
                displayname: "слайм"
            }, {
                name: "silverfish",
                displayname: "чешуйница"
            }, {
                name: "creeper",
                displayname: "крипер"
            }, {
                name: "hoglin",
                displayname: "хоглин"
            }, {
                name: "dolphin",
                displayname: "дельфин"
            }, {
                name: "evoker",
                displayname: "призыватель"
            }, {
                name: "witherskeleton",
                displayname: "визер-скелет"
            }, {
                name: "polarbear",
                displayname: "снежный мишка"
            }],
        mythic: [
            {
                name: "witch",
                displayname: "ведьма"
            }, {
                name: "axolotl",
                displayname: "аксолотль"
            }, {
                name: "strider",
                displayname: "лавомерка"
            }, {
                name: "piglinbrute",
                displayname: "брутальный пиглин"
            }, {
                name: "panda",
                displayname: "панда"
            }, {
                name: "vex",
                displayname: "веко"
            }, {
                name: "mule",
                displayname: "мул"
            }, {
                name: "skeletonhorse",
                displayname: "лошадь-скелет"
            }, {
                name: "zombiehorse",
                displayname: "лошадь-зомби"
            }, {
                name: "stray",
                displayname: "зимогор"
            }],
        legendary: [
            {
                name: "wither",
                displayname: "визер"
            }, {
                name: "blaze",
                displayname: "блейз"
            }, {
                name: "endermite",
                displayname: "эндермит"
            }, {
                name: "guardian",
                displayname: "гвардиан"
            }, {
                name: "sniffer",
                displayname: "нюхач"
            }, {
                name: "warden",
                displayname: "варден"
            }, {
                name: "allay",
                displayname: "эллей"
            }, {
                name: "bee",
                displayname: "пчёлка"
            }, {
                name: "fox",
                displayname: "лисичка"
            }, {
                name: "kitty",
                displayname: "котик"
            }, {
                name: "frog",
                displayname: "лягушка"
            }, {
                name: "ocelot",
                displayname: "оцелот"
            }, {
                name: "parrot",
                displayname: "попугай"
            }, {
                name: "illusioner",
                displayname: "иллюзионист"
            }, {
                name: "horse",
                displayname: "лошадь"
            }, {
                name: "elderguardian",
                displayname: "большой гвардиан"
            }, {
                name: "shulker",
                displayname: "шалкер"
            }, {
                name: "pumpling",
                displayname: "тыковка"
            }]
    }]