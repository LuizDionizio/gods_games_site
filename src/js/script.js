document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbarMenu = document.getElementById("navbar-default");

    toggleButton.addEventListener("click", function () {
        // Alterna a classe 'hidden' no menu ao clicar no botão
        navbarMenu.classList.toggle("hidden");
    });
});

// Navbar click configuration
document.addEventListener("DOMContentLoaded", function () {
    // Altura da navbar
    const navbarHeight = document.querySelector("nav").offsetHeight;

    // Seleciona todos os links da navbar
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão de rolagem

            // Obtem o alvo da seção
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição correta de rolagem, descontando a altura da navbar
                const offsetPosition = targetElement.offsetTop - navbarHeight;

                // Rola suavemente para a posição
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Moldais
async function loadModal(id) {
    // Verifica se a modal já existe no DOM para evitar duplicação
    if (document.getElementById(`modal-${id}`)) {
        document.getElementById(`modal-${id}`).classList.remove("hidden");
        return;
    }

    // Carrega o conteúdo da modal dinamicamente
    const response = await fetch(`./src/pages/utils/modal/modal-${id}.html`);
    const modalContent = await response.text();

    // Insere a modal no corpo do documento
    document.body.insertAdjacentHTML("beforeend", modalContent);

    // Remove a classe "hidden" para exibir a modal
    document.getElementById(`modal-${id}`).classList.remove("hidden");
    document.getElementById(`modal-${id}`).classList.add("flex");
    document.getElementById('btn-back').classList.add("hidden")
    document.getElementById('btn-next').classList.add("hidden")

    // Adiciona um evento para fechar a modal ao clicar fora dela
    const modalElement = document.getElementById(`modal-${id}`);
    modalElement.addEventListener("click", (event) => {
        if (event.target.id === `modal-${id}`) {
            closeModal(id);
        }
    });
}

function closeModal(id) {
    const modalElement = document.getElementById(`modal-${id}`);
    if (modalElement) {
        modalElement.classList.add("hidden");
        modalElement.classList.remove('flex')
        modalElement.remove(); // Remove a modal do DOM ao fechar
        document.getElementById('btn-back').classList.remove("hidden")
        document.getElementById('btn-next').classList.remove("hidden")
    }
}

//Slideshow equipe
let slideIndex = 0;

    // Função para mostrar o slide atual
    function showSlide(n) {
        const slides = document.querySelectorAll('.carousel-item');
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    }

    // Função para mover para o próximo slide
    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    // Função para voltar ao slide anterior
    function prevSlide() {
        slideIndex--;
        showSlide(slideIndex);
    }

    // Troca automática de slides
    setInterval(nextSlide, 10000); // Altere 10000 para o intervalo desejado (em milissegundos)

    // Inicializar o primeiro slide
    showSlide(slideIndex);

