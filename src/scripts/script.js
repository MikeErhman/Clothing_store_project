
let login_header = document.querySelector('.login_header'),
cart_header = document.querySelector('.cart_header'),
close_popup = document.querySelector('#close_popup');

arr_of_links_to_login = [login_header,  cart_header]

arr_of_links_to_login.forEach(element => {
    element.addEventListener('click', (event) => {
    event.preventDefault();
    const popup = document.querySelector('.popupShadow');
    popup.classList.remove('no_show');
    popup.classList.add('show_animation');
});
});


document.querySelector('#close_popup').addEventListener('click', (event) => {
    event.preventDefault();
    const popup = document.querySelector('.popupShadow');
    popup.classList.add('no_show');
    popup.classList.remove('show_animation');
});



document.querySelector('.form_log').addEventListener('submit', async (event) => {
    event.preventDefault(); // Не перезагружать страницу
    console.log('Отправка формы...');
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData); // { email: "...", password: "..." }

    try {

         const response = await fetch('http://localhost:3100/api/register', {
        // const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }); 


        const result = await response.json();

        if (response.ok) {
            alert('Регистрация успешна!');
            // console.log(result.message);
            console.log(result);
        } else {
            alert('Ошибка: ' + result.message);
        }
    

    } catch (error) {
        // alert('Ошибка подключения к серверу');
        console.error('Ошибка:', error);
    }
});

async function getUsers() {
    try {

         const response1 = await fetch('http://localhost:3100/api/users')

        const result1 = await response1.json();

        if (response1.ok) {
            alert('Данные всех пользователей');
            // console.log(result.message);
            console.log(result1);
        } else {
            alert('Ошибка: ' + result1.message);
        }
    

    } catch (error) {
        // alert('Ошибка подключения к серверу');
        console.error('Ошибка:', error)};

    }

    getUsers()