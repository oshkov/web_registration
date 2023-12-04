let tg = window.Telegram.WebApp

// Кнопки
let start_registrate_btn = document.getElementById('start_registrate')
let username_btn = document.getElementById('continue_username')
let lastname_btn = document.getElementById('continue_lastname')
let gender_btn = document.getElementById('continue_gender')
let prefer_btn = document.getElementById('continue_prefer')
let registrate_btn = document.getElementById('registrate')

// Блоки ввода данных
let inputUsername = document.getElementById('username_input')
let inputGenderMale = document.getElementById('input_male')
let inputGenderFemale = document.getElementById('input_female')
let inputPreferMale = document.getElementById('input_with_male')
let inputPreferFemale = document.getElementById('input_with_female')
let inputPreferEveryone = document.getElementById('input_with_everyone')
let inputTargetCommunication = document.getElementById('communication')
let inputTargetParty = document.getElementById('party')
let inputTarget18 = document.getElementById('18+')
let inputTargetDate = document.getElementById('date')
let inputTargetSerious = document.getElementById('serious')

start_registrate_btn.addEventListener('click', () => {
    document.getElementById('start_registration').style.display = 'none'
    document.getElementById('username_form').style.display = 'block'
})

username_btn.addEventListener('click', () => {
    // Проверка на ввод имени
    if (inputUsername.value === '') {
        document.getElementById('error_username').textContent = 'Введите свое имя'
        return
    }

    document.getElementById('username_form').style.display = 'none'
    document.getElementById('gender_form').style.display = 'block'
})

gender_btn.addEventListener('click', () => {
    // Проверка на выбор пола
    if (inputGenderMale.checked === false && inputGenderFemale.checked === false) {
        document.getElementById('error_gender').textContent = 'Укажите свой пол'
        return
    }

    document.getElementById('gender_form').style.display = 'none'
    document.getElementById('preferences_form').style.display = 'block'
})

prefer_btn.addEventListener('click', () => {
    // Проверка на выбор предпочтений
    if (inputPreferMale.checked === false && inputPreferFemale.checked === false && inputPreferEveryone.checked === false) {
        document.getElementById('error_prefer').textContent = 'Укажите предпочтения'
        return
    }

    document.getElementById('preferences_form').style.display = 'none'
    document.getElementById('target_form').style.display = 'block'
})

registrate_btn.addEventListener('click', () => {
    // Проверка на выбор цели
    if (inputTargetCommunication.checked === false &&
        inputTargetParty.checked === false &&
        inputTarget18.checked === false &&
        inputTargetDate.checked === false &&
        inputTargetSerious.checked === false ) {
        document.getElementById('error_target').textContent = 'Укажите хотя бы одну цель'
        return
    }

    // Добавление введенных данных в переменные
    let username = document.getElementById('username_input').value;

    if (inputGenderMale.checked === true) {
        gender = 'Мужчина'
    } else {
        gender = 'Женщина'
    }

    if (inputPreferMale.checked === true) {
        preferences = 'С мужчинами'
    }
    if (inputPreferFemale.checked === true) {
        preferences = 'С женщинами'
    }
    if (inputPreferMale.checked === true) {
        inputPreferEveryone = 'Со всеми'
    }

    let targetList = []
    if (inputTargetCommunication.checked === true) {
        targetList.push('Общение')
    }
    if (inputTargetParty.checked === true) {
        targetList.push('Вечеринка')
    }
    if (inputTarget18.checked === true) {
        targetList.push('18+')
    }
    if (inputTargetDate.checked === true) {
        targetList.push('Свидание')
    }
    if (inputTargetSerious.checked === true) {
        targetList.push('Серьезные отношения')
    }

    // Отправка данных в бота
    let data = {
        name: username,
        gender: gender,
        preferences: preferences,
        target: targetList
    }
    console.log(data)

    tg.sendData(JSON.stringify(data));

    tg.close();
})