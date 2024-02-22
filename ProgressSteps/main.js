let progress = document.getElementById('progress')
let circles = document.querySelectorAll('.circle')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let progressCount = 0
const steps = 3
const porcent = 85
prev.disabled = progressCount === 0 ? true : false

next.addEventListener('click', () => {
    if (progressCount < steps) {
        progressCount++
        progress.style.width = `${(porcent / steps) * progressCount}%`
        circles[progressCount].classList.add('circle-active')
        prev.disabled = progressCount === 0 ? true : false
        next.disabled = progressCount === steps ? true : false
    }
})

prev.addEventListener('click', () => {
    if (progressCount > 0) {
        circles[progressCount].classList.remove('circle-active')
        progressCount--
        progress.style.width = `${(porcent / steps) * progressCount}%`
        prev.disabled = progressCount === 0 ? true : false
        next.disabled = progressCount === steps ? true : false
    }
})

