document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbarMenu = document.getElementById("navbar-default");

    toggleButton.addEventListener("click", function () {
        // Alterna a classe 'hidden' no menu ao clicar no botão
        navbarMenu.classList.toggle("hidden");
    });
});

// main.js
async function loadModal() {
    const response = await fetch("./src/pages/utils/modal.html");
    const modalContent = await response.text();
    document.body.insertAdjacentHTML("beforeend", modalContent);
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// Carrossel
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
    const items = document.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;

    // Função para mostrar o item atual e esconder os outros
    function showItem(index) {
        items.forEach((item, idx) => {
            if (idx === index) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Ação do botão anterior
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;  // Desce o índice
        showItem(currentIndex);
    });

    // Ação do botão próximo
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % items.length;  // Sobe o índice
        showItem(currentIndex);
    });

    // Mostrar o primeiro item
    showItem(currentIndex);
});
