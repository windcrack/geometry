const mainBlock = document.querySelector('.container').offsetHeight + 2643;
const asideCall = document.querySelector('.aside-lang__call');
const asideSocalImg = document.querySelectorAll('.aside-social__img')

function classAdd(){
    let scroll = $(window).scrollTop();
    if(scroll > mainBlock){
        asideCall.classList.add('aside-lang__call_active')
        asideSocalImg.forEach(elem => {
            elem.classList.add('aside-social__img_active')
        })

    }else{
        asideCall.classList.remove('aside-lang__call_active')
        asideSocalImg.forEach(elem => {
            elem.classList.remove('aside-social__img_active')
        })
    }
}

function addScrollClass(){
    window.addEventListener('scroll', classAdd)
}


addScrollClass()

$(".consultation-form__input").mask("+7(999)999-99-99");