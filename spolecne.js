const button = document.querySelector('#menu-tlacitko')


button.addEventListener ('click', function() {
    const items = document.querySelector('#menu-polozky')
    if (items.classList.contains('show')) {
        items.classList.remove('show')
        button.querySelector('i').classList.remove('fa-xmark')
        button.querySelector('i').classList.add('fa-bars')

    } else {
        items.classList.add('show')
        button.querySelector('i').classList.remove('fa-bars')
        button.querySelector('i').classList.add('fa-xmark')
    }
}
)









