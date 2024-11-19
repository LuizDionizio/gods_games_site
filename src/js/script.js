document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbarMenu = document.getElementById("navbar-default");

    toggleButton.addEventListener("click", function () {
        // Alterna a classe 'hidden' no menu ao clicar no botão
        navbarMenu.classList.toggle("hidden");
    });
});

// Moldais

//Falbet
async function loadModal_F() {
    const response = await fetch("./src/pages/utils/modal.html");
    const modalContent = await response.text();
    document.body.insertAdjacentHTML("beforeend", modalContent);
    document.getElementById("modal-falbet").classList.remove("hidden");
}

function closeModal_F() {
    document.getElementById("modal-falbet").classList.add("hidden");
}

//NaTT
async function loadModal_N() {
    const response = await fetch("./src/pages/utils/modal.html");
    const modalContent = await response.text();
    document.body.insertAdjacentHTML("beforeend", modalContent);
    document.getElementById("modal-natt").classList.remove("hidden");
}

function closeModal_N() {
    document.getElementById("modal-natt").classList.add("hidden");
}

//Nogueira
async function loadModal_NO() {
    const response = await fetch("./src/pages/utils/modal.html");
    const modalContent = await response.text();
    document.body.insertAdjacentHTML("beforeend", modalContent);
    document.getElementById("modal-nogueira").classList.remove("hidden");
}

function closeModal_NO() {
    document.getElementById("modal-nogueira").classList.add("hidden");
}

//Dionizio
async function loadModal_D() {
    const response = await fetch("./src/pages/utils/modal.html");
    const modalContent = await response.text();
    document.body.insertAdjacentHTML("beforeend", modalContent);
    document.getElementById("modal-dionizio").classList.remove("hidden");
}

function closeModal_D() {
    document.getElementById("modal-dionizio").classList.add("hidden");
}

//Anny
async function loadModal_A() {
    const response = await fetch("./src/pages/utils/modal.html");
    const modalContent = await response.text();
    document.body.insertAdjacentHTML("beforeend", modalContent);
    document.getElementById("modal-anny").classList.remove("hidden");
}

function closeModal_A() {
    document.getElementById("modal-anny").classList.add("hidden");
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
