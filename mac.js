let btns = document.querySelectorAll('.btnn')
let span = document.querySelector('.sosss')
let img = document.querySelector('.img')
let money = document.querySelectorAll('.cents')
let black = document.querySelector('.centses')
let deneshka = document.querySelector('.deneshka')

let colors = {
    'White':'./img/mbp14-spacegray-select-2021101.png',
    'Space Grey':'./img/mbp14-silver-select-2021101.png'
}

let that = ''

btns.forEach(btn => {
    let key = btn.getAttribute('data-col')
    btn.onclick = () => {
        img.src = colors[key]

        that = key
        span.innerHTML = that
    }
})

let dengi = {
    '+$200': 200,
    '+$600': 600,
    '+$1200': 1200
}

let total = 1999
let thisIsElonMusk = 1

money.forEach(el => {
    let key = el.getAttribute('data-mon')
    el.onclick = () => {
        if(thisIsElonMusk > 0){
            total += dengi[key]
            deneshka.innerHTML = '$' + total
            
        } else {
            total = 1999
            total += dengi[key]
            deneshka.innerHTML = '$' + total
            thisIsElonMusk++
        }
        thisIsElonMusk--
    }
    black.onclick = () => {
        deneshka.innerHTML = '$' + 1999
    } 
})
