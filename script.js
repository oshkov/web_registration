let tg = window.Telegram.WebApp

// Кнопки
let url_btn = document.getElementById('continue_url')
let username_btn = document.getElementById('continue_username')
let age_btn = document.getElementById('continue_age')
let gender_btn = document.getElementById('continue_gender')
let city_btn = document.getElementById('continue_city')
let prefer_btn = document.getElementById('continue_prefer')
let target_btn = document.getElementById('continue_target')
let registrate_btn = document.getElementById('registrate')

// Блоки ввода данных
let inputURL = document.getElementById('url_input')
let inputUsername = document.getElementById('username_input')
let inputAge = document.getElementById('age_input')
let inputGenderMale = document.getElementById('input_male')
let inputGenderFemale = document.getElementById('input_female')
let inputCity = document.getElementById('city_input')
let inputPreferMale = document.getElementById('input_with_male')
let inputPreferFemale = document.getElementById('input_with_female')
let inputPreferEveryone = document.getElementById('input_with_everyone')
let inputTargetCommunication = document.getElementById('communication')
let inputTargetParty = document.getElementById('party')
let inputTarget18 = document.getElementById('18+')
let inputTargetDate = document.getElementById('date')
let inputTargetSerious = document.getElementById('serious')

url_btn.addEventListener('click', () => {
    // Проверка на ввод ссылки
    if (inputURL.value === '') {
        document.getElementById('error_url').textContent = 'Введите ссылку'
        return
    }

    document.getElementById('url_form').style.display = 'none'
    document.getElementById('username_form').style.display = 'block'
})

username_btn.addEventListener('click', () => {
    // Проверка на ввод имени
    if (inputUsername.value === '') {
        document.getElementById('error_username').textContent = 'Введите свое имя'
        return
    }

    document.getElementById('username_form').style.display = 'none'
    document.getElementById('age_form').style.display = 'block'
})

age_btn.addEventListener('click', () => {
    // Проверка на ввод возраста
    if (inputAge.value < 18) {
        document.getElementById('error_age').textContent = 'Минимальный возраст 18 лет'
        return
    } else if (inputAge.value > 80) {
        document.getElementById('error_age').textContent = 'Максимальный возраст 80 лет'
        return
    }

    document.getElementById('age_form').style.display = 'none'
    document.getElementById('city_form').style.display = 'block'
})

city_btn.addEventListener('click', () => {
    // Проверка на ввод города
    if (inputCity.value != 'Казань') {
        document.getElementById('error_city').textContent = 'Выберите город из предложенных'
        return
    }

    document.getElementById('city_form').style.display = 'none'
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

target_btn.addEventListener('click', () => {
    // Проверка на выбор цели
    if (inputTargetCommunication.checked === false &&
        inputTargetParty.checked === false &&
        inputTarget18.checked === false &&
        inputTargetDate.checked === false &&
        inputTargetSerious.checked === false ) {
        document.getElementById('error_target').textContent = 'Укажите хотя бы одну цель'
        return
    }

    document.getElementById('target_form').style.display = 'none'
    document.getElementById('about_form').style.display = 'block'
})

registrate_btn.addEventListener('click', () => {
    // Добавление введенных данных в переменные
    let username = document.getElementById('username_input').value;

    let gender
    if (inputGenderMale.checked === true) {
        gender = 'Мужчина'
    } 
    if (inputGenderFemale.checked === true) {
        gender = 'Женщина'
    }

    let preferences
    if (inputPreferMale.checked === true) {
        preferences = 'С мужчинами'
    }
    if (inputPreferFemale.checked === true) {
        preferences = 'С женщинами'
    }
    if (inputPreferEveryone.checked === true) {
        preferences = 'Со всеми'
    }

    let city = document.getElementById('city_input').value;
    let age = document.getElementById('age_input').value;
    let url = document.getElementById('url_input').value;
    let about = document.getElementById('about_input').value;

    let targetList = []
    if (inputTargetCommunication.checked === true) {
        targetList.push('Общение')
    }
    if (inputTargetParty.checked === true) {
        targetList.push('Вечеринка')
    }
    if (inputTarget18.checked === true) {
        targetList.push('Встреча 18+')
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
        city: city,
        age: age,
        url: url,
        about: about,
        target: targetList
    }
    console.log(data)

    tg.sendData(JSON.stringify(data));

    tg.close();
})





// ВЫБОР ГОРОДА
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
/*An array containing all the country names in the world:*/
let countries = ['Казань'];

/*initiate the autocomplete function on the "city_input" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("city_input"), countries);