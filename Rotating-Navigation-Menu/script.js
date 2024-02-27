let openButton = document.getElementById('open')
let closeButton = document.getElementById('close')
let circle = document.querySelector('.circle')
let container = document.querySelector('.container')
let navItems = document.querySelector('.nav-items')

openButton.addEventListener('click', () => {
    container.classList.add('container-active')
    circle.classList.add('show-nav')
    navItems.classList.add('nav-active')
})
closeButton.addEventListener('click', () => {
    container.classList.remove('container-active')
    circle.classList.remove('show-nav')
    navItems.classList.remove('nav-active')
})