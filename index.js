let hamburgerBtn = document.getElementById('hamburger-btn')
const menu = document.getElementById('menu')

hamburgerBtn.addEventListener('click', ()=>{
    let menuState = menu.getAttribute('data-visible')
    if(menuState === 'false'){
        menu.setAttribute('data-visible', true)
        hamburgerBtn.setAttribute('aria-expanded', true)
    }else{
        menu.setAttribute('data-visible', false)
        hamburgerBtn.setAttribute('aria-expanded', false)
    }
})