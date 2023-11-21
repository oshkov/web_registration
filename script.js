let tg = window.Telegram.WebApp
let registrate_btn = document.getElementById('registrate')

registrate_btn.addEventListener('click', () => {
    let user_name = document.getElementById('user_name')
    let last_name = document.getElementById('last_name')
    let phone = document.getElementById('phone')

    let data = {
        user_name: user_name,
        last_name: last_name,
        phone: phone
    }

    tg.sendData(JSON.stringify(data))

    tg.close()
})