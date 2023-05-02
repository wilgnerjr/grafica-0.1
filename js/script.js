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

// ==========MODAL==========
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close");
var modalTitleImg = document.getElementById("modalTitleImg");
var conteudoDetalhes = document.getElementById("conteudoDetalhes");

var produto1 = document.getElementById("produto1");
var produto2 = document.getElementById("produto2");
var produto3 = document.getElementById("produto3");
var produto4 = document.getElementById("produto4");
var produto5 = document.getElementById("produto5");
var produto6 = document.getElementById("produto6");
var produto7 = document.getElementById("produto7");
var produto8 = document.getElementById("produto8");
var produto9 = document.getElementById("produto9");
var produto10 = document.getElementById("produto10");
var produto11 = document.getElementById("produto11");
var produto12 = document.getElementById("produto12");
var produto13 = document.getElementById("produto13");
var produto14 = document.getElementById("produto14");
var produto15 = document.getElementById("produto15");
var produto16 = document.getElementById("produto16");
var produto17 = document.getElementById("produto17");
var produto18 = document.getElementById("produto18");
var produto19 = document.getElementById("produto19");
var produto20 = document.getElementById("produto20");
var produto21 = document.getElementById("produto21");
var produto22 = document.getElementById("produto22");
var produto23 = document.getElementById("produto23");
var produto24 = document.getElementById("produto24");



produto1.onclick = function () {
    modalTitleImg.textContent = "ADESIVO";
    conteudoDetalhes.textContent = "Com os adesivos de papel personalizados, você tem a liberdade de criar designs únicos que refletem sua personalidade e estilo.Além de serem acessíveis, eles são duráveis e resistentes às intempéries, ideais para uso interno.Você também pode usá - los para divulgar sua marca ou mensagem, aplicando - os em embalagens, cadernos, agendas e muito mais.Seja criativo e adicione um toque pessoal aos seus pertences com adesivos personalizados de papel!";


    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}

