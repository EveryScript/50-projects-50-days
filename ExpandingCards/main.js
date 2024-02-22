const boxes = document.querySelectorAll('.image-box')

boxes.forEach(box => {
    box.addEventListener('click', () => {
        boxes.forEach(boxe => boxe.classList.remove('expanded'));
        box.classList.add('expanded')
    })
})