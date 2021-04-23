const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', () => {
        const recipe = card.getAttribute('id')
        window.location.href = `/recipe/${recipe}`
    })
    
}
