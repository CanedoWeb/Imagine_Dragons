
gsap.registerPlugin(ScrollTrigger);


let valorMaskSize = "3000vw"

if (window.innerWidth < 1000) {
    valorMaskSize = "8200vw"
}
let valorMaskPosition = "center 62%"

if (window.innerWidth < 1000) {
    valorMaskPosition = "center 61.5%"
}

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container-pai",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "bottom top",
        markers: true
    }
});

tl.to(".mask", {
    maskSize: valorMaskSize,
    maskPosition: valorMaskPosition,
    duration: 4
})

tl.to(".mask", {
    clipPath: "circle(0% at 50% 50%)",
    duration: 3
}, "+=0")


tl.set(".conteudo", {
    display: "block",
    pointerEvents: "none"
}, "+=0");

tl.fromTo(".conteudo", {
    opacity: 0
}, {
    opacity: 1,
    duration: 1,
    onComplete: () => gsap.set(".conteudo", { pointerEvents: "auto" })
}, "+=0");


// Menu burger (mobile)
let btnAbrir = document.getElementById('btn-abrir')
let btnFechar = document.getElementById('btn-fechar')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')
let links = document.querySelectorAll('#menu-mobile a')

btnAbrir.addEventListener('click', () => {
    menu.classList.add('abrir')
    overlay.classList.add('ativo')
    btnAbrir.style.display = 'none'
})

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir')
    overlay.classList.remove('ativo')
    btnAbrir.style.display = 'flex'
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir')
    overlay.classList.remove('ativo')
    btnAbrir.style.display = 'flex'
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir')
        overlay.classList.remove('ativo')
        btnAbrir.style.display = 'flex'
    })
})








