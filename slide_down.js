let general = document.querySelector('#general button'),
    general_rules = document.querySelector('#general_rules')

let unknown_url = document.querySelector('#unknown_url button'),
    unknown_url_rules = document.querySelector('#unknown_url_rules')

let interaction_with_players = document.querySelector('#interaction_with_players button'),
    interaction_with_players_rules = document.querySelector('#interaction_with_players_rules')

let cheats = document.querySelector('#cheats button'),
    cheats_rules = document.querySelector('#cheats_rules')

let twinks = document.querySelector('#twinks button'),
    twinks_rules = document.querySelector('#twinks_rules')

let lags = document.querySelector('#lags button'),
    lags_rules = document.querySelector('#lags_rules')

let building = document.querySelector('#building button'),
    building_rules = document.querySelector('#building_rules')

let trading = document.querySelector('#trading button'),
    trading_rules = document.querySelector('#trading_rules')

let event = document.querySelector('#event button'),
    event_box = document.querySelector('#event_box')


general.onclick = () => {
    general_rules.classList.toggle("open");
};

unknown_url.onclick = () => {
    unknown_url_rules.classList.toggle("open");
};

interaction_with_players.onclick = () => {
    interaction_with_players_rules.classList.toggle("open");
};

cheats.onclick = () => {
    cheats_rules.classList.toggle("open");
};

twinks.onclick = () => {
    twinks_rules.classList.toggle("open");
};

lags.onclick = () => {
    lags_rules.classList.toggle("open");
};

building.onclick = () => {
    building_rules.classList.toggle("open");
};

trading.onclick = () => {
    trading_rules.classList.toggle("open");
};

event.onclick = () => {
    event_box.classList.toggle("open");
};