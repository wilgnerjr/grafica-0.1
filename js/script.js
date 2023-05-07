// ==========TELA DE ABERTURA INTRODUTORIA==========
window.addEventListener('DOMContentLoaded', () => {
    let body = document.getElementById('body');
    let intro = document.querySelector('.intro');
    let introP = document.querySelector('.intro-p');
    let logo = document.querySelector('.logoIntroH1');
    let logoSpan = document.querySelectorAll('.logo-partes');
    window.onload = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        continuarExecucao();
    };
    function continuarExecucao() {
        // Coloque aqui o código que você quer executar depois da atualização da página
        body.style.overflow = 'hidden';
        setTimeout(function () {
            intro.style.display = 'none';
            body.style.overflow = 'visible';
        }, 3500);
    };
    let horaAtual = new Date().getHours();
    if (horaAtual >= 6 && horaAtual < 18) {
    }
    else {
        intro.style.backgroundColor = 'black';
        logo.style.color = 'gold';
        logo.style.textShadow = '0px 0px 8px yellow';
        introP.style.color = 'white';
        introP.style.textShadow = '0px 0px 8px white';
    };
    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('activeMenuIntro');
            }, (index + 1) * 100);
        });
        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('activeMenuIntro');
                    span.classList.add('fadeIntro');
                }, (span + 1) * 50);
            });
        }, 2000);
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    });

});

// ==========MENU DE NAVEGAÇÂO RESPONSIVO==========
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    const navMenu = document.querySelector(".nav-menu");
    const body = document.getElementById('body');
    hamburger.classList.toggle("activeMenu");
    navMenu.classList.toggle("activeMenu");
    if (hamburger.classList.contains('activeMenu')) {
        body.style.overflow = 'hidden';
    }
    else {
        body.style.overflow = 'auto';
    }
})
function esconder() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.getElementById('body');

    navMenu.classList.toggle("activeMenu");
    if (hamburger.classList.contains('activeMenu')) {
        hamburger.classList.remove("activeMenu");
        body.style.overflow = 'auto';
    }
    else {
        body.style.overflow = 'auto';
    }

    teste();
}

// ==========ESTADO DE FUNCIONAMENTO==========
function exibirMensagem() {
    const data = new Date();
    const hora = data.getHours();
    const diaSemana = data.getDay();
    var mensagem = "";
    var status = "";

    if (diaSemana === 0) { // Domingo
        mensagem = "● FECHADO";
        status = "fechado";
    } else if (diaSemana === 6) { // Sábado
        if (hora >= 8 && hora < 11) {
            mensagem = "● ABERTO";
            status = "aberto";
        } else {
            mensagem = "● FECHADO";
            status = "fechado";
        }
    } else { // Dias de semana (de segunda a sexta)
        if (hora >= 7 && hora < 18) {
            mensagem = "● ABERTO";
            status = "aberto";
        } else {
            mensagem = "● FECHADO";
            status = "fechado";
        }
    }
    document.getElementById("mensagem").innerHTML = mensagem;
    document.getElementById("mensagem").className = status;
}
setInterval(exibirMensagem, 1000); // a cada 1 segundo

// ==========CONFIGURAÇÕES DE SLIDE==========
const myslide = document.querySelectorAll('.myslider'), dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
    counter += 1;
    slidefun(counter);
}

function plusSlide(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove("activeSlide");
    }
    if (n > myslide.length) {
        counter = 1;
    }
    else if (n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add("activeSlide");
}
