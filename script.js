// iPhone

let iphone14 = document.querySelector('.neplus')
let plus = document.querySelector('.plus')
let money = document.querySelector('.pul')
let text = document.querySelector('.text1')
let text1 = document.querySelector('.text2')
let colour = document.querySelectorAll('.colour')
let img = document.querySelector('.img')
let span = document.querySelector('.color')
let main = document.querySelector('.divMain')

let coolers = {
    'blue':'./img/iphone-14-finish-select-202209-6-1inch-blue.jpg',
    'purple':'./img/iphone-14-finish-select-202209-6-1inch-purple.jpg',
    'yellow':'./img/iphone-14-finish-select-202209-6-1inch-yellow.jpg',
    'midnight':'./img/iphone-14-finish-select-202209-6-1inch-midnight.jpg',
    'red':'./img/iphone-14-finish-select-202209-6-1inch-product-red.jpg'
}

iphone14.onclick = () => {
    if(plus.classList.entries('active')){
        iphone14.classList.add('active')
        plus.classList.remove('active')
        money.innerHTML = 'From $799 or $33.29/mo. for 24 mo. trade‑in*'
    }
}

plus.onclick = () => {
    if(iphone14.classList.entries('active')){
        plus.classList.add('active')
        iphone14.classList.remove('active')
        money.innerHTML = 'From $899 or $37.45/mo. for 24 mo. trade‑in*'
    }
}

let thisIsElonMusk = ''

colour.forEach(el => {
    let key = el.getAttribute('data-col')
    el.onclick = () => {
        colour.forEach(btn => btn.classList.remove('activef'))

        img.src = coolers[key]

        el.classList.add('activef')
        thisIsElonMusk = key
        span.innerHTML = thisIsElonMusk
    }
    el.onmouseenter = () => {
        span.innerHTML = key
    }
    el.onmouseleave = () => {
        span.innerHTML = thisIsElonMusk
    }
})

