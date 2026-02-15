
gsap.registerPlugin(ScrollTrigger);

// Evita que o navegador restaure a posição do scroll ao recarregar a página
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Garante que a página comece no topo quando carregar (resolve restauração residual)
window.addEventListener('load', () => {
    setTimeout(() => window.scrollTo(0, 0), 50);
});


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
        end: "bottom 15%"
    }
});

tl.to(".mask", {
    maskSize: valorMaskSize,
    maskPosition: valorMaskPosition,
    duration: 4
})

tl.set(".activate-btn", {
    display: "block",
    pointerEvents: "auto"
}, "-=4");

tl.fromTo(".activate-btn", {
    opacity: 0
}, {
    opacity: 1.5,
    duration: 2
}, "-=2");


const tl2 = gsap.timeline({ paused: true });

tl2.to(".activate-btn", {
    opacity: 0,
    duration: 1.5
});

tl2.to(".mask", {
    clipPath: "circle(0% at 50% 50%)",
    duration: 1,
    ease: "power2.inOut"
}, "-=1");

tl2.set(".conteudo", {
    display: "block",
    pointerEvents: "auto",
}, "-=1")

tl2.fromTo(".conteudo", {
    opacity: 0
}, {
    opacity: 1,
    duration: 2,
    onComplete: () =>
        gsap.set(".conteudo", { pointerEvents: "auto" })
}, "-=1");


let btnMask = document.getElementById("activate-content");

btnMask.addEventListener("click", () => {
    tl2.play();
});





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



const imagens = document.querySelectorAll(".img-sound")
const audios = document.querySelectorAll("audio")

imagens.forEach(img => {
    const audio = document.getElementById(img.dataset.audio)

    img.addEventListener("mouseenter", () => {
        audios.forEach(a => {
            a.pause();
            a.currentTime = 0;
        });

        audio.play();
    });

    img.addEventListener("mouseleave", () => {
        audio.pause();
    });
});








