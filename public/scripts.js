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