(function(){
    const header = document.getElementById('header'),
    btn_menu_open = document.getElementById('btn_menu_open'),
    btn_menu_close = document.getElementById('btn_menu_close'),
    overlay = document.getElementById('overlay')

    btn_menu_open.addEventListener('click', () => {
        header.classList.add('active')
        overlay.classList.add('active')
    })

    btn_menu_close.addEventListener('click', () => {
        header.classList.remove('active')
        overlay.classList.remove('active')
    })

    overlay.addEventListener('click', () => {
        header.classList.remove('active')
        overlay.classList.remove('active')
    })

}())