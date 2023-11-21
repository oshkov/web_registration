let tg = window.Telegram.WebApp
let registrate_btn = document.getElementById('registrate')

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