
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


// Простой GET-запрос
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) throw new Error(`Ошибка сети: ${response.status}`);
//     return response.json(); // преобразуем тело ответа в JSON
// }).then(data => console.log(data)) // выводим полученные данные
//   .catch(error => console.error('Ошибка:', error));

//   const data1 = { 
//     title: 'foo', body: 'bar', userId: 1 };
//     fetch('https://jsonplaceholder.typicode.com/posts', 
//         {  method: 'POST',  headers: {    'Content-Type': 'application/json'  },
//   body: JSON.stringify(data1)})
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));// scripts/script.js

document.querySelector('.form_log').addEventListener('submit', async (event) => {
    event.preventDefault(); // Не перезагружать страницу
    console.log('Отправка формы...');
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData); // { email: "...", password: "..." }

    try {

         const response = await fetch('http://localhost:3100/register', {
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
        alert('Ошибка подключения к серверу');
        console.error('Ошибка:', error);
    }
});
