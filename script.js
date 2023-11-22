let tg = window.Telegram.WebApp
let start_registrate_btn = document.getElementById('start_registrate')
let username_btn = document.getElementById('continue_username')
let lastname_btn = document.getElementById('continue_lastname')
let registrate_btn = document.getElementById('registrate')

start_registrate_btn.addEventListener('click', () => {
    document.getElementById('start_registration').style.display = 'none'
    document.getElementById('username_form').style.display = 'block'
})

username_btn.addEventListener('click', () => {
    document.getElementById('username_form').style.display = 'none'
    document.getElementById('lastname_form').style.display = 'block'
})

lastname_btn.addEventListener('click', () => {
    document.getElementById('lastname_form').style.display = 'none'
    document.getElementById('phone_form').style.display = 'block'
})

registrate_btn.addEventListener('click', () => {
    let user_name = document.getElementById('user_name').value;
    let last_name = document.getElementById('last_name').value;
    let phone = document.getElementById('phone').value;

    let data = {
        имя: user_name,
        фамилия: last_name,
        телефон: phone
    }

    tg.sendData(JSON.stringify(data));

    tg.close();
})