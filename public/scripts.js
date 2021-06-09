const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', () => {
        let recipeIndex = card.getAttribute('id')
        window.location.href = `/recipe/${recipeIndex}`

    })
}

/*  Function for button "Esconder/Mostrar" */
const showHides = document.querySelectorAll('h4')

for(let i = 0; i < showHides.length; i++) {
    showHides.item(i).addEventListener('click', () => {
        let selector = document.querySelectorAll('.topic-content')[i]

        if(showHides.item(i).innerHTML == 'ESCONDER') {
            showHides.item(i).innerHTML = 'MOSTRAR';
            selector.style.display = 'none'
        } else if (showHides.item(i).innerHTML == 'MOSTRAR') {
            showHides.item(i).innerHTML = 'ESCONDER'
            selector.style.display = 'block'
        }
    })
}
