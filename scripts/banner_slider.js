(function(){
    const banner_slider_arrow_left = document.getElementById('banner_slider_arrow_left'),
    banner_slider_arrow_right = document.getElementById('banner_slider_arrow_right'),
    banner_slider = document.getElementById('banner_slider'),
    banner_slider_title = document.querySelectorAll('.banner_slider_title'),
    banner_slider_description = document.querySelectorAll('.banner_slider_description'),
    banner_slider_btn = document.querySelectorAll('.banner_slider_btn'),
    banner_slider_position = document.querySelectorAll('.banner_slider_position'),
    banner_background = document.getElementById('banner_background')

    let banner_slider_margin_left = 0,
    slider_i = 0

    banner_slider_arrow_right.addEventListener('click', () => {

        if(slider_i < banner_slider.children.length - 1) {
            banner_slider_arrow_left.classList.add('active')
            banner_slider_margin_left = banner_slider_margin_left - 100
            banner_slider.style.marginLeft = `${banner_slider_margin_left}%`
            banner_background.style.marginLeft = `${banner_slider_margin_left}%`
            slider_i++

            for (let slider_info_i = 0; slider_info_i <  banner_slider.children.length; slider_info_i++) {
                banner_slider_title[slider_info_i].classList.remove('active')
                banner_slider_description[slider_info_i].classList.remove('active')
                banner_slider_btn[slider_info_i].classList.remove('active')
                banner_slider_position[slider_info_i].classList.remove('active')

                setTimeout(() => {
                    banner_slider_title[slider_i].classList.add('active')
                    banner_slider_description[slider_i].classList.add('active')
                    banner_slider_btn[slider_i].classList.add('active')
                }, 400)    
                
                banner_slider_position[slider_i].classList.add('active')
            }
        }
        
        if(slider_i == banner_slider.children.length - 1) {
            banner_slider_arrow_right.classList.remove('active')
        }
    })

    banner_slider_arrow_left.addEventListener('click', () => {

        if(slider_i > 0) {
            banner_slider_arrow_right.classList.add('active')
            banner_slider_margin_left = banner_slider_margin_left + 100
            banner_slider.style.marginLeft = `${banner_slider_margin_left}%`
            banner_background.style.marginLeft = `${banner_slider_margin_left}%`
            slider_i--    

            for (let slider_info_i = 0; slider_info_i <  banner_slider.children.length; slider_info_i++) {
                banner_slider_title[slider_info_i].classList.remove('active')
                banner_slider_description[slider_info_i].classList.remove('active')
                banner_slider_btn[slider_info_i].classList.remove('active')
                banner_slider_position[slider_info_i].classList.remove('active')

                setTimeout(() => {
                    banner_slider_title[slider_i].classList.add('active')
                    banner_slider_description[slider_i].classList.add('active')
                    banner_slider_btn[slider_i].classList.add('active')
                }, 400)
                banner_slider_position[slider_i].classList.add('active')
                
            }
        }
        
        if(slider_i == 0) {
            banner_slider_arrow_left.classList.remove('active')
        }
    })

}())