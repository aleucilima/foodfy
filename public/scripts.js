const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', () => {
        let recipeIndex = card.getAttribute('id')
        window.location.href = `/recipe/${recipeIndex}`

    })
}

/*  Function for button "Esconder/Mostrar" */
const showHides = document.querySelectorAll('.topic')

for(let showHide of showHides) {
    const btnShowHide = showHide.querySelector('button')

    btnShowHide.addEventListener('click', () => {
        if(btnShowHide.innerHTML == "ESCONDER") {
            showHide.querySelector('.topic-content').classList.add('hidden')
            btnShowHide.innerHTML = "MOSTRAR"
        } else {
            showHide.querySelector('.topic-content').classList.remove('hidden')
            btnShowHide.innerHTML = "ESCONDER"
        }
    })
}