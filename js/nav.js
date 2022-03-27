// Работа с навигацией
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav')

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active')
})

// находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// обходим ссылки методом фор ич
navLinks.forEach(function (item) {
    // для каждой ссылки добавляем прослушку по событию "клик"
    item.addEventListener('click', function () {
        navIcon.classList.remove('nav-icon--active'); //убираем активный класс у иконки моб навигации
        nav.classList.remove('nav--active'); // убираем активный класс у блока моб навигации
    })
})