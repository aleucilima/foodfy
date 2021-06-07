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


function btnShowHide(el){
    const display = document.getElementById(el).style.display
    if(display == 'none'){
        document.getElementById(el).style.display = 'block'
    } else {
        document.getElementById(el).style.display = 'none'
    }

}
