document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbarMenu = document.getElementById("navbar-default");

    toggleButton.addEventListener("click", function () {
        // Alterna a classe 'hidden' no menu ao clicar no botão
        navbarMenu.classList.toggle("hidden");
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
        modalElement.remove(); // Remove a modal do DOM ao fechar
    }
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
