
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


document.querySelector('#close_popup , .popupShadow').addEventListener('click', (event) => {
    event.preventDefault();
    const popup = document.querySelector('.popupShadow');
    popup.classList.add('no_show');
    popup.classList.remove('show_animation');
});