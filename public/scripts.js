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

/* Function for button "addIgredient" */
function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}
  
    document.querySelector(".add-ingredient")
    document.addEventListener("click", addIngredient);
  
/* Function for button "addStep" */

function addStep() {
    const ingredients = document.querySelector("#prepare");
    const fieldContainer = document.querySelectorAll(".prepare");
    
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    
    if (newField.children[0].value == "") return false;
    
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}
    
    document.querySelector(".add-new-step")
    document.addEventListener("click", addStep);