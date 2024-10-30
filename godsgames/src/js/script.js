/* Menu responsivo*/
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("[data-collapse-toggle='navbar-default']");
    const navbar = document.getElementById("navbar-default");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("hidden");
    });
});

// Seleciona todos os itens do menu
const menuItems = document.querySelectorAll('.menu-item');
// Adiciona um evento de clique a cada item
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe 'bg-yellow-400' de todos os itens
        menuItems.forEach(i => {
            i.classList.remove('bg-yellow-400', 'text-white', 'text-yellow-400');
            i.classList.add('text-gray-900', 'md:text-white'); // classe padrão para não selecionado
        });

        // Adiciona a classe 'bg-yellow-400' e 'text-white' ao item clicado para telas menores
        if (window.innerWidth < 768) {
            this.classList.remove('text-gray-900')
            this.classList.add('bg-yellow-400', 'text-white'); // item selecionado
        }
        // Apenas muda a cor do texto para dourado no item clicado em telas médias e maiores
        if (window.innerWidth >= 768) {
            this.classList.remove('md:text-white')
            this.classList.add('text-yellow-400'); // item selecionado
        }
    });
});