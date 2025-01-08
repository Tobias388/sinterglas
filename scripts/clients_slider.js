(function(){
    const clients_slider_arrow_left = document.getElementById('clients_slider_arrow_left'),
    clients_slider_arrow_right = document.getElementById('clients_slider_arrow_right'),
    clients_slider = document.getElementById('clients_slider')

    let clients_slider_margin_left = 0,
    slider_i = 0

    clients_slider_arrow_right.addEventListener('click', () => {

        if(slider_i < clients_slider.children.length - 1) {
            clients_slider_arrow_left.classList.add('active')
            clients_slider_margin_left = clients_slider_margin_left - 100
            clients_slider.style.marginLeft = `${clients_slider_margin_left}%`
            slider_i++
        }
        
        if(slider_i == clients_slider.children.length - 1) {
            clients_slider_arrow_right.classList.remove('active')
        }
    })

    clients_slider_arrow_left.addEventListener('click', () => {

        if(slider_i > 0) {
            clients_slider_arrow_right.classList.add('active')
            clients_slider_margin_left = clients_slider_margin_left + 100
            clients_slider.style.marginLeft = `${clients_slider_margin_left}%`
            slider_i--    
        }
        
        if(slider_i == 0) {
            clients_slider_arrow_left.classList.remove('active')
        }
    })

}())