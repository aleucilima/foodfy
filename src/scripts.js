const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        const imgId = card.getAttribute('alt')
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `./assets/${imgId}`
        //modalOverlay.querySelector('.title-revenue') = `${autor}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})