produto2.onclick = function () {
    modalTitleImg.textContent = "BANNER";
    conteudoDetalhes.textContent = "Com os adesivos de papel personalizados, você tem a liberdade de criar designs únicos que refletem sua personalidade e estilo.Além de serem acessíveis, eles são duráveis e resistentes às intempéries, ideais para uso interno.Você também pode usá - los para divulgar sua marca ou mensagem, aplicando - os em embalagens, cadernos, agendas e muito mais.Seja criativo e adicione um toque pessoal aos seus pertences com adesivos personalizados de papel!";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto3.onclick = function () {
    modalTitleImg.textContent = "BLOCOS DE COMANDA";
    conteudoDetalhes.textContent = "Com os blocos de comandas, você tem a praticidade de ter tudo organizado em um só lugar. Seja para uso em restaurantes, bares, cafés ou eventos, os blocos de comandas ajudam a garantir a eficiência do serviço e a satisfação dos clientes. Além disso, eles são duráveis e resistentes, com uma variedade de opções de tamanho e formato para se adaptar às suas necessidades. Simplifique sua vida e melhore a experiência dos seus clientes com os blocos de comandas!";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto4.onclick = function () {
    modalTitleImg.textContent = "CAIXA PERSONALIZADA";
    conteudoDetalhes.textContent = "Personalize seus presentes com caixas personalizadas! Surpreenda seus amigos e familiares com caixas únicas e exclusivas que refletem sua personalidade e estilo. Escolha entre uma variedade de tamanhos, formatos, cores e designs para criar a caixa perfeita para seu presente.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto5.onclick = function () {
    modalTitleImg.textContent = "CALENDÁRIO";
    conteudoDetalhes.textContent = "Calendários personalizados são uma ótima maneira de organizar sua vida com estilo. Com uma variedade de opções de tamanhos e designs, você pode criar um calendário exclusivo que se adapte às suas necessidades. Use-o para planejar seus compromissos, aniversários, datas importantes e muito mais. Além disso, os calendários personalizados são uma excelente opção de presente para amigos, familiares ou colegas de trabalho. Personalize com suas fotos favoritas e deixe cada mês mais especial. Peça o seu calendário personalizado agora mesmo e comece a organizar sua vida com estilo.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto6.onclick = function () {
    modalTitleImg.textContent = "CAMISETA";
    conteudoDetalhes.textContent = "Camisas personalizadas: a maneira perfeita de mostrar seu estilo único! Escolha entre uma variedade de cores, tamanhos e designs para criar uma camisa que reflita sua personalidade. Adicione imagens, frases ou logotipos para mostrar sua criatividade e promover sua marca ou evento. As camisas personalizadas são ótimas para presentes exclusivos ou para uniformizar equipes. Experimente agora e faça uma declaração de moda personalizada!";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto7.onclick = function () {
    modalTitleImg.textContent = "CARDÁPIO";
    conteudoDetalhes.textContent = "Com um cardápio personalizado, seu negócio pode se destacar dos demais e deixar uma impressão duradoura em seus clientes. Personalize seu cardápio com seu logotipo, fotos de seus pratos e uma variedade de opções de design para torná-lo mais atraente. Além disso, um cardápio bem organizado pode ajudar seus clientes a escolherem o que desejam mais facilmente e aumentar as chances de pedirem mais itens. Não perca a oportunidade de encantar seus clientes e promover sua marca com um cardápio personalizado.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto8.onclick = function () {
    modalTitleImg.textContent = "CARIMBOS";
    conteudoDetalhes.textContent = "Com Carimbos Personalizados você pode adicionar um toque especial aos seus documentos, envelopes, cartões de visita e muito mais. Eles também são uma ótima opção para empresas que desejam promover sua marca, adicionando seu logotipo ou informações de contato em seus materiais de escritório. Além disso, carimbos personalizados são uma opção acessível e durável, permitindo que você economize tempo e dinheiro em comparação com a impressão tradicional. Com a possibilidade de personalização, os carimbos são uma maneira eficiente e prática de fazer uma declaração pessoal ou profissional.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto9.onclick = function () {
    modalTitleImg.textContent = "CARTÃO DE VISITA";
    conteudoDetalhes.textContent = "Cartões de visita são uma ferramenta essencial para qualquer profissional ou empresa. Eles fornecem uma maneira fácil e conveniente de apresentar suas informações de contato e ajudam a criar uma boa primeira impressão. Com cartões de visita personalizados, você pode destacar-se da concorrência e mostrar sua criatividade e estilo.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto10.onclick = function () {
    modalTitleImg.textContent = "CHAVEIROS";
    conteudoDetalhes.textContent = "Procurando por um brinde personalizado que seja prático e útil? Aposte em chaveiros personalizados! Com várias opções de formatos, cores e materiais, você pode criar um chaveiro que reflita sua personalidade ou promova sua marca. Além disso, eles são um item indispensável do dia a dia, mantendo suas chaves organizadas e fáceis de encontrar. Presenteie amigos e clientes com chaveiros personalizados que eles irão usar e apreciar. Compre já o seu!";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto11.onclick = function () {
    modalTitleImg.textContent = "CONVITES";
    conteudoDetalhes.textContent = "Celebre momentos especiais de maneira única com convites personalizados! Com um convite personalizado, você pode transmitir a personalidade e o estilo do evento antes mesmo que ele comece. Seja um casamento, aniversário, formatura ou qualquer outra ocasião, um convite personalizado pode fazer toda a diferença. Com uma variedade de opções de design, papel, tamanho e acabamento, você pode criar um convite que seja verdadeiramente especial e memorável. Convide seus amigos e familiares para celebrar juntos e comece a criar o seu convite personalizado agora!";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto12.onclick = function () {
    modalTitleImg.textContent = "CÓPIA";
    conteudoDetalhes.textContent = "Precisa fazer cópias de documentos importantes ou projetos especiais? Nós podemos ajudar! Oferecemos serviços de cópias de alta qualidade e precisão, utilizando equipamentos modernos e de última geração. Além disso, nosso atendimento é rápido e eficiente, garantindo que você receba suas cópias no prazo estipulado. Venha nos visitar e experimente o nosso serviço de cópias hoje mesmo!";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto13.onclick = function () {
    modalTitleImg.textContent = "CANECAS";
    conteudoDetalhes.textContent = "Canecas personalizadas são uma ótima opção para quem gosta de bebidas quentes. Com elas, você pode criar um produto único e exclusivo com a sua frase favorita, foto ou design exclusivo. Elas são perfeitas para presentear alguém querido ou até mesmo para se presentear. E o melhor, podem ser usadas em diversas situações, como no trabalho, em casa ou até como decoração. Não perca mais tempo e adquira já a sua!";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto14.onclick = function () {
    modalTitleImg.textContent = "CRACHÁS";
    conteudoDetalhes.textContent = "Crachás são itens essenciais para identificação e segurança em empresas, eventos e conferências. Eles são fáceis de usar, ajudam a criar um ambiente mais seguro e organizado, além de serem personalizáveis de acordo com as necessidades de cada empresa ou evento. Adquira já os seus crachás personalizados e melhore a identificação e comunicação entre os colaboradores!";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto15.onclick = function () {
    modalTitleImg.textContent = "CREDENCIAL";
    conteudoDetalhes.textContent = "Credenciais personalizadas são essenciais para eventos, conferências e feiras. Elas permitem identificar facilmente os participantes e melhorar a segurança e organização. As credenciais são feitas com materiais duráveis e podem ser personalizadas com nome, cargo, foto e logo do evento. Adquira as suas credenciais personalizadas agora e garanta um evento mais seguro, organizado e profissional.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto16.onclick = function () {
    modalTitleImg.textContent = "DISPLAY DE MESA";
    conteudoDetalhes.textContent = "Display de mesa é essencial para destacar produtos ou serviços em ambientes corporativos. Personalizável e durável, o display de mesa é uma forma eficaz de transmitir informações importantes e fortalecer a imagem da sua empresa. Adquira já o seu e garanta um destaque único para os seus produtos ou serviços.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto17.onclick = function () {
    modalTitleImg.textContent = "ENCADERNAÇÕES";
    conteudoDetalhes.textContent = "A encadernação é uma técnica que protege e organiza documentos de forma profissional e durável. Personalizável e feita com materiais de qualidade, a encadernação garante maior proteção, organização e um visual único para os seus materiais. Garanta já o serviço de encadernação e dê um upgrade na sua organização.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto18.onclick = function () {
    modalTitleImg.textContent = "FICHAS";
    conteudoDetalhes.textContent = "Fichas personalizadas são uma excelente opção para agregar valor e exclusividade à marca ou evento, sendo produzidas em materiais de alta qualidade e customizadas com designs únicos e exclusivos. Ideais para estabelecimentos que buscam oferecer uma experiência diferenciada aos clientes, elas podem ser produzidas em diferentes tamanhos, formatos e cores, contendo logotipos, slogans, imagens e outras informações que representem a marca ou evento.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto19.onclick = function () {
    modalTitleImg.textContent = "FOLDERS/PANFLETO";
    conteudoDetalhes.textContent = "Folders personalizados são uma maneira eficiente e versátil de promover produtos e serviços, fornecendo informações importantes de forma atraente e clara. Eles podem ser adaptados às necessidades específicas da empresa em termos de tamanho, formato, material e acabamento. Ideais para distribuição em eventos, eles ajudam a criar uma marca forte e a aumentar a credibilidade da empresa ou evento.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto20.onclick = function () {
    modalTitleImg.textContent = "IMPRESSÕES 3D";
    conteudoDetalhes.textContent = "A impressão 3D é uma tecnologia inovadora que permite criar objetos complexos rapidamente a partir de modelos digitais. Ideal para produção em pequena escala ou sob medida, é uma solução versátil e econômica para projetos de design, engenharia e arquitetura. Entre em contato com um especialista para saber mais sobre como a impressão 3D pode transformar sua forma de criar e produzir.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto21.onclick = function () {
    modalTitleImg.textContent = "PASTAS";
    conteudoDetalhes.textContent = "As pastas personalizadas são uma maneira prática e eficiente de organizar documentos e materiais de marketing, além de ser uma ótima ferramenta para exibir sua marca de maneira profissional. Entre em contato com um especialista para saber como as pastas personalizadas podem ajudar sua empresa a se destacar em eventos e reuniões.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto22.onclick = function () {
    modalTitleImg.textContent = "PLASTIFICAÇÃO";
    conteudoDetalhes.textContent = "A plastificação é uma técnica simples e eficaz para proteger documentos e materiais de marketing contra rasgos, sujeira e umidade. Ela prolonga a vida útil dos seus documentos e garante que estejam sempre prontos para uso quando necessário. Entre em contato com um especialista para saber mais sobre como a plastificação pode ajudar a proteger seus materiais importantes.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto23.onclick = function () {
    modalTitleImg.textContent = "PLOTAGEM";
    conteudoDetalhes.textContent = "A plotagem é uma técnica de impressão de alta qualidade que permite criar gráficos, desenhos e imagens em grandes formatos, ideal para produzir materiais de marketing e comunicação visualmente atraentes e duráveis. Entre em contato com um especialista em plotagem para saber como essa técnica pode ajudar a elevar a imagem da sua empresa em eventos e feiras.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";
}
produto24.onclick = function () {
    modalTitleImg.textContent = "SCANNER";
    conteudoDetalhes.textContent = "O scanner é uma tecnologia essencial para digitalizar documentos e imagens em alta resolução, permitindo o armazenamento e compartilhamento de informações de forma mais eficiente e segura. Entre em contato com um especialista em scanner para saber mais sobre como essa tecnologia pode ajudar sua empresa a ser mais eficiente.";

    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    modal.style.display = "block";

}

closeBtn.onclick = function () {
    body.style.overflow = "auto";
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        body.style.width = "100%";
        body.style.height = "100vh";
        body.style.overflow = "auto";
        modal.style.display = "none";
        conteudoDetalhes.textContent = "";
    }
}